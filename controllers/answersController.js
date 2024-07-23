const Answers  = require('../models/answers');

// Get all answers
exports.getAllAnswers = async (req, res) => {
    try {
        const answers = await Answers.findAll();
        res.status(200).json(answers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get answer by ID
exports.getAnswerById = async (req, res) => {
    try {
        const answer = await Answers.findByPk(req.params.id);
        if (!answer) {
            return res.status(404).json({ message: 'Answer not found' });
        }
        res.status(200).json(answer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new answer
exports.createAnswer = async (req, res) => {
    try {
        const answer = await Answers.create(req.body);
        res.status(201).json(answer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update answer by ID
exports.updateAnswer = async (req, res) => {
    try {
        const answer = await Answers.findByPk(req.params.id);
        if (!answer) {
            return res.status(404).json({ message: 'Answer not found' });
        }
        await answer.update(req.body);
        res.status(200).json(answer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete answer by ID
exports.deleteAnswer = async (req, res) => {
    try {
        const answer = await Answers.findByPk(req.params.id);
        if (!answer) {
            return res.status(404).json({ message: 'Answer not found' });
        }
        await answer.destroy();
        res.status(204).json({ message: 'Answer deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
