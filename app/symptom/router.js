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

// Create
router.post("/symptoms", adminOnly, createSympton);
// Get All
router.get("/symptoms", adminOnly, getAllsymptom);
// Get By Id
router.get("/symptoms/:id", adminOnly, getOneSymptom);
// Update
router.put("/symptoms/:id", adminOnly, updateSymptom);
// Delete
router.delete("/symptoms/:id", adminOnly, destroySymptom);

export default router;
