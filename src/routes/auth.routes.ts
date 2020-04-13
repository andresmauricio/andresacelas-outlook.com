import { Router } from "express";
import { singUp, singIn } from "../controllers/auth.controllers";
const router = Router();

router.post("/signup", singUp);
router.post("/signin", singIn);

export default router;
