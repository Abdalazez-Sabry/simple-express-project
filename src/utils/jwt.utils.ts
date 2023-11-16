import config from "config"
import jwt from "jsonwebtoken"

const privateKey = config.get<string>("privateKey")
const publicKey = config.get<string>("publicKey")

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
    return jwt.sign(object, privateKey, {
        ...(options && options),
        algorithm: "RS256"
    })
}

type DecodedType = {
    _id: string,
    email: string,
    name: string,
    session: string
    createdAt: string,
    updatedAt: string,
    __v: number,
    iat: number,
    exp: number
}

export function verifyJwt(token: string) {
    try {
        const decoded = jwt.verify(token, publicKey) as DecodedType 
        return {
            valid: true,
            expired: false,
            decoded
        }
    } catch (e: any) {
        console.log(e)
        return {
            valid: false,
            expired: e.message === "jwt expired",
            decoded: null
        } 
    }
}