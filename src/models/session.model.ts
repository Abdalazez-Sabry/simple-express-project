import mongoose from "mongoose";
import { IUser } from "./user.model";

export interface ISessionInput{
    userId: IUser["_id"]
    valid: boolean
    userAgent: string
}

export interface ISession extends mongoose.Document, ISessionInput{
    createdAt: Date
    updatesAt: Date
}

const sessionSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId , ref: "User", required: true},
    valid: {type: Boolean, default: true},
    userAgent: {type: String},
})

const SessionModel = mongoose.model<ISession>('Session', sessionSchema)

export default SessionModel