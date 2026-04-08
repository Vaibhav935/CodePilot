import { Router } from "express";
import * as fileControllers from "../../controllers/files/index.js";

const router = Router();

router.post("/create", fileControllers.createFile);
router.post("/rename", fileControllers.renameFile);
router.post("/read", fileControllers.readFile);
router.delete("/delete", fileControllers.deleteFile);

export default router;
