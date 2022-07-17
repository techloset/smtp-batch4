var routes = require("express").Router()
var controller = require('./blogController')

routes.get('/', (req,res)=> 'blogs main route are workings')
routes.get('/create', (req,res) => controller.createBlog(req,res))
routes.get('/get', (req,res) => controller.getBlogs(req,res))

module.exports = routes