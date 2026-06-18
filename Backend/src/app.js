const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();


app.use(express.json());
app.use(cookieParser());

const productRoutes = require("../src/routes/Product.routes");
const AuthRoutes = require("./routes/Auth.routes");

app.use("/api/product", productRoutes);
app.use("/api/auth", AuthRoutes);




module.exports = app;