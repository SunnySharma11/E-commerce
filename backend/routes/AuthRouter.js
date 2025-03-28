const router = require("express").Router();
const allControllers = require("../controllers/AuthController");
const Validate = require("../middleware/ZodValidator")          // somethime need for .js
const otherControllers = require("../controllers/OtherController")
const cartControllers = require("../controllers/CartController");


router.route('/register').post(Validate.signupValidation,allControllers.Register)
router.route('/login').post(Validate.loginValidation,allControllers.Login)
router.route('/products').get(otherControllers.Products)
router.route('/quick-view/:id').get(otherControllers.ExtraDetails)
router.route('/cart').get(cartControllers.CartItems)
router.route('/cart/:id').delete(cartControllers.CartDelete)
router.route('/cart/add').post(cartControllers.CartAdd)


module.exports = router
