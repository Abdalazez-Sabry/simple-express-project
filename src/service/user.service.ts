import { omit } from "lodash"
import UserModel, {IUserInput, IUser} from "../models/user.model"

export async function createUser (input: IUserInput) {
    try {
        if (await userUniqueEmail(input.email)) {
            return false
        }
        const user = await UserModel.create(input)
        return omit(user.toJSON(), "password")
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function validateUserPassword({email , password}: {email: string, password: string}) {
    try {
        const user = await UserModel.findOne({email}).exec()

        if (!user) {
            return false
        }

        const isValid = await user.comparePasswords(password)
        if (!isValid) {
            return false
        } 
        return omit(user.toJSON(), "password")

    } catch (e: any) {
        throw new Error(e)
    }
}

export async function userUniqueEmail(email: string) {
    try {
        const user = await UserModel.findOne({email}).exec()
        return user ? true : false
    } catch (e: any) {
        throw new Error(e)
    }
}