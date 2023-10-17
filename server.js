const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const homeRoutes = require("./routes/home");
const editRoutes = require("./routes/edit");
require("dotenv").config({ path: "./config/.env" });

connectDB();

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", homeRoutes);
app.use("/edit", editRoutes);

//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



