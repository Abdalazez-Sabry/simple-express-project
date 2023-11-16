import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt.utils";
import { logger } from "../utils/logger";
import { findSessions, reIssueAccessToken } from "../service/session.service";

export async function deserializeUser(req: Request, res: Response, next: NextFunction)  {
    const accessToken = req.headers.authorization ? req.headers.authorization.replace(/^Bearer\s/, "") : ""

    const refreshToken = req.headers["x-refresh"] ? req.headers["x-refresh"] : "" 
    
    if (!accessToken) { 
        return next()
    }
    
    const {decoded, expired} = verifyJwt(accessToken) 

    const session = await findSessions({_id: decoded})
    
    if (decoded) {
        res.locals.user = decoded
        return next()
    }

    if (expired && accessToken && typeof(refreshToken) == "string") {
        const accessToken = await reIssueAccessToken({refreshToken})
        if (accessToken) {
            res.setHeader("authorization", accessToken)
            const {decoded} = verifyJwt(accessToken)
            res.locals.user = decoded
            return next()
        }
    }
        
   return next()
}