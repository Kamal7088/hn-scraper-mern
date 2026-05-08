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

  const updateBookmarks = (bookmarks) => {
    setUser((prevUser) => {
      if (!prevUser) return prevUser;
      return { ...prevUser, bookmarks };
    });
  };

  const login = async (username, password) => {
    username = username.trim().toLowerCase();
    password = password.trim();

    const { data } = await api.post('/auth/login', { username, password });
    localStorage.setItem('token', data.token);
    setUser({ _id: data._id, username: data.username, bookmarks: data.bookmarks });
  };

  const register = async (username, password) => {
    username = username.trim().toLowerCase();
    password = password.trim();

    await api.post('/auth/register', { username, password });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const normalizeBookmarkId = (bookmark) => {
    if (!bookmark) return '';
    if (typeof bookmark === 'string') return bookmark;
    if (typeof bookmark._id !== 'undefined') return String(bookmark._id);
    return String(bookmark);
  };

  const toggleBookmarkContext = (storyId) => {
    if (!user) return;

    const normalizedId = String(storyId);
    const bookmarkIds = user.bookmarks.map((b) => normalizeBookmarkId(b));
    const isBookmarked = bookmarkIds.includes(normalizedId);

    let newBookmarks;
    if (isBookmarked) {
      newBookmarks = user.bookmarks.filter((b) => normalizeBookmarkId(b) !== normalizedId);
    } else {
      newBookmarks = [...user.bookmarks, normalizedId];
    }
    setUser({ ...user, bookmarks: newBookmarks });
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, toggleBookmarkContext, updateBookmarks }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
