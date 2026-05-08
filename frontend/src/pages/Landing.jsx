import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Rocket, Terminal, Layers, Activity, Sparkles } from 'lucide-react';

const Landing = () => {
    return (
        <div className="landing-wrapper">

            {/* Hero Section - Centered Version */}
            <header className="hero-v4">
                <div className="hero-inner container centered">
                    <div className="hero-text-content">
                        <div className="badge-v4 reveal-up">
                            <Sparkles size={14} className="sparkle-icon" />
                            <span>Proprietary Scraper Engine v4.0</span>
                        </div>
                        <h1 className="reveal-up" style={{ animationDelay: '0.1s' }}>
                            The Scraper <span className="accent-text">Engine</span>
                        </h1>
                        <p className="reveal-up" style={{ animationDelay: '0.2s' }}>
                            A distributed node-based architecture that bypasses latency. Get the news before it's even news
                        </p>
                        <div className="hero-actions reveal-up" style={{ animationDelay: '0.3s' }}>
                            <Link to="/register" className="btn-v4 btn-v4-primary">
                                <span>Initialize System</span>
                                <ArrowRight size={18} />
                            </Link>
                            <Link to="/login" className="btn-v4 btn-v4-glass">
                                Secure Login
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Bento Grid Features */}
            <section className="bento-section container">
                <div className="section-header reveal-up">
                    <Activity size={32} color="var(--primary)" />
                    <h2>Engineered for Excellence.</h2>
                </div>

                <div className="bento-layout">
                    <div className="bento-card bento-wide glass-card reveal-up" style={{ animationDelay: '0.4s' }}>
                        <div className="card-glint"></div>
                        <div className="card-header">
                            <Terminal size={20} />
                            <span>Real-time Stream</span>
                        </div>
                        <h3>Quantum Scraping</h3>
                        <p>Our engine connects directly to the YC firehose with sub-10ms latency. No middleman, no delays.</p>
                        <div className="code-snippet">
                            <div className="code-dots"><span></span><span></span><span></span></div>
                            <code>{`> hn-scraper --engine quantum --force`}</code>
                            <br />
                            <code className="code-success">{`[SUCCESS] 50 stories extracted in 0.002s`}</code>
                        </div>
                    </div>

                    <div className="bento-card glass-card reveal-up" style={{ animationDelay: '0.5s' }}>
                        <div className="card-glint"></div>
                        <Shield size={28} color="var(--primary)" />
                        <h3>Secure Vault</h3>
                        <p>Your reading history is encrypted and persistent.</p>
                    </div>

                    <div className="bento-card glass-card reveal-up" style={{ animationDelay: '0.6s' }}>
                        <div className="card-glint"></div>
                        <Zap size={28} color="var(--primary)" />
                        <h3>High Signal</h3>
                        <p>Smart filters remove the noise, keeping only the code.</p>
                    </div>

                    <div className="bento-card bento-wide glass-card reveal-up" style={{ animationDelay: '0.7s' }}>
                        <div className="card-glint"></div>
                        <div className="stats-row">
                            <div className="stat">
                                <h4>99.9%</h4>
                                <span>Uptime</span>
                            </div>
                            <div className="stat">
                                <h4>10ms</h4>
                                <span>Latency</span>
                            </div>
                            <div className="stat">
                                <h4>1M+</h4>
                                <span>Requests</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <Layers size={20} color="var(--primary)" />
                            <h3>Enterprise Scale</h3>
                        </div>
                        <p>Designed to handle millions of queries without breaking a sweat. Professional grade news consumption.</p>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        :root {
          --primary: #ff6600;
          --primary-glow: rgba(255, 102, 0, 0.4);
          --primary-soft: rgba(255, 102, 0, 0.05);
          --text: #0f172a;
          --text-muted: #475569;
          --bg: #f8fafc;
          --glass: rgba(255, 255, 255, 0.7);
          --glass-border: rgba(255, 255, 255, 0.8);
          --transition-main: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .landing-wrapper {
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        /* --- BACKGROUND ORNAMENTATION --- */
        .mesh-gradient {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: 
            radial-gradient(at 50% 0%, rgba(255, 102, 0, 0.12) 0, transparent 50%),
            radial-gradient(at 100% 100%, rgba(255, 102, 0, 0.05) 0, transparent 50%),
            radial-gradient(at 0% 100%, rgba(255, 102, 0, 0.05) 0, transparent 50%);
          z-index: 0;
          filter: blur(100px);
          animation: mesh-flow 20s infinite alternate;
        }

        @keyframes mesh-flow {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        .floating-particles .particle {
          position: absolute;
          background: var(--primary);
          border-radius: 50%;
          opacity: 0.08;
          filter: blur(2px);
          z-index: 1;
        }
        .p1 { width: 400px; height: 400px; top: -100px; left: 10%; animation: float 12s infinite; }
        .p2 { width: 300px; height: 300px; bottom: 10%; right: 10%; animation: float 18s infinite reverse; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-40px); }
        }

        /* --- HERO (UPDATED TO CENTER) --- */
        .hero-v4 { padding: 180px 0 120px; position: relative; z-index: 2; }
        .hero-inner.centered { 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          text-align: center; 
        }

        .hero-text-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 850px;
        }

        .badge-v4 {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px; background: white; border: 1px solid #e2e8f0;
          border-radius: 100px; font-size: 12px; font-weight: 700;
          margin-bottom: 24px; color: var(--text-muted);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .sparkle-icon { color: var(--primary); animation: pulse 2s infinite; }

        .hero-text-content h1 {
          font-size: clamp(48px, 8vw, 84px);
          line-height: 0.95; font-weight: 900; letter-spacing: -4px;
          margin-bottom: 24px;
        }

        .accent-text {
          background: linear-gradient(135deg, #ff6600, #ff9800);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        .hero-text-content p {
          font-size: 20px; color: var(--text-muted); margin-bottom: 40px;
          max-width: 620px; line-height: 1.6;
        }

        .hero-actions { display: flex; gap: 16px; justify-content: center; }
        
        .btn-v4 {
          padding: 16px 32px; border-radius: 14px; font-weight: 700;
          text-decoration: none; transition: var(--transition-main);
          display: inline-flex; align-items: center; gap: 10px;
        }
        .btn-v4-primary {
          background: #0f172a; color: white;
          box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.3);
        }
        .btn-v4-primary:hover {
          background: var(--primary); transform: translateY(-3px);
          box-shadow: 0 15px 35px -5px var(--primary-glow);
        }
        .btn-v4-glass {
          background: var(--glass); border: 1px solid var(--glass-border);
          backdrop-filter: blur(10px); color: var(--text);
        }
        .btn-v4-glass:hover { background: white; border-color: var(--primary); }

        /* --- BENTO SECTION --- */
        .bento-section { padding: 100px 0; position: relative; z-index: 2; }
        .section-header { text-align: center; margin-bottom: 60px; }
        .section-header h2 { font-size: 48px; font-weight: 900; letter-spacing: -2px; margin-top: 10px; }

        .bento-layout {
          display: grid; grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(300px, auto); gap: 24px;
        }

        .glass-card {
          background: var(--glass);
          backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border);
          border-radius: 32px;
          padding: 40px;
          position: relative; overflow: hidden;
          transition: var(--transition-main);
        }

        .glass-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
          background: white;
          box-shadow: 0 30px 60px -15px rgba(255, 102, 0, 0.1);
        }

        .card-glint {
          position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-25deg); transition: 0.75s;
        }
        .glass-card:hover .card-glint { left: 150%; }

        .bento-wide { grid-column: span 2; }
        .code-snippet {
          background: #0f172a; border-radius: 16px; padding: 20px;
          margin-top: 24px; font-family: monospace;
        }
        .code-dots { display: flex; gap: 6px; margin-bottom: 12px; }
        .code-dots span { width: 8px; height: 8px; border-radius: 50%; background: #334155; }
        .code-success { color: #10b981; }

        .stats-row { display: flex; gap: 40px; margin-bottom: 24px; }
        .stat h4 { font-size: 42px; font-weight: 900; letter-spacing: -2px; }
        .stat span { font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-muted); }

        /* --- ANIMATIONS --- */
        .reveal-up {
          opacity: 0; transform: translateY(30px);
          animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes revealUp { to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 1024px) {
          .bento-layout { grid-template-columns: 1fr; }
          .bento-wide { grid-column: span 1; }
        }
      `}} />
        </div>
    );
};

export default Landing;