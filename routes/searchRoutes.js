const searchCotroller = require('../controllers/searchcontroller');
const Router =  require('express').Router;
const router = new Router();

router.get ("/search",searchCotroller)


module.exports = router;