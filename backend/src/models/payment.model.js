import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    order: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    payment_mode: {
      type: String,
      enum: [
        "debit card",
        "credit card",
        "cod",
        "upi",
        "net banking",
        "paylater",
      ],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
      trim: true,
    },
  },
  { timestamps: true }
);

export const Payment = mongoose.model("Payment", paymentSchema);
