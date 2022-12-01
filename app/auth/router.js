import express from "express";
import { adminOnly } from "../../middleware/auth.js";
import { login, logoutAdmin, me, registerAdmin } from "./controller.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", login);
router.get("/me", adminOnly, me);
router.delete("/logout", adminOnly, logoutAdmin);

export default router;
