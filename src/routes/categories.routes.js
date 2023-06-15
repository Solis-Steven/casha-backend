import { Router } from "express";
import { 
    createCategory, 
    getCategories, 
    updateCategory, 
    deleteCategory 
} from "../controllers/categories.controller.js";

const router = Router();

router.get("/", getCategories);
router.post("/", createCategory);
router.put("/", updateCategory);
router.delete("/", deleteCategory);

export default router;