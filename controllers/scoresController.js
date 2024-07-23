// controllers/scoresController.js
const Score = require('../models/scores');

// Get all scores
exports.getAllScores = async (req, res) => {
    try {
        const scores = await Score.findAll();
        res.status(200).json(scores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get score by ID
exports.getScoreById = async (req, res) => {
    try {
        const score = await Score.findByPk(req.params.id);
        if (!score) {
            return res.status(404).json({ message: 'Score not found' });
        }
        res.status(200).json(score);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new score
exports.createScore = async (req, res) => {
    try {
        const score = await Score.create(req.body);
        res.status(201).json(score);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update score by ID
exports.updateScore = async (req, res) => {
    try {
        const score = await Score.findByPk(req.params.id);
        if (!score) {
            return res.status(404).json({ message: 'Score not found' });
        }
        await score.update(req.body);
        res.status(200).json(score);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete score by ID
exports.deleteScore = async (req, res) => {
    try {
        const score = await Score.findByPk(req.params.id);
        if (!score) {
            return res.status(404).json({ message: 'Score not found' });
        }
        await score.destroy();
        res.status(204).json({ message: 'Score deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
