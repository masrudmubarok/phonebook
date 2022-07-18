import express from "express";
import {getContact} from "../controllers/ContactController.js";

const router = express.Router();

router.get('/contacts', getContact);

export default router;