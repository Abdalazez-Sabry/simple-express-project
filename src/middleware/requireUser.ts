import {Request, Response, NextFunction} from "express"
import { logger } from "../utils/logger"

export function requireUser(req: Request, res: Response, next: NextFunction) {
    const user = res.locals.user
    
    if (!user) {
        return res.sendStatus(403).end() // Forbidden
    }

    return  next() 
}