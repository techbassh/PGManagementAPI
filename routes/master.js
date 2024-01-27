import express from "express";
import { createPG, getAllPGDetails } from "../controllers/master.controller.js";

const router = express.Router();

router.post("/createPG", createPG);
router.get("/getAllPGDetails", getAllPGDetails);

export default router;
