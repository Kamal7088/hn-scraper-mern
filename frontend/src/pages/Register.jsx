import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { UserPlus, ArrowRight, Terminal } from 'lucide-react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) return setError('DATA_MISMATCH: Passwords do not match');
    if (password.length < 6) return setError('SECURITY_FLAW: Password must be 6+ characters');
    setLoading(true);
    try {
      await register(username, password);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. System rejected entry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="blueprint-grid"></div>
      <div className="radial-vignette"></div>

      <div className="auth-container">
        <div className="auth-card glass-panel">
          <div className="card-border-gradient"></div>

          <div className="card-content">
            <div className="card-header-tech anim-delay-1">
              <div className="tech-badge">
                <Terminal size={12} />
                <span>NEW_NODE_ENTRY_v2.0</span>
              </div>
            </div>

            <div className="auth-header anim-delay-2">
              <div className="auth-logo-box">
                <UserPlus size={24} />
                <div className="logo-pulse"></div>
              </div>
              <h2>Create Identity</h2>
              <p>Initialize your profile to start indexing the web.</p>
            </div>

            {error && (
              <div className="auth-error-msg anim-delay-3">
                <span className="error-dot"></span>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="auth-form anim-delay-3">
              <div className="input-field">
                <label>Username</label>
                <div className="input-wrapper">
                  <input 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <div className="input-focus-border"></div>
                </div>
              </div>
              
              <div className="form-grid-row">
                <div className="input-field">
                  <label>Password</label>
                  <div className="input-wrapper">
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div className="input-focus-border"></div>
                  </div>
                </div>

                <div className="input-field">
                  <label>Confirm Password</label>
                  <div className="input-wrapper">
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <div className="input-focus-border"></div>
                  </div>
                </div>
              </div>

              <button type="submit" className="auth-submit-btn" disabled={loading}>
                {loading ? (
                  <span className="loading-dots">WRITING_TO_DISK</span>
                ) : (
                  <>
                    <span>REGISTER_ACCOUNT</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <div className="auth-footer anim-delay-4">
              <p className="footer-text">
                ALREADY_INDEXED?{' '}
                <Link to="/login" className="auth-link">
                  RETURN_TO_LOGIN <ArrowRight size={14} />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          --primary: #ff6600;
          --bg-dark: #050506;
          --glass: rgba(13, 13, 15, 0.85);
          --border: rgba(255, 255, 255, 0.08);
          --text-muted: #94a3b8;
        }

        .auth-page-wrapper {
          background-color: var(--bg-dark);
          min-height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;    /* Vertical center */
          justify-content: center; /* Horizontal center */
          position: fixed;        /* Fixes it to viewport */
          top: 0; left: 0;
          overflow-y: auto;       /* Allows scrolling if screen is too short */
          padding: 40px 20px;
        }

        .blueprint-grid {
          position: absolute; inset: 0; background-size: 50px 50px;
          background-image: linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
          z-index: 1;
        }

        .radial-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 0%, var(--bg-dark) 90%);
          z-index: 2;
        }

        .auth-container {
          width: 100%;
          max-width: 600px;
          position: relative;
          z-index: 10;
          margin-left: 100px; /* Extra insurance for centering */
        }

        .auth-card {
          position: relative;
          background: var(--glass);
          border-radius: 24px;
          padding: 35px 50px;
          backdrop-filter: blur(20px);
          border: 1px solid var(--border);
          box-shadow: 0 40px 100px rgba(0,0,0,0.8);
        }

        @media (max-width: 900px) {
          .auth-page-wrapper {
            position: relative;
            padding: 40px 18px;
          }
          .auth-container { margin-left: 0; padding: 0; }
          .auth-card { padding: 34px 26px; }
          .form-grid-row { grid-template-columns: 1fr; gap: 18px; }
        }

        @media (max-width: 650px) {
          .auth-page-wrapper { padding: 30px 14px; }
          .auth-card { padding: 28px 18px; }
          .form-grid-row { grid-template-columns: 1fr; gap: 14px; }
          .auth-header h2 { font-size: 24px; }
          .auth-header p { font-size: 13px; }
          .input-field input { padding: 13px 14px; }
          .auth-submit-btn { padding: 14px; font-size: 14px; }
        }

        .form-grid-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .auth-header h2 { font-size: 28px; font-weight: 800; color: #fff; text-align: center; margin: 0; }
        .auth-header p { color: var(--text-muted); text-align: center; margin: 8px 0 25px; font-size: 14px; }
        
        .card-border-gradient {
          position: absolute; inset: 0; padding: 1.5px; border-radius: 24px;
          background: linear-gradient(130deg, transparent 40%, var(--primary), transparent 60%);
          background-size: 200% 200%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          animation: border-flow 6s linear infinite;
        }

        @keyframes border-flow {
          0% { background-position: 200% 0%; }
          100% { background-position: -200% 100%; }
        }

        .card-content > * { opacity: 0; transform: translateY(15px); animation: fadeInUp 0.6s ease forwards; }
        .anim-delay-1 { animation-delay: 0.1s; }
        .anim-delay-2 { animation-delay: 0.2s; }
        .anim-delay-3 { animation-delay: 0.3s; }
        .anim-delay-4 { animation-delay: 0.4s; }

        @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

        .auth-logo-box { width: 50px; height: 50px; background: var(--primary); color: #000; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; position: relative; }
        .logo-pulse { position: absolute; inset: -4px; border: 2px solid var(--primary); border-radius: 16px; animation: pulse 2s infinite; }
        @keyframes pulse { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.3); opacity: 0; } }

        .input-field { margin-bottom: 18px; text-align: left; }
        .input-field label { font-family: monospace; font-size: 10px; color: var(--text-muted); margin-bottom: 6px; display: block; letter-spacing: 1px; }
        
        .input-field input {
          width: 100%;
          background: rgba(0,0,0,0.4);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 12px 16px;
          color: #fff;
          font-size: 14px;
          transition: all 0.3s;
        }

        .input-field input:focus { outline: none; background: rgba(255, 102, 0, 0.03); border-color: rgba(255, 102, 0, 0.4); }

        .auth-submit-btn {
          width: 100%;
          background: #fff;
          color: #000;
          border: none;
          padding: 14px;
          border-radius: 12px;
          font-weight: 800;
          font-family: monospace;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: 0.3s;
          margin-top: 10px;
        }

        .auth-submit-btn:hover:not(:disabled) { background: var(--primary); color: #fff; transform: translateY(-2px); }

        .auth-footer { margin-top: 25px; text-align: center; border-top: 1px solid var(--border); padding-top: 20px; }
        .auth-footer p { color: #ffffff; font-size: 13px; margin: 0; }
        .auth-link { color: var(--primary); font-weight: 700; text-decoration: none; }

        @media (max-width: 650px) {
          .form-grid-row { grid-template-columns: 1fr; gap: 0; }
          .auth-card { padding: 30px 25px; }
        }
      `}} />
    </div>
  );
};

export default Register;