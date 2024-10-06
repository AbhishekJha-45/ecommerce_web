import express from "express";
import {
  createAddress,
  getUserAddresses,
  getAddressById,
  updateAddress,
  deleteAddress,
} from "../controllers/address.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js"; // Middleware for user authentication

const router = express.Router();
router.use(verifyJwt);
// Routes for CRUD operations on address
router
  .route("/")
  .post(createAddress) // Create new address
  .get(getUserAddresses); // Get all addresses for the logged-in user

router
  .route("/:id")
  .get(getAddressById) // Get address by ID
  .patch(updateAddress) // Update address by ID
  .delete(deleteAddress); // Delete address by ID

export default router;
