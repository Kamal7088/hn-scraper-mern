import { useState, useEffect } from 'react';
import api from '../api/api';
import StoryCard from '../components/StoryCard';
import { RefreshCw } from 'lucide-react';

const Home = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scraping, setScraping] = useState(false);

  const fetchStories = async () => {
    try {
      const { data } = await api.get('/stories');
      setStories(data.stories);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching stories', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleManualScrape = async () => {
    setScraping(true);
    try {
      await api.post('/scrape');
      await fetchStories();
      setScraping(false);
    } catch (error) {
      console.error('Scraping error', error);
      setScraping(false);
    }
  };

  return (
    <div className="container">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Top Stories</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Handpicked top stories from Hacker News</p>
        </div>
        <button 
          onClick={handleManualScrape} 
          className="btn btn-outline" 
          disabled={scraping}
        >
          <RefreshCw size={18} className={scraping ? 'spin' : ''} />
          {scraping ? 'Scraping...' : 'Refresh Data'}
        </button>
      </header>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '50px' }}>Loading stories...</div>
      ) : (
        <div className="stories-grid">
          {stories.length > 0 ? (
            stories.map(story => (
              <StoryCard key={story._id} story={story} />
            ))
          ) : (
            <div className="glass" style={{ padding: '40px', textAlign: 'center' }}>
              No stories found. Try refreshing data.
            </div>
          )}
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin {
          animation: spin 1s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Home;
