const express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors')
require('dotenv').config();

const port = process.env.PORT || 5000
const app = express();

const productRoutes = require('./src/components/products/productRoutes');
const authRoutes = require('./src/components/auth/authRoutes');
const setupDB = require("./src/config/db");

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

setupDB()

app.get('/',(req,res)=>{
  res.send("server is working")
})
app.use('/auth',authRoutes)
app.use('/products',productRoutes)

app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });


// localhost:5000/products/createProduct