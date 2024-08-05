import { asyncHandler } from "../utils/asyncHandler.js";
import { Product } from "../models/product.model.js";
import { Category } from "../models/category.model.js";
import { APiResponse as ApiResponse } from "../utils/ApiResponse.js";
import MissingFields from "../utils/MissingFields.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";

export const createProduct = asyncHandler(async (req, res) => {
  let {
    name,
    price,
    description,
    category,
    stock,
    subCategory = null,
  } = req.body;
  const areFieldsEmpty = MissingFields({
    name,
    price,
    description,
    category,
    stock,
  });
  // console.log(areFieldsEmpty);
  if (Object.keys(areFieldsEmpty).length > 0) {
    return res
      .status(400)
      .json(new ApiResponse(400, "All Fields are required", areFieldsEmpty));
  }

  name = name.trim();
  category = category.trim();
  description = description.trim();
  subCategory = subCategory.trim();
  const productExists = await Product.findOne({
    $and: [{ name }, { category }, { price }],
  });
  if (productExists) {
    return res
      .status(409)
      .json(new ApiResponse(409, { product: "Product already exists" }));
  }
  const categoryExists = await Category.findOne({ _id: category });
  if (!categoryExists) {
    return res
      .status(400)
      .json(new ApiResponse(400, { category: "Category does not exist" }));
  }

  const image = req.files?.image[0].path;
  // console.log(image);
  if (!image) {
    return res
      .status(400)
      .json(new ApiResponse(400, "Product Image is required"));
  }
  const uploadedImage = await uploadToCloudinary(image);
  // console.log("uploadedImage", uploadedImage);
  const product = new Product({
    name: name.trim(),
    price,
    user: req.user._id,
    description: description,
    category,
    subCategory,
    stock,
    image: uploadedImage.url,
  });
  const newProduct = await product.save();
  return res.status(201).json(new ApiResponse(201, newProduct));
});

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().populate("category", "name");
  return res.status(200).json(
    new ApiResponse(200, "Products fetched successfully", {
      products,
      count: products.length,
    })
  );
});

export const getProductById = asyncHandler(async (req, res) => {
  const { product_id } = req.params;
  const product = await Product.findById(product_id)
    .populate("category", "name")
    .populate("user", "name email");
  if (!product) {
    return res.status(404).json(new ApiResponse(404, "Product not found"));
  }
  return res.status(200).json(new ApiResponse(200, product));
});

export const updateProduct = asyncHandler(async (req, res) => {
  const { product_id, ...updateFields } = req.body;

  const product = await Product.findById(product_id);
  if (!product) {
    return res.status(404).json(new ApiResponse(404, "Product not found"));
  }

  if (Object.keys(updateFields).length === 0) {
    return res.status(400).json(new ApiResponse(400, "No fields to update"));
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    product_id,
    updateFields,
    { new: true }
  );

  return res.status(200).json(new ApiResponse(200, updatedProduct));
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const { product_id } = req.body;
  const product = await Product.findByIdAndDelete({ _id: product_id });
  if (!product) {
    return res.status(404).json(new ApiResponse(404, "Product not found"));
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "Product deleted successfully"));
});
