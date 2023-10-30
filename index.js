require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

// Constant
const port = process.env.PORT || 5000;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const secret = process.env.USER_ACCESS_TOKEN;

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("All Mart Server");
})

app.listen(port, () => {
    console.log(`All Mart Server is running on port: ${port}`);
})
