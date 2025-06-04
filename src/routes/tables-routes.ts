import { Router } from "express";

import { TablesController } from "../controller/tables-controller";

const tablesRoutes = Router();
const tablesController = new TablesController();

tablesRoutes.get("/", tablesController.index);

export { tablesRoutes };
