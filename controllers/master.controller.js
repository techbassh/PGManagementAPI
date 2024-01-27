import PGDetails from "../models/PGDetails.js";

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
    return res.status(200).send("PG Created Successfully");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

export const getAllPGDetails = async (req, res, next) => {
  try {
    const pgDetails = await PGDetails.find({});
    return res.status(200).send(pgDetails);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
