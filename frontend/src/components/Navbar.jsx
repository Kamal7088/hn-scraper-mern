import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LogOut, Bookmark, Home, Globe } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="container">
      <Link to={user ? "/home" : "/"} className="logo">
        <div className="logo-mark">HN</div>
        <span>The Insider</span>
      </Link>
      
      <div className="nav-links">
        {user && (
          <Link to="/home" className="btn btn-outline">
            <Home size={18} />
            <span>Feed</span>
          </Link>
        )}
        
        {user ? (
          <>
            <Link to="/bookmarks" className="btn btn-outline">
              <Bookmark size={18} />
              <span>Bookmarks</span>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Hi, <strong>{user.username}</strong>
              </span>
              <button onClick={handleLogout} className="btn btn-primary" style={{ padding: '8px 12px' }}>
                <LogOut size={16} />
              </button>
            </div>
          </>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Login / Register
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
