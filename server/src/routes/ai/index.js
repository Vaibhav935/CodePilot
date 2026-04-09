import { Router } from "express";
import * as aiControllers from "../../controllers/ai/index.js";

const router = Router();

router.get("/c/:prompt", aiControllers.chat);

export default router;
