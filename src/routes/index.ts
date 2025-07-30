import { Router } from "express";

import { productsRoutes } from "./products-routes.js";
import { tablesRoutes } from "./tables-routes.js";
import { tablesSessionsRoutes } from "./tables-sessions-routes";
import { ordersRoutes } from "./orders-routes";

const routes = Router();
routes.use("/products", productsRoutes);
routes.use("/tables", tablesRoutes);
routes.use("/tables-sessions", tablesSessionsRoutes);
routes.use("/orders", ordersRoutes);
export { routes };
