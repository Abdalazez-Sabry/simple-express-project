import { FilterQuery, UpdateQuery } from "mongoose"
import SessionModel, {ISession, ISessionInput} from "../models/session.model"
import { signJwt, verifyJwt } from "../utils/jwt.utils"
import UserModel from "../models/user.model"
import config from "config"
import { logger } from "../utils/logger"
import { omit } from "lodash"

export async function createSession(userId: ISessionInput, userAgent: string) {
    try {
        return await SessionModel.create({userId, userAgent})
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function findSessions(query: FilterQuery<ISession>) {
    return SessionModel.findOne(query).lean()
}

export async function updateSession(query: FilterQuery<ISession>, updateQuery: UpdateQuery<ISession>) {
    return SessionModel.updateOne(query, updateQuery)
}

export async function reIssueAccessToken({refreshToken}: {refreshToken: string}) {
    const {decoded} =  verifyJwt(refreshToken)
    
    if (!decoded) {
        return false 
    }

    const session = await SessionModel.findById(decoded.session);


    if (!session || !session.valid) {
        return false 
    }

    const userM = await UserModel.findById(session.userId)

    if (!userM) {
        return false
    }

    const user = omit(userM.toJSON(), "password")

    const accessToken = signJwt(
        {...user, session: session._id,},
        {expiresIn: config.get("accessTokenTtl")}
    )
    
    return accessToken
}