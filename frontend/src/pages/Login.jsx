import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LogIn, ArrowRight, ShieldCheck, Cpu, Terminal } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(username, password);
      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.message || 'Access Denied: Invalid Credentials');
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
          {/* Moving Border Animation */}
          <div className="card-border-gradient"></div>

          <div className="card-content">
            <div className="card-header-tech anim-delay-1">
              <div className="tech-badge">
                <Terminal size={12} />
                <span>SECURE_SESSION_v2.0</span>
              </div>
            </div>

            <div className="auth-header anim-delay-2">
              <div className="auth-logo-box">
                <Cpu size={24} />
                <div className="logo-pulse"></div>
              </div>
              <h2>System Login</h2>
              <p>Initialize secure link to your bookmark database.</p>
            </div>

            {error && (
              <div className="auth-error-msg anim-delay-3">
                <span className="error-dot"></span>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="auth-form anim-delay-3">
              <div className="form-grid-row">
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
              </div>

              <button type="submit" className="auth-submit-btn" disabled={loading}>
                {loading ? (
                  <span className="loading-dots">AUTHENTICATING</span>
                ) : (
                  <>
                    <span>Login</span>
                    <LogIn size={18} />
                  </>
                )}
              </button>
            </form>

            <div className="auth-footer anim-delay-4">
              <p className="footer-text">
                If you don't have an account, please&nbsp;
                <Link to="/register" className="auth-link">
                  Register <ArrowRight size={14} />
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
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0; left: 0;
          overflow-y: auto;
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
          max-width: 620px;
          position: relative;
          z-index: 10;
          margin-left:100px;
        }

        .auth-card {
          position: relative;
          background: var(--glass);
          border-radius: 24px;
          padding: 45px 50px; /* Increased vertical padding to make height bigger */
          backdrop-filter: blur(20px);
          border: 1px solid var(--border);
          box-shadow: 0 40px 100px rgba(0,0,0,0.8);
          overflow: hidden;
        }

        .form-grid-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 15px;
        }

        .auth-header h2 { font-size: 28px; font-weight: 800; color: #fff; text-align: center; margin: 0; }
        .auth-header p { color: var(--text-muted); text-align: center; margin: 10px 0 30px; font-size: 14px; }

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

        .input-field { margin-bottom: 22px; text-align: left; }
        .input-field label { font-family: monospace; font-size: 11px; color: var(--text-muted); margin-bottom: 8px; display: block; letter-spacing: 1px; }
        
        .input-field input {
          width: 100%;
          background: rgba(0,0,0,0.4);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 15px 18px; /* Slightly bigger input padding */
          color: #fff;
          font-size: 15px;
          transition: all 0.3s;
        }

        .input-field input:focus { outline: none; background: rgba(255, 102, 0, 0.03); border-color: rgba(255, 102, 0, 0.4); }

        .auth-submit-btn {
          width: 100%;
          background: #fff;
          color: #000;
          border: none;
          padding: 16px; /* Slightly bigger button */
          border-radius: 12px;
          font-weight: 800;
          font-family: monospace;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: 0.3s;
          margin-top: 15px;
        }

        .auth-submit-btn:hover:not(:disabled) { background: var(--primary); color: #fff; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(255, 102, 0, 0.2); }

        .auth-footer { margin-top: 35px; text-align: center; border-top: 1px solid var(--border); padding-top: 25px; }
        .auth-footer p { color: #ffffff; font-size: 14px; margin: 0; }
        .auth-link { color: var(--primary); font-weight: 700; text-decoration: none; }

        @media (max-width: 650px) {
          .form-grid-row { grid-template-columns: 1fr; gap: 0; }
          .auth-card { padding: 30px 25px; }
        }

        .loading-dots:after { content: '.'; animation: dots 1s steps(5, end) infinite; }
        @keyframes dots { 0%, 20% { opacity: 0; } 40% { opacity: 1; } 60% { text-shadow: .25em 0 0 #000; } 80%, 100% { text-shadow: .25em 0 0 #000, .5em 0 0 #000; } }
      `}} />
    </div>
  );
};

export default Login;