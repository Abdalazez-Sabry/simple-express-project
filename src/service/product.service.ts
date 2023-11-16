import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import ProductModel, { IProductInput, IProduct} from "../models/product.model";

export async function createProduct(input: IProductInput) {
    return ProductModel.create(input)
}

export async function findProduct(query: FilterQuery<IProduct>, options: QueryOptions = {}) {
    const p = ProductModel.findOne(query, options).lean()
    return ProductModel.findOne(query, options)
}

export async function findAndUpdateProduct(query: FilterQuery<IProduct>, update: UpdateQuery<IProduct>, options: QueryOptions = {}) {
    return ProductModel.findOneAndUpdate(query, update, options)
}
export async function deleteProduct(query: FilterQuery<IProduct>) {
    return ProductModel.deleteOne(query)
}