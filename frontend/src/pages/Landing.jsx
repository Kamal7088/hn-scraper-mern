import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Bookmark, Shield, Cpu, Globe, Rocket, Terminal } from 'lucide-react';

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div className="bg-glow"></div>
      
      {/* Hero Section */}
      <header className="hero-v3">
        <div className="hero-inner container">
          <div className="hero-text-content">
            <div className="badge-v3 reveal">
              <span className="dot"></span>
              <span>Proprietary Scraper Engine v4.0</span>
            </div>
            <h1 className="reveal" style={{ animationDelay: '0.1s' }}>
              The Future of <br />
              <span className="accent-text">Tech Intel.</span>
            </h1>
            <p className="reveal" style={{ animationDelay: '0.2s' }}>
              We don't just scrape Hacker News. We analyze, filter, and deliver 
              high-signal intelligence for the world's most ambitious engineers.
            </p>
            <div className="hero-actions reveal" style={{ animationDelay: '0.3s' }}>
              <Link to="/register" className="btn btn-primary" style={{ borderRadius: '14px', padding: '12px 24px' }}>
            <span>Initialize System</span>
            <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Link>
              <Link to="/login" className="btn-v3 btn-v3-ghost">
                Secure Login
              </Link>
            </div>
          </div>
          
          <div className="hero-visual-container reveal" style={{ animationDelay: '0.4s' }}>
            <div className="data-blob">
              <div className="blob-ring"></div>
              <div className="blob-ring"></div>
              <div className="blob-ring"></div>
              <div className="blob-core">
                <Rocket size={48} color="white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Bento Grid Features */}
      <section className="bento-section container">
        <h2 className="reveal">Engineered for Excellence.</h2>
        <div className="bento-layout">
          <div className="bento-card bento-wide reveal" style={{ animationDelay: '0.5s' }}>
            <div className="card-header">
              <Terminal size={24} />
              <span>Real-time Stream</span>
            </div>
            <h3>Quantum Scraping</h3>
            <p>Our engine connects directly to the YC firehose with sub-10ms latency. No middleman, no delays.</p>
            <div className="code-snippet">
              <code>{`> hn-scraper --engine quantum --force`}</code>
              <br />
              <code style={{ color: 'var(--primary)' }}>{`[SUCCESS] 50 stories extracted in 0.002s`}</code>
            </div>
          </div>

          <div className="bento-card reveal" style={{ animationDelay: '0.6s' }}>
            <Shield size={24} color="var(--primary)" />
            <h3>Secure Vault</h3>
            <p>Your reading history is encrypted and persistent.</p>
          </div>

          <div className="bento-card reveal" style={{ animationDelay: '0.7s' }}>
            <Zap size={24} color="var(--primary)" />
            <h3>Ultra High Signal</h3>
            <p>Smart filters remove the noise, keeping only the code.</p>
          </div>

          <div className="bento-card bento-wide reveal" style={{ animationDelay: '0.8s' }}>
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
            <h3>Enterprise Scale</h3>
            <p>Designed to handle millions of queries without breaking a sweat. Professional grade news consumption.</p>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --primary: #ff6600;
          --primary-soft: rgba(255, 102, 0, 0.1);
          --text: #0f172a;
          --text-muted: #64748b;
          --bg: #ffffff;
          --card-bg: #f8fafc;
          --border: #e2e8f0;
          --transition-v3: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .landing-wrapper {
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        .bg-glow {
          position: fixed;
          top: -20%;
          right: -10%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(255, 102, 0, 0.05) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }

        .hero-v3 {
          padding: 120px 0 160px;
          position: relative;
          z-index: 1;
        }

        .hero-inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: center;
          gap: 60px;
        }

        .badge-v3 {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          background: white;
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 32px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }

        .badge-v3 .dot {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary);
          animation: pulse-v3 2s infinite;
        }

        @keyframes pulse-v3 {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        .hero-text-content h1 {
          font-size: 96px;
          line-height: 0.9;
          font-weight: 900;
          letter-spacing: -5px;
          margin-bottom: 32px;
          color: var(--text);
        }

        .accent-text {
          color: var(--primary);
          background: linear-gradient(90deg, var(--primary), #ff9800);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-text-content p {
          font-size: 20px;
          line-height: 1.6;
          color: var(--text-muted);
          margin-bottom: 48px;
          max-width: 580px;
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
        }

        .btn-v3 {
          padding: 18px 36px;
          border-radius: 16px;
          font-weight: 800;
          font-size: 16px;
          text-decoration: none;
          transition: var(--transition-v3);
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .btn-v3-primary {
          background: var(--text);
          color: white;
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.2);
        }

        .btn-v3-primary:hover {
          background: var(--primary);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -10px var(--primary-soft);
        }

        .btn-v3-ghost {
          background: transparent;
          border: 2px solid var(--border);
          color: var(--text);
        }

        .btn-v3-ghost:hover {
          border-color: var(--text);
          background: #f8fafc;
        }

        /* Hero Visual Animation */
        .hero-visual-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .data-blob {
          width: 400px;
          height: 400px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blob-core {
          width: 120px;
          height: 120px;
          background: var(--primary);
          border-radius: 35% 65% 70% 30% / 30% 30% 70% 70%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          animation: morph-v3 10s ease-in-out infinite alternate;
          box-shadow: 0 20px 50px var(--primary-soft);
        }

        .blob-ring {
          position: absolute;
          border: 2px solid var(--border);
          border-radius: 50%;
          animation: rotate-v3 15s linear infinite;
        }

        .blob-ring:nth-child(1) { width: 300px; height: 300px; border-style: dashed; opacity: 0.5; }
        .blob-ring:nth-child(2) { width: 350px; height: 350px; opacity: 0.3; animation-duration: 25s; }
        .blob-ring:nth-child(3) { width: 250px; height: 250px; opacity: 0.8; border-color: var(--primary-soft); }

        @keyframes morph-v3 {
          0% { border-radius: 35% 65% 70% 30% / 30% 30% 70% 70%; }
          100% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
        }

        @keyframes rotate-v3 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Bento Section */
        .bento-section {
          padding: 80px 0 160px;
        }

        .bento-section h2 {
          font-size: 56px;
          font-weight: 900;
          letter-spacing: -3px;
          margin-bottom: 60px;
          text-align: center;
        }

        .bento-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(280px, auto);
          gap: 24px;
        }

        .bento-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 32px;
          padding: 48px;
          transition: var(--transition-v3);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .bento-card:hover {
          transform: translateY(-10px);
          background: white;
          border-color: var(--primary);
          box-shadow: 0 40px 80px -20px rgba(0,0,0,0.08);
        }

        .bento-wide {
          grid-column: span 2;
        }

        .bento-card h3 {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 16px;
          letter-spacing: -1px;
        }

        .bento-card p {
          color: var(--text-muted);
          font-weight: 500;
          line-height: 1.6;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          color: var(--primary);
          font-weight: 800;
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 1px;
        }

        .code-snippet {
          margin-top: 32px;
          background: #1e293b;
          padding: 24px;
          border-radius: 16px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          color: white;
        }

        .stats-row {
          display: flex;
          gap: 48px;
          margin-bottom: 32px;
        }

        .stat h4 {
          font-size: 44px;
          font-weight: 900;
          color: var(--text);
          letter-spacing: -2px;
        }

        .stat span {
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 800;
          color: var(--text-muted);
        }

        /* Entrance Animation */
        .reveal {
          opacity: 1;
          transform: translateY(0);
          animation: reveal-v3 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }

        @keyframes reveal-v3 {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-text-content p { margin: 0 auto 48px; }
          .hero-actions { justify-content: center; }
          .hero-text-content h1 { font-size: 64px; }
          .bento-layout { grid-template-columns: 1fr; }
          .bento-wide { grid-column: span 1; }
        }
      `}} />
    </div>
  );
};

export default Landing;
