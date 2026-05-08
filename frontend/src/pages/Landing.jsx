import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Rocket, Terminal, Layers, Activity, Sparkles, Database, Code } from 'lucide-react';

const Landing = () => {
    return (
        <div className="landing-wrapper">
            <div className="mesh-gradient"></div>
            <div className="grid-overlay"></div>

            {/* Hero Section - Elite Split Version */}
            <header className="hero-v5">
                <div className="hero-inner container split">
                    <div className="hero-text-content reveal-up">
                        <div className="badge-v5">
                            <Activity size={14} className="pulse-icon" />
                            <span>Live Extraction Active</span>
                        </div>
                        <h1>
                            Scrape. Analyze. <br />
                            <span className="accent-text">Innovate.</span>
                        </h1>
                        <p>
                            The ultimate Hacker News intelligence platform. 
                            Extract real-time technical trends, archive top-tier discussions, 
                            and stay ahead of the curve with our elite scraping engine.
                        </p>
                        <div className="hero-actions">
                            <Link to="/register" className="btn-v5 btn-v5-primary">
                                <span>Get Started</span>
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/login" className="btn-v5 btn-v5-ghost">
                                <span>Sign In</span>
                            </Link>
                        </div>
                        
                        <div className="hero-stats">
                            <div className="h-stat">
                                <strong>500+</strong>
                                <span>Stories Scraped</span>
                            </div>
                            <div className="h-stat">
                                <strong>10ms</strong>
                                <span>Latency</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual-v5 reveal-up" style={{ animationDelay: '0.3s' }}>
                        <div className="visual-container">
                            <div className="floating-card c1">
                                <Code size={20} color="var(--primary)" />
                                <span>Real-time Parsing</span>
                            </div>
                            <div className="floating-card c2">
                                <Database size={20} color="var(--primary)" />
                                <span>Secure Storage</span>
                            </div>
                            <img 
                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070" 
                                alt="Code and Data" 
                                className="hero-img-main"
                            />
                            <div className="img-glow"></div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Bento Grid Features */}
            <section className="bento-section container">
                <div className="section-header reveal-up">
                    <Sparkles size={32} color="var(--primary)" />
                    <h2>Uncompromising Power.</h2>
                </div>

                <div className="bento-layout">
                    <div className="bento-card bento-wide glass-card reveal-up" style={{ animationDelay: '0.4s' }}>
                        <div className="card-glint"></div>
                        <div className="card-header">
                            <Terminal size={20} />
                            <span>Quantum Engine</span>
                        </div>
                        <h3>Automated Scraping</h3>
                        <p>Our autonomous workers fetch and parse the latest stories from Hacker News every hour, ensuring your feed is never stale.</p>
                        <div className="code-snippet">
                            <div className="code-dots"><span></span><span></span><span></span></div>
                            <code>{`$ hn-scraper --mode auto --interval 60m`}</code>
                            <br />
                            <code className="code-success">{`[LIVE] Synchronizing with HN Firehose...`}</code>
                        </div>
                    </div>

                    <div className="bento-card glass-card reveal-up" style={{ animationDelay: '0.5s' }}>
                        <div className="card-glint"></div>
                        <Shield size={28} color="var(--primary)" />
                        <h3>Secure Vault</h3>
                        <p>Keep your findings private with encrypted personal bookmarks.</p>
                    </div>

                    <div className="bento-card glass-card reveal-up" style={{ animationDelay: '0.6s' }}>
                        <div className="card-glint"></div>
                        <Zap size={28} color="var(--primary)" />
                        <h3>Fast Sync</h3>
                        <p>Distributed infrastructure for lightning-fast data delivery.</p>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        :root {
          --primary: #ff6600;
          --primary-glow: rgba(255, 102, 0, 0.4);
          --text: #0f172a;
          --text-muted: #475569;
          --bg: #ffffff;
          --glass: rgba(255, 255, 255, 0.8);
          --transition-main: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .landing-wrapper {
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .mesh-gradient {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: 
            radial-gradient(at 0% 0%, rgba(255, 102, 0, 0.05) 0, transparent 50%),
            radial-gradient(at 100% 0%, rgba(255, 102, 0, 0.03) 0, transparent 50%);
          z-index: 0;
        }

        .grid-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: radial-gradient(#e2e8f0 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.5;
          z-index: 1;
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* --- HERO V5 --- */
        .hero-v5 {
          padding: 160px 0 120px;
          position: relative;
          z-index: 10;
        }

        .hero-inner.split {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 80px;
        }

        .hero-text-content h1 {
          font-size: clamp(64px, 10vw, 108px);
          line-height: 0.85;
          font-weight: 950;
          letter-spacing: -6px;
          margin-bottom: 32px;
          color: var(--text);
        }

        .accent-text {
          background: linear-gradient(135deg, #ff6600, #ff9500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-text-content p {
          font-size: 24px;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 48px;
          max-width: 600px;
          font-weight: 500;
        }

        .badge-v5 {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          background: white;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 32px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .pulse-icon { animation: pulse 2s infinite; }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
          100% { transform: scale(1); opacity: 1; }
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          margin-bottom: 64px;
        }

        .btn-v5 {
          padding: 20px 40px;
          border-radius: 20px;
          font-weight: 800;
          font-size: 18px;
          text-decoration: none;
          transition: var(--transition-main);
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .btn-v5-primary {
          background: var(--text);
          color: white;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);
        }

        .btn-v5-primary:hover {
          background: var(--primary);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px var(--primary-glow);
        }

        .btn-v5-ghost {
          background: white;
          border: 2px solid #e2e8f0;
          color: var(--text);
        }

        .btn-v5-ghost:hover {
          border-color: var(--text);
          background: #f8fafc;
          transform: translateY(-5px);
        }

        .hero-stats {
          display: flex;
          gap: 48px;
        }

        .h-stat strong {
          display: block;
          font-size: 32px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .h-stat span {
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 800;
          color: var(--text-muted);
          letter-spacing: 1px;
        }

        /* Hero Visual V5 */
        .hero-visual-v5 {
          position: relative;
        }

        .visual-container {
          position: relative;
          border-radius: 48px;
          overflow: hidden;
          box-shadow: 0 60px 100px -30px rgba(0,0,0,0.4);
          transform: perspective(1000px) rotateY(-10deg) rotateX(2deg);
          transition: var(--transition-main);
        }

        .visual-container:hover {
          transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05);
        }

        .hero-img-main {
          width: 100%;
          display: block;
          filter: saturate(1.1);
        }

        .img-glow {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(135deg, var(--primary-glow), transparent);
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        .floating-card {
          position: absolute;
          background: white;
          padding: 16px 24px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          font-size: 14px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          z-index: 20;
          animation: float 6s ease-in-out infinite;
        }

        .c1 { top: 10%; right: -20px; animation-delay: 0s; }
        .c2 { bottom: 15%; left: -30px; animation-delay: 2s; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        /* Bento Grid */
        .bento-section { padding: 120px 0; position: relative; z-index: 5; }
        .section-header { text-align: center; margin-bottom: 80px; }
        .section-header h2 { font-size: 56px; font-weight: 900; letter-spacing: -3px; }

        .bento-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(320px, auto);
          gap: 32px;
        }

        .glass-card {
          background: var(--glass);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 40px;
          padding: 48px;
          transition: var(--transition-main);
          position: relative;
          overflow: hidden;
        }

        .glass-card:hover {
          transform: translateY(-12px);
          background: white;
          box-shadow: 0 40px 80px rgba(0,0,0,0.08);
        }

        .bento-wide { grid-column: span 2; }
        .bento-card h3 { font-size: 32px; font-weight: 900; letter-spacing: -1.5px; margin: 20px 0 16px; }
        .bento-card p { font-size: 18px; color: var(--text-muted); font-weight: 500; line-height: 1.6; }

        .code-snippet {
          background: #0f172a;
          border-radius: 20px;
          padding: 24px;
          margin-top: 32px;
          color: white;
          font-family: monospace;
        }

        .code-dots { display: flex; gap: 8px; margin-bottom: 16px; }
        .code-dots span { width: 10px; height: 10px; border-radius: 50%; background: #334155; }
        .code-success { color: #10b981; }

        .reveal-up {
          opacity: 0;
          transform: translateY(40px);
          animation: revealUp 1s var(--transition-main) forwards;
        }
        @keyframes revealUp { to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 1024px) {
          .hero-inner.split { grid-template-columns: 1fr; text-align: center; }
          .hero-text-content p { margin: 0 auto 48px; }
          .hero-actions { justify-content: center; }
          .hero-stats { justify-content: center; }
          .hero-visual-v5 { display: none; }
          .bento-layout { grid-template-columns: 1fr; }
          .bento-wide { grid-column: span 1; }
        }
      `}} />
        </div>
    );
};

export default Landing;