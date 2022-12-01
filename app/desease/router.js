import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { adminOnly } from "../../middleware/auth.js";
import {
  createDisease,
  destroyDisease,
  getAllDisease,
  getOneDiseases,
  updateDiseases,
} from "./controller.js";

const __filename = fileURLToPath(import.meta.url);
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__filename, "../../../public/images"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const router = express.Router();

router.post(
  "/diseases",
  adminOnly,
  multer({ storage: diskStorage }).single("image_url"),
  createDisease
);
router.get("/diseases", adminOnly, getAllDisease);
router.get("/diseases/:name", adminOnly, getOneDiseases);
router.put(
  "/diseases/:id",
  multer({ storage: diskStorage }).single("image_url"),
  adminOnly,
  updateDiseases
);
router.delete("/diseases/:id", adminOnly, destroyDisease);

export default router;
