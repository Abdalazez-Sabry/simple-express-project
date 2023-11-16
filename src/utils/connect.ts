import mongoose from "mongoose"
import config from "config"
import { logger } from "./logger" 

export default async function connect() {
    const dbUri = config.get<string>("dbUri")
    try {
        await mongoose.connect(dbUri)
        logger.info("Connected to the database")
    } catch (err) {
        logger.error(`Couldn't connect to the database:\n${err}`)
        process.exit(1)
    }
}