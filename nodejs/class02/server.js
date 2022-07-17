const express = require("express");
var bodyParser = require("body-parser");
const port = 5000
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var blogs = require('./src/components/blogs/blogRouts')

app.use('/blogs/',blogs)

app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
  

// var someFunc = require('./src/components/blogs/blogRouts')

// console.log('blogs age', someFunc());

// const posts = [];

// app.use((req, res, next) => {
//   console.log("App.use - request passes from here");
//   next();
// });


// app.get('/getPosts', (req,res)=>{
//     let response = {
//         status: 200,
//         message: "Successfully fetched",
//         data: posts
//       };
//       res.json(response);
// })



// app.post("/createPost", (req, res) => {
//   console.log("body", req.body);
//   if (!req.body.title || !req.body.description || !req.body.category) {
//     let response = {
//         status: 401,
//         message: "params are required, should be title, description, category",
//       };
//       res.json(response);
//   }
//   let post = {
//     title: req.body.title,
//     description: req.body.description,
//     createAt: new Date(),
//     category: req.body.category,
//   };
// //   database request
//   posts.push(post);
//   let response = {
//     status: 200,
//     message: "successfully created",
//   };
//   res.json(response);
// });


// app.get('fetchUsers', authController.fetchUser() )

//get - 192.168.12.1:5000/

//get - 192.168.12.1:5000/user

//get - 192.168.12.1:5000/orders

// localhost:5000/posts
