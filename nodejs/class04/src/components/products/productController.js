const ProductModel = require("./productModel");

const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find()
    console.log("products", products);
    let response = {
      status: 200,
      message: "successfully found",
      data: products,
    };
    res.json(response);
  } catch (error) {
    let response = {
      status: 201,
      message: error,
    };
    res.json(response);
  }
};

const createProduct = async (req, res) => {
  if (!req.body.title || !req.body.price || !req.body.description) {
    let response = {
      status: 201,
      message: "params are required",
    };
    res.json(response);
  }

  // logic createPost
  const newProduct = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    createdAt: new Date(),
  };

  const product = new ProductModel(newProduct);

  try {
    await product.save();
    let response = {
      status: 200,
      message: "successfully created",
    };
    res.json(response);
  } catch (error) {
    let response = {
      status: 400,
      message: error,
    };
    res.json(response);
  }
};

const updateProduct = async (req, res) => {
  // logic createPost
  if (!req.body.title || !req.body.price || !req.body.description) {
    let response = {
      status: 401,
      message: "params are required",
    };
    res.json(response);
  }
  // logic createPost
  const updateProduct = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    createdAt: new Date(),
  };
  console.log("req.params.id",req.params.id);

  try {
    await ProductModel.updateOne({ _id: req.params.id }, updateProduct);
    let response = {
      status: 200,
      message: "successfully updated",
    };
    res.json(response);
  } catch (error) {
    let response = {
      status: 401,
      message: error,
    };
    res.json(response);
  }
};

const deleteProduct = async (req, res) => {
  // logic createPost
  console.log("req.query.id",req.query.id);
  try {
    await ProductModel.deleteOne({ _id: req.query.id });
    let response = {
      status: 200,
      message: "successfully deleted",
    };
    res.json(response);
  } catch (error) {
    let response = {
      status: 401,
      message: error,
    };
    res.json(response);
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
