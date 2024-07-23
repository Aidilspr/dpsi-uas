const  Questions  = require('../models/questions');

// Get all questions
exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Questions.findAll();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get question by ID
exports.getQuestionById = async (req, res) => {
    try {
        const question = await Questions.findByPk(req.params.id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new question
exports.createQuestion = async (req, res) => {
    try {
        const question = await Questions.create(req.body);
        res.status(201).json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update question by ID
exports.updateQuestion = async (req, res) => {
    try {
        const question = await Questions.findByPk(req.params.id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        await question.update(req.body);
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete question by ID
exports.deleteQuestion = async (req, res) => {
    try {
        const question = await Questions.findByPk(req.params.id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        await question.destroy();
        res.status(204).json({ message: 'Question deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
