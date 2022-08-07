var jwt = require("jsonwebtoken");

const auth = async (req, res,next) => {
    try {
      var token = req.headers.token
      if (!token) {
        let response = {
            status: 200,
            message: "token not found",
          };
          res.json(response);
      }
      console.log("token",process.env.privateKey);
      var decoded = await jwt.verify(token, process.env.privateKey);
      console.log("decoded",decoded, );
      if (!decoded) {
          let result = {
            status: 200,
            message: "user is not authenticated",
          };
          res.json(result);
        }
      next()
    } catch (error) {
        console.log("error",error);
      let response = {
        status: 201,
        message: error,
      };
      res.json(response);
    }
  };
  

  module.exports = {
    auth
  };
  