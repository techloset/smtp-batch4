var mongoose = require("mongoose");

const setupDB = () => {
  console.log("process.env.DB", process.env.DB);
  mongoose.connect(
    process.env.DB,
    function (err) {
      if (err) throw err;
      console.log("successfully connected with database");
    }
  );
};

module.exports = setupDB;
