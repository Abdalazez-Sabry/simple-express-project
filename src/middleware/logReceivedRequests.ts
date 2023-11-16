import {Request, Response, NextFunction} from "express"
import {logger} from "../utils/logger"

export function logReceivedRequests (req: Request, res: Response, next: NextFunction) {
    logger.info(`Received request: ${req.method} ${req.url}`)
    next()
}