const axios = require('axios');
const cheerio = require('cheerio');
const Story = require('../models/Story');

const scrapeHackerNews = async () => {
  try {
    console.log('Starting Hacker News scrape...');
    const { data } = await axios.get('https://news.ycombinator.com/');
    const $ = cheerio.load(data);
    
    // Select the first 10 items
    const topStories = [];
    
    $('.athing').slice(0, 10).each((index, element) => {
      const hnId = $(element).attr('id');
      const titleElement = $(element).find('.titleline > a').first();
      const title = titleElement.text();
      const url = titleElement.attr('href');
      
      const subtextRow = $(element).next();
      
      const pointsText = subtextRow.find('.score').text();
      const points = pointsText ? parseInt(pointsText.replace(' points', '').replace(' point', '')) : 0;
      
      const author = subtextRow.find('.hnuser').text() || 'anonymous';
      
      const postedAt = subtextRow.find('.age').attr('title') || subtextRow.find('.age').text() || new Date().toISOString();
      
      topStories.push({
        hnId,
        title,
        url: url && url.startsWith('item?id=') ? `https://news.ycombinator.com/${url}` : url,
        points,
        author,
        postedAt
      });
    });

    // Save to database
    let addedCount = 0;
    for (const story of topStories) {
      if (!story.hnId) continue;
      
      const exists = await Story.findOne({ hnId: story.hnId });
      if (!exists) {
        await Story.create(story);
        addedCount++;
      } else {
        // Option to update points if it exists
        exists.points = story.points;
        await exists.save();
      }
    }
    
    console.log(`Scrape successful. Added ${addedCount} new stories.`);
    return { success: true, count: addedCount, stories: topStories };
  } catch (error) {
    console.error(`Scraper Error: ${error.message}`);
    return { success: false, error: error.message };
  }
};

module.exports = scrapeHackerNews;
