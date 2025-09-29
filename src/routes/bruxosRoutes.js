import express from "express";
import { createBruxos, getAllBruxos, getBruxosById } from "../controller/bruxosController.js";

const router = express.Router();

router.get("/", getAllBruxos);
router.get("/:id", getBruxosById);
router.post("/", createBruxos);

export default router;