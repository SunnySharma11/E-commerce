const router = require("express").Router();
const allControllers = require("../controllers/AuthController");
const Validate = require('../middleware/Validate')
const allValidator = require('../Validator/ZodSchema')
const otherControllers = require("../controllers/OtherController")
const cartControllers = require("../controllers/CartController")

router.route('/register').post(Validate(allValidator.registerValidator),allControllers.register)
router.route('/login').post(Validate(allValidator.loginValidator),allControllers.login)
router.route('/products').get(otherControllers.Products)
router.route('/quick-view/:id').get(otherControllers.ExtraDetails)
router.route('/cart').get(cartControllers.CartItems)
router.route('/cart/:id').delete(cartControllers.CartDelete)
router.route('/cart/add').post(cartControllers.CartAdd)

module.exports = router
