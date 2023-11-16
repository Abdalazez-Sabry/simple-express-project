import { Express } from "express";
import { createUserHandler } from "./controler/user.controler";
import { createUserSchema } from "./schema/user.schema";
import validate from "./middleware/validateResouce";
import { createSessionHandler, deleteSessionHandler, getUserSessionHandler } from "./controler/session.controler";
import { createSessionSchema } from "./schema/session.schema";
import { requireUser } from "./middleware/requireUser";
import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from "./schema/product.schema";
import { createProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from "./controler/product.controler";

export default function routes(app: Express) {
    app.get("/healthcheck", (req, res) => res.sendStatus(200)) 
    
    app.post("/api/createuser", validate(createUserSchema), createUserHandler)
    app.post("/api/createsession", validate(createSessionSchema), createSessionHandler)

    app.get("/api/sessions", requireUser, getUserSessionHandler)
    app.delete("/api/session", requireUser, deleteSessionHandler)

    app.post("/api/products", [requireUser, validate(createProductSchema)], createProductHandler)
    app.get("/api/products/:productId", validate(getProductSchema), getProductHandler)
    app.put("/api/products/:productId", [requireUser, validate(updateProductSchema)], updateProductHandler)
    app.delete("/api/products/:productId", [requireUser, validate(deleteProductSchema)], deleteProductHandler)
}