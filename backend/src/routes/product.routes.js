import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { Router } from "express";
import {
  createProduct,
  getProducts,
  deleteProduct,
  getProductById,
  updateProduct,
} from "../controllers/product.controller.js";

const router = Router();

router
  .route("/create-product")
  .post(
    verifyJwt,
    upload.fields([{ name: "image", maxCount: 1 }]),
    createProduct
  );

router.route("/get-products").get(getProducts);

router.route("/get-product/:product_id").get(getProductById);

router.route("/update-product").patch(verifyJwt, updateProduct);

router.route("/delete-product").delete(verifyJwt, deleteProduct);

export default router;
