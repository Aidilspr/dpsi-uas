const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questionsController');
const {authenticate, authorize} = require('../middleware/auth')

router.get('/', questionsController.getAllQuestions);
router.get('/:id', questionsController.getQuestionById);
router.post('/',authenticate, authorize(['admin']), questionsController.createQuestion);
router.put('/:id', questionsController.updateQuestion);
router.delete('/:id', questionsController.deleteQuestion);

module.exports = router;
