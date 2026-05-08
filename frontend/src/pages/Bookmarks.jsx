import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import StoryCard from '../components/StoryCard';
import api from '../api/api';
import { Bookmark, Terminal, Box, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Bookmarks = () => {
  const { user } = useContext(AuthContext);
  const [bookmarkedStories, setBookmarkedStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const { data } = await api.get('/auth/profile');
        setBookmarkedStories(data.bookmarks);
      } catch (error) {
        console.error('Error fetching bookmarks', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchBookmarks();
    }
  }, [user]);

  return (
    <div className="bookmarks-page-wrapper">
      <div className="dot-pattern"></div>
      
      <div className="container content-layer">
        {/* Header Section */}
        <header className="bookmarks-header anim-fade-in">
          <div className="header-meta">
            <div className="status-pill">
              <Bookmark size={12} fill="currentColor" />
              <span>ARCHIVE_ACCESSED</span>
            </div>
            <h1>Saved <span className="text-amber">Intelligence</span></h1>
            <p className="sub-tag">Stored data packets for later processing.</p>
          </div>
          
          <Link to="/" className="back-link">
            <ArrowLeft size={18} />
            <span>RETURN_TO_STREAM</span>
          </Link>
        </header>

        {loading ? (
          <div className="wide-vertical-stack">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="skeleton-row"></div>
            ))}
          </div>
        ) : (
          <div className="wide-vertical-stack">
            {bookmarkedStories.length > 0 ? (
              bookmarkedStories.map((story, index) => (
                <div 
                  key={story._id} 
                  className="interactive-card-wrapper" 
                  style={{ '--i': index }}
                >
                  <div className="row-content">
                    <StoryCard story={story} />
                  </div>
                  <div className="card-tag">
                    <Box size={14} />
                    <span>SAVED_DATA</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state anim-fade-in">
                <Terminal size={48} className="empty-icon" />
                <h2>NO_DATA_FOUND</h2>
                <p>Your bookmark database is currently empty.</p>
                <Link to="/" className="browse-btn">START_EXPLORING</Link>
              </div>
            )}
          </div>
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

        .bookmarks-page-wrapper {
          background-color: var(--bg);
          min-height: 100vh;
          padding: 80px 20px;
          color: var(--t-high);
          font-family: 'JetBrains Mono', monospace;
        }

        .dot-pattern {
          position: fixed; inset: 0;
          background-image: radial-gradient(var(--border-color) 1px, transparent 0);
          background-size: 24px 24px;
          z-index: 1;
        }

        .content-layer { position: relative; z-index: 10; max-width: 1100px; margin: 0 auto; }

        /* Header Style */
        .bookmarks-header {
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

        .back-link {
          display: flex; align-items: center; gap: 10px;
          color: var(--t-med); text-decoration: none; font-size: 12px;
          padding: 10px 15px; border: 1px solid var(--border-color);
          border-radius: 4px; transition: 0.3s;
        }
        .back-link:hover { border-color: var(--amber); color: var(--amber); }

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

        /* Empty State */
        .empty-state {
          text-align: center; padding: 100px 20px;
          background: var(--card-bg); border: 1px dashed var(--border-color);
          border-radius: 12px;
        }
        .empty-icon { color: var(--t-low); margin-bottom: 20px; }
        .empty-state h2 { color: var(--t-high); letter-spacing: 4px; margin-bottom: 10px; }
        .empty-state p { color: var(--t-med); margin-bottom: 30px; }
        .browse-btn {
          display: inline-block; padding: 12px 30px;
          background: var(--amber); color: #000; font-weight: 800;
          text-decoration: none; border-radius: 4px; transition: 0.3s;
        }
        .browse-btn:hover { transform: scale(1.05); box-shadow: 0 0 20px var(--amber-glow); }

        /* Typography Override for StoryCard */
        .interactive-card-wrapper h3, 
        .interactive-card-wrapper a { 
          color: var(--t-high) !important; 
          font-size: 1.2rem !important;
          margin-bottom: 8px !important;
          display: block !important;
          word-break: break-word !important;
        }
        .interactive-card-wrapper p { 
          color: var(--t-med) !important; 
          font-size: 0.95rem !important;
          line-height: 1.6 !important;
        }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        .anim-fade-in { animation: fadeIn 0.8s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .skeleton-row { height: 110px; background: #15151c; border-radius: 8px; margin-bottom: 14px; }
      `}} />
    </div>
  );
};

export default Bookmarks;

