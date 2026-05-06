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
    
    const isBookmarked = user.bookmarks.some(b => b === storyId || b._id === storyId);
    let newBookmarks;
    if (isBookmarked) {
      newBookmarks = user.bookmarks.filter(b => b !== storyId && b._id !== storyId);
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
