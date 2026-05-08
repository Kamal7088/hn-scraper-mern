import { useState, useEffect } from 'react';
import api from '../api/api';
import StoryCard from '../components/StoryCard';
import { RefreshCw, Activity, ChevronLeft, ChevronRight, Terminal, Zap } from 'lucide-react';

const Home = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scraping, setScraping] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchStories = async (pageNum = 1) => {
    setLoading(true);
    try {
      const { data } = await api.get(`/stories?page=${pageNum}&limit=10`);
      setStories(data.stories);
      setTotalPages(data.pages);
      setPage(data.page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Failed to load stories', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories(page);
  }, [page]);

  const handleManualScrape = async () => {
    setScraping(true);
    try {
      await api.post('/scrape');
      await fetchStories(1);
    } catch (error) {
      console.error('Scrape failed', error);
    } finally {
      setScraping(false);
    }
  };

  return (
    <div className="home-page-wrapper">
      <div className="dot-pattern"></div>
      
      <div className="container content-layer">
        <header className="home-header">
          <div className="header-meta">
            <div className="status-pill">
              <Zap size={12} fill="currentColor" />
              <span>LIVE_INDEX_ACTIVE</span>
            </div>
            <h1>Data <span className="text-amber">Stream</span></h1>
            <p className="sub-tag">Full-spectrum intelligence feed.</p>
          </div>
          
          <button 
            onClick={handleManualScrape} 
            className="refresh-trigger" 
            disabled={scraping}
          >
            <RefreshCw size={18} className={scraping ? 'spin' : ''} />
            <span>{scraping ? 'SYNCING' : 'RELOAD'}</span>
          </button>
        </header>

        {loading ? (
          <div className="wide-vertical-stack">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="skeleton-row"></div>
            ))}
          </div>
        ) : (
          <>
            <div className="wide-vertical-stack">
              {stories.map((story, index) => (
                <div 
                  key={story._id} 
                  className="interactive-card-wrapper" 
                  style={{ '--i': index }}
                >
                  <div className="row-content">
                    {/* StoryCard now inherits the Amber/White theme */}
                    <StoryCard story={story} />
                  </div>
                  <div className="card-tag">
                    <Terminal size={14} />
                    <span>REF_{story._id.slice(-4).toUpperCase()}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination-bar">
              <button 
                className="pag-nav-btn" 
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="pag-indicator">
                <span className="current-page">{page}</span>
                <span className="sep">/</span>
                <span className="total-pages">{totalPages}</span>
              </div>

              <button 
                className="pag-nav-btn" 
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --amber: #ffb800; 
          --amber-glow: rgba(255, 184, 0, 0.2);
          --bg: #08080a;
          --card-bg: #111116;
          --border-color: #1f1f27;
          --t-high: #ffffff;
          --t-med: #9494a3;
          --t-low: #4a4a55;
        }

        .home-page-wrapper {
          background-color: var(--bg);
          min-height: 100vh;
          padding: 80px 20px;
          color: var(--t-high);
          font-family: 'JetBrains Mono', monospace, sans-serif;
        }

        .dot-pattern {
          position: fixed; inset: 0;
          background-image: radial-gradient(var(--border-color) 1px, transparent 0);
          background-size: 24px 24px;
          z-index: 1;
        }

        .content-layer { position: relative; z-index: 10; max-width: 1100px; margin: 0 auto; }

        /* Header Style */
        .home-header {
          display: flex; justify-content: space-between; align-items: flex-end;
          margin-bottom: 60px; padding-bottom: 20px; border-bottom: 1px solid var(--border-color);
        }
        .header-meta h1 { font-size: 2.8rem; letter-spacing: -2px; margin: 0; font-weight: 800; }
        .text-amber { color: var(--amber); text-shadow: 0 0 20px var(--amber-glow); }
        .sub-tag { color: var(--t-med); font-size: 1rem; margin-top: 5px; }
        
        .status-pill { 
          display: inline-flex; align-items: center; gap: 8px; 
          color: var(--amber); font-size: 11px; font-weight: bold;
          letter-spacing: 1px; margin-bottom: 10px;
        }

        .refresh-trigger {
          background: transparent; border: 1px solid var(--amber); color: var(--amber);
          padding: 10px 20px; border-radius: 4px; font-weight: bold;
          cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.3s;
        }
        .refresh-trigger:hover { background: var(--amber); color: #000; box-shadow: 0 0 25px var(--amber-glow); }

        /* Card System */
        .wide-vertical-stack { display: flex; flex-direction: column; gap: 14px; }

        .interactive-card-wrapper {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 24px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.4s cubic-bezier(0.2, 1, 0.2, 1);
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .interactive-card-wrapper:hover {
          border-color: var(--amber);
          transform: translateX(10px);
          background: #16161d;
          box-shadow: -5px 0 0 var(--amber);
        }

        .row-content { flex: 1; min-width: 0; }

        .card-tag {
          display: flex; align-items: center; gap: 10px;
          color: var(--t-low); font-size: 11px;
          padding-left: 25px; margin-left: 20px;
          border-left: 1px solid var(--border-color);
        }

        /* Pagination */
        .pagination-bar {
          display: flex; justify-content: center; align-items: center;
          margin-top: 70px; gap: 30px; padding-bottom: 60px;
        }
        .pag-nav-btn {
          background: var(--card-bg); border: 1px solid var(--border-color);
          color: var(--t-high); width: 50px; height: 50px; border-radius: 6px;
          cursor: pointer; transition: 0.3s;
        }
        .pag-nav-btn:hover:not(:disabled) { border-color: var(--amber); color: var(--amber); }
        .pag-nav-btn:disabled { opacity: 0.1; }

        .pag-indicator { font-size: 16px; font-weight: bold; }
        .current-page { color: var(--amber); }
        .sep { margin: 0 12px; color: var(--t-low); }

        /* Enforce Visibility & Colors for StoryCard */
        .interactive-card-wrapper h3, 
        .interactive-card-wrapper a { 
          color: var(--t-high) !important; 
          font-size: 1.2rem !important;
          margin-bottom: 6px !important;
          display: block !important;
          word-break: break-word !important;
        }
        .interactive-card-wrapper p { 
          color: var(--t-med) !important; 
          font-size: 0.95rem !important;
          line-height: 1.6 !important;
          max-height: none !important; /* Ensures no text is hidden */
          overflow: visible !important;
          display: block !important;
        }
        .interactive-card-wrapper span, 
        .interactive-card-wrapper small { 
          color: var(--amber) !important; 
          opacity: 0.8;
        }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .spin { animation: spin 1s linear infinite; }
        .skeleton-row { height: 110px; background: #15151c; border-radius: 8px; }
      `}} />
    </div>
  );
};

export default Home;