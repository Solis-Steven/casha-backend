import { Router } from "express";
import { 
    createMenu,
    getMenues,
    updateMenu,
    deleteMenu
} from "../controllers/menues.controller.js";

const router = Router();

router.get("/", getMenues);
router.post("/", createMenu);
router.put("/", updateMenu);
router.delete("/", deleteMenu);

export default router;