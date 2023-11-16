import { Response, Request } from "express";
import { validateUserPassword } from "../service/user.service";
import { createSession, findSessions, updateSession } from "../service/session.service";
import { signJwt } from "../utils/jwt.utils";
import config from "config";
import { logger } from "../utils/logger";
import UserModel from "../models/user.model"

export async function createSessionHandler (
    req: Request, 
    res: Response
    ) {
    try {
        
        const user = await validateUserPassword(req.body)
        if (!user) {
            return res.status(401).send("Invalid email or password")
        }

        const session = await createSession(user._id, req.get("user-agent") || "")

        const accessToken = signJwt(
            {...user, session: session._id,},
            {expiresIn: config.get("accessTokenTtl")}
        )

        const refreshToken = signJwt(
            {...user, session: session._id,},
            {expiresIn: config.get("refreshTokenTtl")}
        )

        res.send({accessToken, refreshToken}).end()

    } catch (e: any) {
        logger.error(e)
        return res.status(409).send(e).end()
    }
}

export async function getUserSessionHandler(req: Request, res: Response) {
    const userId = res.locals.user?._id

    const sessions = await findSessions({userId: userId, valid: true})

    res.send(sessions).end()

}

export async function deleteSessionHandler(req: Request, res: Response) {
    const sessionId = res.locals.user.session

    logger.fatal(`sessionId: ${sessionId}`)

    await updateSession({_id: sessionId}, {valid: false})

    res.send({
        accessToken: null,
        refreshToken: null
    })
}