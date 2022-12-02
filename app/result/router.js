import express from "express";
import { adminOnly } from "../../middleware/auth.js";
import {
  createResult,
  destroyResult,
  getAllResult,
  getOneResult,
  updateResult,
} from "./controller.js";

const router = express.Router();

router.post("/results", createResult);
router.get("/results", getAllResult);
router.get("/results/:id", getOneResult);
router.put("/results/:id", adminOnly, updateResult);
router.delete("/results/:id", adminOnly, destroyResult);

export default router;
