const router = require('express').Router()
const productController = require("./productController")
const authUtils = require("../../utils/auth")

router.get('/getProducts',authUtils.auth, productController.getProducts)
router.post('/createProduct',authUtils.auth, productController.createProduct)
router.put('/updateProduct/:id' ,authUtils.auth,productController.updateProduct)
router.delete('/deleteProduct',authUtils.auth, productController.deleteProduct)


module.exports = router

;
// axois.put(`http://localhost:5000/products/updateproduct/${id}`,data)