var jwt = require("jsonwebtoken");
var bcrypt = require('bcryptjs');

const AuthModel = require("./authModel");

const login = async (req, res) => {
  try {
  
 console.log("req.body.email",req.body.email);
    const password = req.body.password;
    const user = await AuthModel.findOne({ email: req.body.email });

    if (!user) {
      let responseData = {
        status: 200,
        message: "Email not found",
        data: user,
      };
      res.json(responseData);
    }
    console.log("user",user);
    const passwordCheck = await bcrypt.compareSync(req.body.password, user.password)
    console.log("passwordCheck",passwordCheck);
    if (!passwordCheck) {
        let result = {
          status: 200,
          message: "Password is not correct",
        };
        res.json(result);
      }

    var token = jwt.sign(
      { email: user.email, age: user.age, name: user.name },
      process.env.privateKey
    );
    let response = {
      status: 200,
      message: "successfully login",
      token,
      data: user,
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

const signup = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.age ||
    !req.body.email ||
    !req.body.password
  ) {
    let response = {
      status: 201,
      message: "params are required",
    };
    res.json(response);
  }

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);

  // logic createPost
  const newUser = {
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    password: hash
  };

  const user = new AuthModel(newUser);

  try {
    await user.save();
    let response = {
      status: 200,
      message: "successfully signup",
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

module.exports = {
  login,
  signup,
};
