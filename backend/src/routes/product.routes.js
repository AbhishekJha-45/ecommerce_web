import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { Router } from "express";
import {
  createProduct,
  getProducts,
  deleteProduct,
  getProductById,
  updateProduct,
  getProductByCategory,
} from "../controllers/product.controller.js";

const router = Router();

router
  .route("/create-product")
  .post(
    verifyJwt,
    upload.fields([{ name: "image", maxCount: 1 }]),
    createProduct
  );

router.route("/").get(getProducts);

router.route("/:product_id").get(getProductById);

router.route("/").patch(verifyJwt, updateProduct);

router.route("/").delete(verifyJwt, deleteProduct);

router.route("/product-by-category").post(getProductByCategory);

export default router;
