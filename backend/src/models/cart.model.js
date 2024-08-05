import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          default: 1,
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: String,
      enum: ["empty", "pending", "ordered"],
      default: "empty",
      trim: true,
    },
  },
  { timestamps: true }
);

// Pre-save middleware to calculate totalAmount
cartSchema.pre("save", async function (next) {
  const cart = this;
  try {
    // Populate products with their details
    await cart.populate('products.product');

    // Calculate the total amount
    cart.totalAmount = cart.products.reduce((acc, curr) => {
      const quantity = curr.quantity || 0;
      const price = curr.product.price || 0;

      if (isNaN(quantity) || isNaN(price)) {
        throw new Error(
          `Invalid quantity or price for product ${curr.product.name}`
        );
      }

      return acc + quantity * price;
    }, 0);

    // Set status to "empty" if there are no products
    if (cart.products.length === 0) {
      cart.status = "empty";
    } else if (cart.status === "empty") {
      cart.status = "pending";
    }

    next();
  } catch (error) {
    next(error);
  }
});

export const Cart = mongoose.model("Cart", cartSchema);
  