const express = require('express');
const router = express.Router();
const answersController = require('../controllers/answersController');
const {authenticate, authorize} = require('../middleware/auth')

router.get('/', answersController.getAllAnswers);
router.get('/:id', answersController.getAnswerById);
router.post('/', authenticate, authorize(['admin']), answersController.createAnswer);
router.put('/:id', answersController.updateAnswer);
router.delete('/:id', answersController.deleteAnswer);

module.exports = router;
