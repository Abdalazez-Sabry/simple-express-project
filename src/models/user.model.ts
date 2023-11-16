import mongoose, { InferSchemaType, Model, Models } from "mongoose"
import bcrypt from "bcrypt"
import {logger} from "../utils/logger"
import config, { has } from "config"

export interface IUserInput {
    email: string,
    name: string,
    password: string,
}

export interface IUser extends IUserInput, mongoose.Document {
    createdAt: Date,
    updatedAt: Date,
    comparePasswords: (candidatePassword: string) => Promise<boolean>
}

const userSchema: mongoose.Schema<IUser> = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    name : {type: String, required: true},
    password: {type: String, required: true},

}, {
    timestamps: true
})

userSchema.pre("save", async function  (next) {
    let user = this as unknown as IUser

    if (!user.isModified("password")) {
        return next()
    }

    const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"))
    const hash = bcrypt.hashSync(user.password, salt)

    user.password = hash

    return next()
})

userSchema.methods.comparePasswords = async function (candidatePassword: string): Promise<boolean>  {
    const user = this as unknown as IUser

    return bcrypt.compare(candidatePassword, user.password).catch(() => false) 
}

const UserModel = mongoose.model("User", userSchema)

export default UserModel
