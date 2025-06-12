import { Router } from "express";
import { TablesSessionsController } from "@/controller/tables-sessions-controller";

const tablesSessionsRoutes = Router();
const tablesSessionsController = new TablesSessionsController();

tablesSessionsRoutes.post("/", tablesSessionsController.create);
tablesSessionsRoutes.get("/", tablesSessionsController.index);
tablesSessionsRoutes.patch("/:id", tablesSessionsController.updated);

export { tablesSessionsRoutes };
