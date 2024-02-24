import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
  getUser,
  getUsersForSidebar,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getUser);
router.put("/update/:id", protectRoute, updateUser);

export default router;
