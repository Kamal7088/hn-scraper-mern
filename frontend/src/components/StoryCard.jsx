import { useContext, useState } from 'react';
import { Bookmark, ExternalLink, User, Clock, Star } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import api from '../api/api';

const StoryCard = ({ story }) => {
  const { user, toggleBookmarkContext } = useContext(AuthContext);
  const [isBookmarked, setIsBookmarked] = useState(
    user?.bookmarks.some(b => b === story._id || b._id === story._id)
  );

  const handleBookmark = async () => {
    if (!user) {
      alert('Please login to bookmark stories');
      return;
    }

    try {
      await api.post(`/stories/${story._id}/bookmark`);
      setIsBookmarked(!isBookmarked);
      toggleBookmarkContext(story._id);
    } catch (error) {
      console.error('Error toggling bookmark', error);
    }
  };

  return (
    <div className="story-card glass fade-in">
      <div className="story-content">
        <h3>
          <a href={story.url} target="_blank" rel="noopener noreferrer">
            {story.title}
          </a>
        </h3>
        <div className="story-meta">
          <span><Star size={14} color="var(--primary)" /> {story.points} points</span>
          <span><User size={14} /> {story.author}</span>
          <span><Clock size={14} /> {story.postedAt}</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button 
          onClick={handleBookmark} 
          className={`bookmark-btn ${isBookmarked ? 'active' : ''}`}
        >
          <Bookmark size={20} fill={isBookmarked ? "currentColor" : "none"} />
        </button>
        <a href={story.url} target="_blank" rel="noopener noreferrer" className="bookmark-btn">
          <ExternalLink size={20} />
        </a>
      </div>
    </div>
  );
};

export default StoryCard;
