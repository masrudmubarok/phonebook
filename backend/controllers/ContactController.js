import Contact from "../models/ContactModel.js";

export const getContact = async(req, res) => {
    try {
        const response = await Contact.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }

}