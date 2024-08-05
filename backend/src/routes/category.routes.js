import { verifyJwt } from "../middlewares/auth.middleware.js";
import { Router } from "express";

const router = Router();

router.use(verifyJwt);

import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/category.controller.js";

router.route("/create-category").post(createCategory);

router.route("/get-categories").get(getCategories);
router.route("/get-category-by-id").get(getCategoryById);
router.route("/update-category").patch(updateCategory);

router.route("/delete-category").delete(deleteCategory);

export default router;
