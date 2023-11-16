import express from "express"
import config  from "config"
import connect from "./utils/connect"
import {logger} from "./utils/logger"
import routes from "./routes"
import {deserializeUser} from "./middleware/deserializeUser"
import {logReceivedRequests} from "./middleware/logReceivedRequests"
import { requireUser } from "./middleware/requireUser"

const port = config.get<number>("port")

const app = express()

app.use(express.json())
app.use(logReceivedRequests)
app.use(deserializeUser)

app.listen(port, async () => {
    logger.info(`The server is running on http://127.0.0.1:${port}`)
    
    await connect();

    routes(app)
})
