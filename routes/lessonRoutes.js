const { getAllLessons, createLesson, updateLesson, createBatchLessons } = require('../controllers/lessonsController');
const Router = require('express').Router;

const router = new Router();

router.get('/lessons', getAllLessons);
router.post('/lessons', createLesson);
router.post('/lessons/batch', createBatchLessons);
router.put('/lessons/:orderId', updateLesson);

module.exports = router;
