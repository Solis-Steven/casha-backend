import { Router } from "express";
import {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/product.controller.js"

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/", updateProduct);
router.delete("/", deleteProduct);

export default router;