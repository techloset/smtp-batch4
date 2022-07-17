const express = require("express");
var bodyParser = require("body-parser");
require('dotenv').config();

const port = 5000
const app = express();

const productRoutes = require('./components/products/productRoutes');
const setupDB = require("./config/db");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

setupDB()

app.use('/products',productRoutes)

app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });


// localhost:5000/products/createProduct