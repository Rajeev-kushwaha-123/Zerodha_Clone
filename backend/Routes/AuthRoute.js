const { Signup, Login, Logout } = require('../Controllers/AuthController')
const router = require('express').Router()
const {userVerification}=require("../Middlewares/AuthMiddleware")

router.post('/',userVerification)
router.post('/signup', Signup)
router.post('/login', Login)
router.post('/logout', Logout)

module.exports = router