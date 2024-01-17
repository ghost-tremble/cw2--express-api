const createNewOrder =  require('../controllers/orderControlers')
const Router =  require('express').Router;
const router = new Router();

router.post ("/order",createNewOrder)


module.exports = router;