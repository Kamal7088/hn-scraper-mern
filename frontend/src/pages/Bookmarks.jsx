import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import StoryCard from '../components/StoryCard';
import api from '../api/api';
import { Bookmark } from 'lucide-react';

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

  if (loading) return <div className="container" style={{ padding: '50px', textAlign: 'center' }}>Loading your bookmarks...</div>;

  return (
    <div className="container">
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Bookmark size={28} color="var(--primary)" fill="var(--primary)" />
          Your Bookmarks
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>Stories you've saved to read later</p>
      </header>

      <div className="stories-grid">
        {bookmarkedStories.length > 0 ? (
          bookmarkedStories.map(story => (
            <StoryCard key={story._id} story={story} />
          ))
        ) : (
          <div className="glass" style={{ padding: '60px', textAlign: 'center' }}>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              You haven't bookmarked any stories yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
