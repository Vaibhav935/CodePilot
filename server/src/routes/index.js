import { Router } from "express";
import folderRoutes from "./folders/index.js";
import fileRoutes from "./files/index.js";
import authRoutes from "./auth/index.js";
import aiRoutes from "./ai/index.js";

const router = Router();

router.use("/folder", folderRoutes);
router.use("/file", fileRoutes);
router.use("/", authRoutes);
router.use("/ai", aiRoutes);

export default router;
