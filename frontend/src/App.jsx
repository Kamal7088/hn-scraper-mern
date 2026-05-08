import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Bookmarks from './pages/Bookmarks';

import Landing from './pages/Landing';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  
  if (loading) return null;
  if (!user) return <Navigate to="/login" />;
  
  return children;
};

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <main style={{ paddingBottom: '50px' }}>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/home" /> : <Landing />} />
          <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/home" /> : <Register />} />
          
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/bookmarks" 
            element={
              <ProtectedRoute>
                <Bookmarks />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
