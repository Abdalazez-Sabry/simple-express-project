import {TypeOf, object, string} from "zod"

export const createUserSchema = object({
    body: object({
        name: string({
            required_error: "Name is required"
        }),
        password: string({
            required_error: "Password is required"
        }).min(6, "password is too short, should be at least 6 characters"),
        email: string({
            required_error: "Email is required"
        }).email("Not a valid email")
    })
})

export type ICreateUserInput = TypeOf<typeof createUserSchema>