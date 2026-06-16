const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();


app.use(express.json());
app.use(cookieParser());

const productRoutes = require("../src/routes/Product.routes");

app.use("/api/product", productRoutes);




module.exports = app;