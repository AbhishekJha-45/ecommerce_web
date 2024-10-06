import { verifyJwt } from "../middlewares/auth.middleware.js";
import { Router } from "express";

const router = Router();


import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/category.controller.js";

router.route("/create-category").post(verifyJwt,createCategory);

router.route("/").get(getCategories);
router.route("/get-category-by-id").get(getCategoryById);
router.route("/update-category").patch(verifyJwt,updateCategory);

router.route("/delete-category").delete(verifyJwt,deleteCategory);

export default router;
