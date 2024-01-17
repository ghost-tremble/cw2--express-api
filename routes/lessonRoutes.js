const { getAllLessons } = require('../controllers/lessonsController');
const Router = require('express').Router;

const router = new Router();

router.get('/lessons', getAllLessons);

module.exports = router;
