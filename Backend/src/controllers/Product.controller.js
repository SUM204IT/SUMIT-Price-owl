const ProductUrlSchema = require("../models/productUrl");

async function productUrlSchemaController(req, res) {
    try {
        //fetch data from the user / frontend
        const {productUrl} = req.user;
        //validate data
        //validate url
        //save in database
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: "Error in saving link in database, please try again later."
        })
    }
} 