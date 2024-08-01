import { Router } from "express"
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/product-controller"

export default function productRouter(router: Router): void {
  /**
   * @openapi
   * components:
   *  schemas:
   *    CreateProduct:
   *        type: object
   *        required:
   *           - name
   *           - price
   *           - quantity
   *        example:
   *           name: string
   *           quantity: 10
   *           price: 5500
   *    Product:
   *     type: object
   *     required:
   *       - id
   *       - name
   *       - quantity
   *       - price
   *     example:
   *       id: string
   *       name: string
   *       quantity: 14
   *       price: 5500
   *    GetAllProductsResponse:
   *     type: array
   *     items:
   *       $ref: '#components/schemas/Product'
   */

  /**
   * @openapi
   * /product:
   *  get:
   *     tags:
   *     - Product
   *     summary: Get All products
   *     responses:
   *       200:
   *        description: success
   *        content:
   *          application/json:
   *            schema:
   *               $ref: '#/components/schemas/GetAllProductsResponse'
   *       400:
   *        description: Bad request
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/BadRequest'
   */
  router.get("/product", getProducts)

  /**
   * @openapi
   * /product:
   *  post:
   *     tags:
   *     - Product
   *     summary: Create a product
   *     security:
   *      - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schemas/CreateProduct'
   *     responses:
   *       200:
   *        description: success
   *        content:
   *          application/json:
   *            schema:
   *                $ref: '#/components/schemas/CreateProduct'
   *       400:
   *        description: Bad request
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/BadRequest'
   */
  router.post("/product", createProduct)

  /**
   * @openapi
   * /product/{id}:
   *  get:
   *     tags:
   *     - Product
   *     summary: Get product by id
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: Product id
   *     responses:
   *       200:
   *        description: success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/Product'
   *       400:
   *        description: Bad request
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/BadRequest'
   *       404:
   *        description: Not found
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/NotFound'
   */
  router.get("/product/:id", getProductById)

  /**
   * @openapi
   * /product/{id}:
   *  delete:
   *     tags:
   *     - Product
   *     summary: Delete product by id
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: Product id
   *     responses:
   *       204:
   *        description: success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/Deleted'
   *       400:
   *        description: Bad request
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/BadRequest'
   *       404:
   *        description: Not found
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/NotFound'
   */
  router.delete("/product/:id", deleteProduct)

  router.patch("/product/:id", updateProduct)
}
