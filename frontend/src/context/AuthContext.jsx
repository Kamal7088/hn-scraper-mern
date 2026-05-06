import { createContext, useState, useEffect } from 'react';
import api from '../api/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const checkUserLoggedIn = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const { data } = await api.get('/auth/profile');
          setUser(data);
        } catch (error) {
          console.error("Invalid token", error);
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };

    checkUserLoggedIn();
  }, []);

  const login = async (username, password) => {
    const { data } = await api.post('/auth/login', { username, password });
    localStorage.setItem('token', data.token);
    setUser({ _id: data._id, username: data.username, bookmarks: data.bookmarks });
  };

  const register = async (username, password) => {
    const { data } = await api.post('/auth/register', { username, password });
    localStorage.setItem('token', data.token);
    setUser({ _id: data._id, username: data.username, bookmarks: data.bookmarks });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const toggleBookmarkContext = (storyId) => {
    if (!user) return;
    
    // Normalize bookmarks to IDs for comparison
    const bookmarkIds = user.bookmarks.map(b => (typeof b === 'string' ? b : b._id));
    const isBookmarked = bookmarkIds.includes(storyId);
    
    let newBookmarks;
    if (isBookmarked) {
      newBookmarks = user.bookmarks.filter(b => {
        const id = typeof b === 'string' ? b : b._id;
        return id !== storyId;
      });
    } else {
      newBookmarks = [...user.bookmarks, storyId];
    }
    setUser({ ...user, bookmarks: newBookmarks });
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, toggleBookmarkContext }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
