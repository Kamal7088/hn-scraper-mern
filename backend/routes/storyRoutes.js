const express = require('express');
const router = express.Router();
const { getStories, getStoryById, toggleBookmark } = require('../controllers/storyController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getStories);
router.route('/:id').get(getStoryById);
router.route('/:id/bookmark').post(protect, toggleBookmark);

module.exports = router;
