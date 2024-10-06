//packages import
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
// default middlewares configurations
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "28kb" }));
app.use(express.urlencoded({ extended: true, limit: "28kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";
import addressRouter from "./routes/address.routes.js";
import commentRouter from "./routes/comment.routes.js";
import productRouter from "./routes/product.routes.js";
import categoryRouter from "./routes/category.routes.js";
import cartRouter from "./routes/cart.routes.js";
import { verifyJwt } from "./middlewares/auth.middleware.js";
//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts/comments", commentRouter);

//product router
app.use("/api/v1/products/", productRouter);

//category router
app.use("/api/v1/category/", categoryRouter);
app.use("/api/v1/cart/", cartRouter);
app.use("/api/v1/address/", addressRouter);
app.get("/", (req, res) => {
  res.send("Welcome to ApnaBazar API");
});
export default app;
