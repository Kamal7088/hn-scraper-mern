const Story = require('../models/Story');
const User = require('../models/User');
const scrapeHackerNews = require('../utils/scraper');

/**
 * @desc    Fetch all stories with sorting and pagination
 * @route   GET /api/stories
 * @access  Public
 */
const getStories = async (req, res) => {
  try {
    // Setting default pagination parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Fetching the top stories sorted by points in descending order
    const stories = await Story.find({})
      .sort({ points: -1 })
      .skip(skip)
      .limit(limit);
      
    // Total count needed for frontend pagination calculation
    const total = await Story.countDocuments();

    res.json({
      stories,
      page,
      pages: Math.ceil(total / limit),
      total
    });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving stories from the database.' });
  }
};

/**
 * @desc    Fetch a single story by ID
 * @route   GET /api/stories/:id
 * @access  Public
 */
const getStoryById = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    if (story) {
      res.json(story);
    } else {
      res.status(404).json({ message: 'The requested story could not be found.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error encountered while fetching story details.' });
  }
};

/**
 * @desc    Toggle bookmark status for a story
 * @route   POST /api/stories/:id/bookmark
 * @access  Private
 */
const toggleBookmark = async (req, res) => {
  try {
    const storyId = req.params.id;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: 'User verification failed.' });
    }

    const storyExists = await Story.findById(storyId);
    if (!storyExists) {
      return res.status(404).json({ message: 'The story you are trying to bookmark does not exist.' });
    }

    // Toggle logic: remove if exists, add if not
    const isBookmarked = user.bookmarks.some(id => id.toString() === storyId);

    if (isBookmarked) {
      user.bookmarks = user.bookmarks.filter(id => id.toString() !== storyId);
    } else {
      user.bookmarks.push(storyId);
    }

    await user.save();
    
    // Refresh user object and populate bookmarks for consistent frontend state
    const updatedUser = await User.findById(req.user._id).populate('bookmarks');
    
    res.json({ 
      message: isBookmarked ? 'Bookmark successfully removed.' : 'Bookmark successfully added.', 
      bookmarks: updatedUser.bookmarks 
    });
  } catch (error) {
    console.error('Bookmark toggle error:', error);
    res.status(500).json({ message: 'An error occurred while toggling the bookmark.', error: error.message });
  }
};

/**
 * @desc    Manually trigger the scraper
 * @route   POST /api/scrape
 * @access  Public
 */
const manualScrape = async (req, res) => {
  try {
    console.log('User-initiated manual scrape in progress...');
    const result = await scrapeHackerNews();
    if (result.success) {
      res.json({ message: 'Scraping process completed successfully.', data: result });
    } else {
      res.status(500).json({ message: 'Scraping attempt failed.', error: result.error });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error during scraping.' });
  }
};

module.exports = {
  getStories,
  getStoryById,
  toggleBookmark,
  manualScrape
};
