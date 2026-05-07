import { useState, useEffect } from 'react';
import api from '../api/api';
import StoryCard from '../components/StoryCard';
import { RefreshCw } from 'lucide-react';

const Home = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scraping, setScraping] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // function to fetch data from our API
  // handle pagination or refresh logic here
  const fetchStories = async (pageNum = 1) => {
    setLoading(true);
    try {
      const { data } = await api.get(`/stories?page=${pageNum}&limit=10`);
      // Update global state with fetched stories
      setStories(data.stories);
      setTotalPages(data.pages);
      setPage(data.page);
    } catch (error) {
      console.error('Failed to load stories from the API', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories(page);
  }, [page]);

  // Trigger manual data update
  const handleManualScrape = async () => {
    setScraping(true);
    try {
      await api.post('/scrape');
      // Refresh the story list after scraping is complete
      await fetchStories(1);
    } catch (error) {
      console.error('Error encountered during manual scrape', error);
    } finally {
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
          {scraping ? 'Updating...' : 'Refresh Data'}
        </button>
      </header>

      {loading ? (
        <div className="stories-grid">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="story-card glass">
              <div style={{ width: '100%' }}>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-meta"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="stories-grid">
            {stories.length > 0 ? (
              stories.map(story => (
                <StoryCard key={story._id} story={story} />
              ))
            ) : (
              <div className="glass" style={{ padding: '40px', textAlign: 'center' }}>
                No stories available. Please try refreshing the data.
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="btn btn-outline" 
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Previous
              </button>
              <span className="page-info">
                Page <strong>{page}</strong> of {totalPages}
              </span>
              <button 
                className="btn btn-outline" 
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
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
