import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LogOut, Bookmark, Home, Globe, Cpu, User, Activity } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="nav-fixed-wrapper">
      <div className="nav-container">
        
        {/* LEFT: LOGO & STATUS */}
        <div className="nav-left-group">
          <Link to={user ? "/home" : "/"} className="logo-section">
            <div className="logo-box">
              <Cpu size={22} />
            </div>
            <div className="logo-text">
              <span className="brand-main">ENGINE</span>
              <span className="brand-sub">V4.0_CORE</span>
            </div>
          </Link>
          
          <div className="system-status-tag">
            <Activity size={14} className="pulse-icon" />
            <span>LIVE_FEED</span>
          </div>
        </div>
        
        {/* RIGHT: ACTIONS & USER */}
        <div className="nav-right-group">
          <div className="nav-actions">
            {user ? (
              <>
                <div className="internal-links">
                  <Link to="/home" className="nav-link-item">
                    <Home size={20} />
                    <span>FEED</span>
                  </Link>
                  <Link to="/bookmarks" className="nav-link-item">
                    <Bookmark size={20} />
                    <span>BOOKMARKS</span>
                  </Link>
                </div>

                <div className="user-terminal-pill">
                  <div className="user-info">
                    <div className="avatar-mini">
                      <User size={16} />
                    </div>
                    <span className="username-text">{user.username.toUpperCase()}</span>
                  </div>
                  <button onClick={handleLogout} className="logout-icon-btn" title="Terminate Session">
                    <LogOut size={16} />
                  </button>
                </div>
              </>
            ) : (
              <div className="guest-links">
                <Link to="/register" className="nav-cta-btn">
                  <span>ACCESS_PORTAL</span>
                  <Globe size={18} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .nav-fixed-wrapper {
          position: fixed;
          top: 0; left: 0; width: 100%;
          height: 72px; /* Increased height */
          display: flex; align-items: center;
          background: rgba(8, 8, 10, 0.9);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(255, 184, 0, 0.1);
          z-index: 1000;
        }

        .nav-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-left-group, .nav-right-group {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        /* SYSTEM STATUS TAG */
        .system-status-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(255, 184, 0, 0.05);
          border: 1px solid rgba(255, 184, 0, 0.1);
          border-radius: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #ffb800;
          letter-spacing: 2px;
        }

        .pulse-icon {
          animation: status-pulse 2s infinite;
        }

        @keyframes status-pulse {
          0% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0.3; transform: scale(0.9); }
        }

        /* LOGO */
        .logo-section {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
        }

        .logo-box {
          background: #ffb800;
          color: #000;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          box-shadow: 0 0 15px rgba(255, 184, 0, 0.3);
          transition: 0.3s;
        }
        .logo-section:hover .logo-box { transform: rotate(90deg); background: #fff; }

        .logo-text { display: flex; flex-direction: column; }
        .brand-main { 
          color: #fff; font-weight: 900; font-size: 18px; 
          letter-spacing: 2px; line-height: 1; 
        }
        .brand-sub { 
          color: #52525b; font-size: 10px; font-family: monospace; 
          margin-top: 4px;
        }

        /* NAVIGATION LINKS */
        .nav-actions { display: flex; align-items: center; gap: 24px; }
        .internal-links { display: flex; gap: 12px; }

        .nav-link-item {
          color: #94a3b8;
          text-decoration: none;
          font-size: 14px; /* Increased */
          font-weight: 800;
          font-family: 'JetBrains Mono', monospace;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          border-radius: 6px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link-item:hover { 
          color: #ffb800; 
          background: rgba(255, 184, 0, 0.05);
          transform: translateY(-2px);
        }

        /* USER TERMINAL PILL */
        .user-terminal-pill {
          display: flex;
          align-items: center; 
          background: #111116;
          border: 1px solid #1f1f27;
          padding: 5px;
          border-radius: 8px;
          transition: 0.3s;
        }
        .user-terminal-pill:hover { border-color: #ffb800; }

        .user-info {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 16px;
          color: #f8fafc;
        }

        .avatar-mini {
          width: 28px; height: 28px;
          background: #1f1f27;
          border-radius: 4px;
          display: flex; align-items: center; justify-content: center;
          color: #ffb800;
        }

        .username-text { 
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px; /* Increased */
          font-weight: 700;
          letter-spacing: 1px;
        }

        .logout-icon-btn {
          background: #1a1a20;
          color: #52525b;
          border: none;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.2s;
        }

        .logout-icon-btn:hover { background: #ff4444; color: #fff; transform: scale(1.05); }

        /* GUEST BUTTON */
        .nav-cta-btn {
          background: #ffb800;
          color: #000;
          padding: 10px 24px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 900;
          font-family: 'JetBrains Mono', monospace;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: 0.3s;
          box-shadow: 0 0 20px rgba(255, 184, 0, 0.2);
        }

        .nav-cta-btn:hover { background: #fff; transform: translateY(-2px); box-shadow: 0 0 30px rgba(255, 255, 255, 0.2); }

        @media (max-width: 950px) {
          .system-status-tag, .brand-sub, .nav-link-item span { display: none; }
          .nav-container { padding: 0 20px; }
          .nav-link-item { padding: 10px; }
        }
      `}} />
    </nav>
  );
};
  
export default Navbar;