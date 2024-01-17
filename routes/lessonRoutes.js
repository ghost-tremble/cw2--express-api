const { getAllLessons, createLesson, updateLesson } = require('../controllers/lessonsController');
const Router = require('express').Router;

const router = new Router();

router.get('/lessons', getAllLessons);
router.post('/lessons', createLesson);
router.put('/lessons', updateLesson);

module.exports = router;
