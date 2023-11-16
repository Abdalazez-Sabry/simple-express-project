import mongoose from "mongoose";
import { IUser } from "./user.model";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface IProductInput{
    userId: IUser["_id"]
    title: string
    description: string
    price: number
    image: string
}

export interface IProduct extends mongoose.Document, IProductInput{
    createdAt: Date
    updatesAt: Date
}

const productSchema = new mongoose.Schema({
    productId: {type: String, required: true, unique: true, default: () => nanoid()},
    userId: {type: mongoose.Schema.Types.ObjectId , ref: "User", required: true},
    title: {type: String, required: true},
    descritption: {type: String},
    price: {type: Number, required: true},
    image: {type: String},
})

const ProductModel = mongoose.model<IProduct>('Prodcut', productSchema)

export default ProductModel