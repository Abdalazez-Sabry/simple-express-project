import { Request, Response } from "express";
import { CreateProductInput, UpdateProductInput } from "../schema/product.schema";
import { createProduct, deleteProduct, findAndUpdateProduct, findProduct } from "../service/product.service";
import { logger } from "../utils/logger";

export async function createProductHandler(req: Request<{}, {}, CreateProductInput['body']>, res: Response) {
    try {
        const userId = res.locals.user?._id;
    
        const body = req.body;
        const product = await createProduct({...body, userId: userId})
    
        return res.send(product)
    } catch (e) {
        logger.error(e)
        return res.status(409).send(e)
    }
}

export async function getProductHandler(req: Request<UpdateProductInput["params"]>, res: Response) {
    try {
        const params = req.params;
        const productId = req.params.productId
        const product = await findProduct({productId: productId})

        console.log(productId, product)
        
        if (!product) {
            return res.sendStatus(404)
        }
        return res.send(product)
    } catch (e) {
        logger.error(e)
        return res.status(409).send(e)
    }
}

export async function updateProductHandler(req: Request<UpdateProductInput["params"]>, res: Response) {
    try {
        const userId = res.locals.user?._id

        const update = req.body
        const productId = req.params.productId

        const product = await findProduct({productId})

        if (!product) {
            return res.sendStatus(404)
        }

        if (String(product.userId) !== userId) {
            return res.sendStatus(403)
        }

        const updateProduct = findAndUpdateProduct({productId}, update, {new: true})

        return res.send(updateProduct)
    } catch (e) {
        logger.error(e)
        return res.status(409).send(e)
    }
}

export async function deleteProductHandler(req: Request<UpdateProductInput["params"]>, res: Response) {
    try {
        const userId = res.locals.user?._id

        const productId = req.params.productId
        
        const product = await findProduct({productId})
        
        if (!product) {
            return res.sendStatus(404)
        }
        console.log(product.userId, userId)


        if (String(product.userId) !== userId) {
            return res.sendStatus(403)
        }

        await deleteProduct({productId})

        return res.sendStatus(200)
    } catch (e) {
        logger.error(e)
        return res.status(409).send(e)
    }
}