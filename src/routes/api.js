const express= require('express')
const foodProductController = require("../controller/foodProductController")

const router = express.Router()


router.post('/create',foodProductController.createFood)
router.get('/read',foodProductController.readFood)
router.get('/read/:id',foodProductController.readFoodOne)
router.post('/update/:id',foodProductController.updateFood)
router.get('/delete/:id' ,foodProductController.deleteFood)


module.exports=router