import mongoose from "mongoose";
import moongoose, { Schema } from "mongoose";

const UserSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    Availability: {
      type: Boolean,
      required: true,
    },
    imageURL: {
      type: String,
      required: false,
      default: "https://snipboard.io/G57WUD.jpg",
    },
    description: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: true,
    },
    securityDeposit: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("mstPGDetails", UserSchema);
