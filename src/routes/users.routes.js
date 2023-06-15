import { Router } from "express";
import {
    createUser,
    updateUser
} from "../controllers/users.controller.js"

const router = Router();

router.post("/", createUser);
router.put("/", updateUser);

export default router;