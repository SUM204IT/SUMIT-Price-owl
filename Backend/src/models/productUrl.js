const mongoose = require("mongoose");

const ProductUrlSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserSchema",
        required: true  
    },
    productUrl: {
        type: String,
        required: true
    },
    
})

module.exports = mongoose.model("ProductUrlSchema", ProductUrlSchema)