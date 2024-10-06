import { asyncHandler } from "../utils/asyncHandler.js";
import { APiResponse as ApiResponse } from "../utils/ApiResponse.js";
import { Product } from "../models/product.model.js";
import { Cart } from "../models/cart.model.js";

export const createCart = asyncHandler(async (req, res) => {
  try {
    const existingCart = await Cart.findOne({ user: req.user._id });
    if (existingCart) {
      return res
        .status(409)
        .json(new ApiResponse(409, `Cart already exists for the current user`));
    }
    const cart = new Cart({
      user: req.user._id,
      products: [],
      status: "empty",
      totalAmount: 0,
    });
    const newCart = await cart.save();

    if (!newCart) {
      return res
        .status(500)
        .json(new ApiResponse(500, "Failed to create cart"));
    }
    return res
      .status(201)
      .json(new ApiResponse(200, "Cart created successfully", newCart));
  } catch (error) {}
});

export const getCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate(
    "products.product"
  );
  // console.log("cart", cart);
  if (!cart) {
    return res.status(404).json(new ApiResponse(404, "Cart does Not exist"));
  }
  return res.status(200).json(
    new ApiResponse(200, "Cart retrieved successfully", {
      cart,
      count: cart.products.length,
    })
  );
});

export const addToCart = asyncHandler(async (req, res) => {
  const { product_id, quantity } = req.body;

  if (!product_id || !quantity) {
    return res
      .status(400)
      .json(new ApiResponse(400, "Product id and quantity are required"));
  }

  if (quantity <= 0) {
    return res
      .status(400)
      .json(new ApiResponse(400, "Quantity must be greater than zero"));
  }

  const product = await Product.findById(product_id);
  if (!product) {
    return res.status(404).json(new ApiResponse(404, "Product not found"));
  }

  let cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    const newCart = new Cart({
      user: req.user._id,
      products: [],
      status: "empty",
    });
    cart = await newCart.save();
  }

  const productIndex = cart.products.findIndex(
    (p) => p.product.toString() === product_id
  );

  if (productIndex > -1) {
    cart.products[productIndex].quantity = quantity; // Replace with new quantity
  } else {
    cart.products.push({ product: product_id, quantity });
  }

  const updatedCart = await cart.save();
  return res
    .status(201)
    .json(
      new ApiResponse(201, "Product added to cart successfully", updatedCart)
    );
});


export const removeFromCart = asyncHandler(async (req, res) => {
  try {
    const { product_id } = req.params;
    if (!product_id) {
      return res.status(400).json(new ApiResponse(400, "Product id is required"));
    }

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json(new ApiResponse(404, "Cart does not exist"));
    }

    // Find the product index in the cart
    const productIndex = cart.products.findIndex(
      (p) => p.product.toString() === product_id
    );

    if (productIndex === -1) {
      return res.status(404).json(new ApiResponse(404, "Product not found in cart"));
    }

    cart.products.splice(productIndex, 1);
    const updatedCart = await cart.save();

    return res.status(200).json(
      new ApiResponse(200, "Product removed from cart successfully", updatedCart)
    );
  } catch (error) {
    console.error("Error removing product from cart:", error);
    return res.status(500).json(new ApiResponse(500, "Internal Server Error"));
  }
});


