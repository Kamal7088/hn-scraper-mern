const Story = require('../models/Story');
const User = require('../models/User');
const scrapeHackerNews = require('../utils/scraper');

// @desc    Fetch all stories (sorted by points descending, with optional pagination)
// @route   GET /api/stories
// @access  Public
const getStories = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const stories = await Story.find({})
      .sort({ points: -1 })
      .skip(skip)
      .limit(limit);
      
    const total = await Story.countDocuments();

    res.json({
      stories,
      page,
      pages: Math.ceil(total / limit),
      total
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Fetch single story
// @route   GET /api/stories/:id
// @access  Public
const getStoryById = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    if (story) {
      res.json(story);
    } else {
      res.status(404).json({ message: 'Story not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Toggle bookmark for a story
// @route   POST /api/stories/:id/bookmark
// @access  Private
const toggleBookmark = async (req, res) => {
  try {
    const storyId = req.params.id;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const storyExists = await Story.findById(storyId);
    if (!storyExists) {
      return res.status(404).json({ message: 'Story not found' });
    }

    const isBookmarked = user.bookmarks.includes(storyId);

    if (isBookmarked) {
      // Remove bookmark
      user.bookmarks = user.bookmarks.filter(id => id.toString() !== storyId);
    } else {
      // Add bookmark
      user.bookmarks.push(storyId);
    }

    await user.save();
    
    // Return updated bookmarks
    const updatedUser = await User.findById(req.user._id).populate('bookmarks');
    
    res.json({ message: isBookmarked ? 'Bookmark removed' : 'Bookmark added', bookmarks: updatedUser.bookmarks });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Manual trigger to scrape stories
// @route   POST /api/scrape
// @access  Public
const manualScrape = async (req, res) => {
  try {
    const result = await scrapeHackerNews();
    if (result.success) {
      res.json({ message: 'Scraping successful', data: result });
    } else {
      res.status(500).json({ message: 'Scraping failed', error: result.error });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getStories,
  getStoryById,
  toggleBookmark,
  manualScrape
};
