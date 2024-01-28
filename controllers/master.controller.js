import PGDetails from "../models/PGDetails.js";
import { CreateError } from "../utils/error.js";
import { CreateSuccess } from "../utils/success.js";

export const createPG = async (req, res, next) => {
  try {
    const newPG = new PGDetails({
      fullName: req.body.fullName,
      price: req.body.price,
      Availability: req.body.Availability,
      imageURL: req.body.imageURL,
      description: req.body.description,
      location: req.body.location,
      securityDeposit: req.body.securityDeposit,
      isActive: req.body.isActive,
    });

    await newPG.save();
    return next(CreateSuccess(201, "PG Created Successfully"));
  } catch (error) {
    return next(CreateError(500, error.message));
  }
};

export const getAllPGDetails = async (req, res, next) => {
  try {
    const pgDetails = await PGDetails.find({});
    return next(
      CreateSuccess(200, "PG Details Fetched Successfully", pgDetails)
    );
  } catch (error) {
    return next(CreateError(500, error.message));
  }
};
