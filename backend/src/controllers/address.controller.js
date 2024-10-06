import Address from "../models/address.model.js";
import { APiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createAddress = asyncHandler(async (req, res) => {
  const { name, phone, street, city, state, postalCode, country, isDefault } =
    req.body;

  if (
    !name ||
    !phone ||
    !street ||
    !city ||
    !state ||
    !postalCode ||
    !country
  ) {
    return res
      .status(400)
      .json(new APiResponse(400, "All fields are required."));
  }

  // Check if the address already exists for the user
  const existingAddress = await Address.findOne({
    user: req.user._id,
    name,
    phone,
    street,
    city,
    state,
    postalCode,
    country,
  });

  if (existingAddress) {
    return res
      .status(400)
      .json(new APiResponse(400, "This address already exists."));
  }

  const newAddress = new Address({
    user: req.user._id,
    name,
    phone,
    street,
    city,
    state,
    postalCode,
    country,
    isDefault,
  });

  const savedAddress = await newAddress.save();
  return res
    .status(201)
    .json(new APiResponse(201, "Address Successfully Created", savedAddress));
});

export const getUserAddresses = asyncHandler(async (req, res) => {
  const addresses = await Address.find({ user: req.user._id });
  if (!addresses) {
    return res
      .status(400)
      .json(new APiResponse(400, "No Address found for this user."));
  }
  console.log(addresses);
  return res
    .status(200)
    .json(new APiResponse(200, "Successfully Fetched Addressess", addresses));
});

// Get Single Address by ID
export const getAddressById = asyncHandler(async (req, res) => {
  const address = await Address.findById(req.params.id);

  if (!address) {
    return res.status(404).json({ message: "Address not found" });
  }

  return res.status(200).json(address);
});

export const updateAddress = asyncHandler(async (req, res) => {
  const { name, phone, street, city, state, postalCode, country, isDefault } =
    req.body;

  const address = await Address.findById(req.params.id);

  if (!address) {
    return res.status(404).json({ message: "Address not found" });
  }

  if (address.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Unauthorized action" });
  }

  address.name = name || address.name;
  address.phone = phone || address.phone;
  address.street = street || address.street;
  address.city = city || address.city;
  address.state = state || address.state;
  address.postalCode = postalCode || address.postalCode;
  address.country = country || address.country;
  address.isDefault = isDefault !== undefined ? isDefault : address.isDefault;

  const updatedAddress = await address.save();
  res.status(200).json(updatedAddress);
});

// Delete Address
export const deleteAddress = asyncHandler(async (req, res) => {
  const address = await Address.findById(req.params.id);

  if (!address) {
    return res.status(404).json({ message: "Address not found" });
  }
  if (address.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Unauthorized action" });
  }
  await Address.deleteOne({ _id: req.params.id });

  res.status(200).json({ message: "Address deleted successfully" });
});
