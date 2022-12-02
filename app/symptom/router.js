import express from "express";
import { adminOnly } from "../../middleware/auth.js";
import {
  createSympton,
  destroySymptom,
  getAllsymptom,
  getOneSymptom,
  updateSymptom,
} from "./controller.js";

const router = express.Router();

router.post("/symptoms", adminOnly, createSympton);
router.get("/symptoms", adminOnly, getAllsymptom);
router.get("/symptoms/:id", adminOnly, getOneSymptom);
router.put("/symptoms/:id", adminOnly, updateSymptom);
router.delete("/symptoms/:id", adminOnly, destroySymptom);

export default router;
