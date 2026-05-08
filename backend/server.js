const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const cron = require('node-cron');
const scrapeHackerNews = require('./utils/scraper');

// Route files
const authRoutes = require('./routes/authRoutes');
const storyRoutes = require('./routes/storyRoutes');
const { manualScrape } = require('./controllers/storyController');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
const allowedOrigins = [process.env.FRONTEND_URL, 'http://localhost:5173', 'http://127.0.0.1:5173'].filter(Boolean);
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy: This origin is not allowed.'));
    }
  },
  credentials: true,
}));

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/stories', storyRoutes);
app.post('/api/scrape', manualScrape);

// Schedule scraper to run automatically
cron.schedule('0 * * * *', () => { // runs every hour
  console.log('Running cron job: Scrape Hacker News');
  scrapeHackerNews();
});

// Run scraper on server start
scrapeHackerNews();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
