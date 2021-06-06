import { Router } from "express";

import { create } from "../controllers/productController";

const productRoutes = Router();

productRoutes.get("/", create);

export { productRoutes };
