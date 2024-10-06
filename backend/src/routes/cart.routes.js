import {
  addToCart,
  createCart,
  getCart,
  removeFromCart,
} from "../controllers/cart.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { Router } from "express";

const router = Router();
router.use(verifyJwt);
router.route("/").post(addToCart).get(getCart);
router.route("/:product_id").delete(removeFromCart);
router.route("/create-cart").post(createCart);

export default router;
