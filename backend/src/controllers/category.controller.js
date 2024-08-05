import { asyncHandler } from "../utils/asyncHandler.js";
import { Category } from "../models/category.model.js";
import { APiResponse as ApiResponse } from "../utils/ApiResponse.js";
import MissingFields from "../utils/MissingFields.js";

export const createCategory = asyncHandler(async (req, res) => {
  try {
    const { name, description, subCategory } = req.body;
    if (!(name || description)) {
      return res.status(400).json(
        new ApiResponse(400, {
          category: "Name and description fields are required",
        })
      );
    }
    const categoryExists = await Category.findOne({
      $and: [{ name }, { description }],
    });
    if (categoryExists) {
      return res
        .status(409)
        .json(new ApiResponse(409, { category: "Category already exists" }));
    }
    const category = new Category({ name, description, subCategory });
    const newCategory = await category.save();

    return res
      .status(201)
      .json(
        new ApiResponse(201, "Successfully Fetched Categories", newCategory)
      );
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, "Failed to fetch Categories", error.message));
  }
});

export const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({});
  if (!categories) {
    return res
      .status(404)
      .json(new ApiResponse(404, { category: "No categories found" }));
  }
  return res.status(200).json(new ApiResponse(200, categories));
});

export const getCategoryById = asyncHandler(async (req, res) => {
  const { category_id } = req.body;
  const category = await Category.findById(category_id);
  if (!category) {
    return res
      .status(404)
      .json(new ApiResponse(404, { category: "Category not found" }));
  }
  return res.status(200).json(new ApiResponse(200, category));
});

export const updateCategory = asyncHandler(async (req, res) => {
  const { category_id, name, description } = req.body;
  const areFieldsEmpty = MissingFields({ category_id, name, description });
  if (areFieldsEmpty) {
    return res.status(400).json(new ApiResponse(400, areFieldsEmpty));
  }
  const category = await Category.findById(category_id);
  if (!category) {
    return res
      .status(404)
      .json(new ApiResponse(404, { category: "Category not found" }));
  }
  const updatedCategory = await Category.findByIdAndUpdate(
    category_id,
    { name, description },
    { new: true }
  );
  return res.status(200).json(new ApiResponse(200, updatedCategory));
});

export const deleteCategory = asyncHandler(async (req, res) => {
  try {
    const { category_id } = req.body;
    if (!category_id) {
      return res
        .status(400)
        .json(new ApiResponse(400, { category: "Category ID is required" }));
    }
    const category = await Category.findById(category_id);
    if (!category) {
      return res
        .status(404)
        .json(new ApiResponse(404, { category: "Category not found" }));
    }
    await Category.findByIdAndDelete(category_id);
    return res
      .status(200)
      .json(new ApiResponse(200, "Category deleted successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, "Failed to delete category", error.message));
  }
});
