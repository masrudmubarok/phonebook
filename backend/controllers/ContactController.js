import Contact from "../models/ContactModel.js";

export const getContact = async(req, res) => {
    try {
        const response = await Contact.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }

}

export const getContactById = async(req, res) => {
    try {
        const response = await Contact.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }

}

export const createContact = async(req, res) => {
    try {
        await Contact.create(req.body);
        res.status(201).json({msg: "Contact created"});
    } catch (error) {
        console.log(error.message);
    }

}

export const updateContact = async(req, res) => {
    try {
        await Contact.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Contact updated"});
    } catch (error) {
        console.log(error.message);
    }

}

export const deleteContact = async(req, res) => {
    try {
        await Contact.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Contact deleted"});
    } catch (error) {
        console.log(error.message);
    }

}