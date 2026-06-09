const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB
require("./db");

// test route
app.get("/", (req, res) => {
    res.send("Backend Running");
});

// routes
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

const transactionRoutes = require("./routes/transactions");
app.use("/transactions", transactionRoutes);

// server start (ONLY ONCE)
app.listen(5000, () => {
    console.log("Server Running on port 5000");
});