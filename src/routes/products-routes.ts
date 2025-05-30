import { Router } from "express";
import { ProductsController } from "../controller/products-controller.js";

const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes.get("/", productsController.index);

export { productsRoutes };
