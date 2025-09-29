import express from "express";
import { createBruxos, deleteBruxo, getAllBruxos, getBruxosById, updateBruxo } from "../controller/bruxosController.js";

const router = express.Router();

router.get("/", getAllBruxos);
router.get("/:id", getBruxosById);
router.post("/", createBruxos);
router.delete("/:id", deleteBruxo);
router.put("/:id", updateBruxo);

export default router;