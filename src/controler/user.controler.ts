import {Request, Response} from "express"
import {createUser, userUniqueEmail} from "../service/user.service"
import {logger} from "../utils/logger"
import { ICreateUserInput } from "../schema/user.schema"
import { omit } from "lodash"

export async function createUserHandler(
    req: Request<{}, {}, ICreateUserInput["body"]>, 
    res: Response
    ) {
    try {
        const user = await createUser(req.body)
        
        if (!user) {
            logger.fatal(user)
            return res.status(409).send("Email already exists")
        }

        return res.status(200).send(user)
    } catch(e: any) {
        logger.error(e)
        return res.status(409).send(e)
    }
}