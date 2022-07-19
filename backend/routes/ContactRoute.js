import express from "express";
import {
    getContact, 
    getContactById,
    createContact,
    updateContact,
    deleteContact

} from "../controllers/ContactController.js";

const router = express.Router();

router.get('/contacts', getContact);
router.get('/contacts/:id', getContactById);
router.post('/contacts', createContact);
router.patch('/contacts/:id', updateContact);
router.delete('/contacts/:id', deleteContact);

export default router;