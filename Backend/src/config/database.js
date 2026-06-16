const mongoose = require("mongoose");

async function dbConnect(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Db connection successfull.");
    } catch (error) {
        console.log("Error in db connection::", error);
    }
}

module.exports = dbConnect