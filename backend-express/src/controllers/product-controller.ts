import { Request, Response } from "express"
import { Product } from "../models/product.model"
export const getProducts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const products = await Product.findAll({
      attributes: ["id", "name", "price", "quantity"],
    })
    console.log(products)
    return res.status(200).json(products)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: (error as Error).message })
  }
}

export const getProductById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params
    const product = await Product.findByPk(id)
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }
    return res.status(200).json(product)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: (error as Error).message })
  }
}

export const createProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, price, quantity, } = req.body
    const product = await Product.create({
      name,
      price,
      quantity,
    })
    return res.status(201).json(product)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: (error as Error).message })
  }
}

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params
    const { name, price, quantity } = req.body
    const product = await Product.findByPk(id)
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }
    await product.update({ name, price, quantity })
    return res.status(200).json(product)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: (error as Error).message })
  }
}

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params
    const product = await Product.findByPk(id)
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }
    await product.destroy()
    return res.status(204).json({
      message: "Product deleted",
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: (error as Error).message })
  }
}
