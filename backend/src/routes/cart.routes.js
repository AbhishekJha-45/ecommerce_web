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
router.route("/create-cart").post(createCart);
router.route("/get-cart").get(getCart);
router.route("/add-to-cart").post(addToCart);
router.route("/remove-from-cart").post(removeFromCart);
export default router;
