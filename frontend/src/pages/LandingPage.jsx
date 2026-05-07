import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Bookmark, Shield, Cpu, TrendingUp, Layers, Users } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="bg-mesh"></div>
      
      <section className="hero">
        <div className="hero-content reveal">
          <div className="badge">
            <Zap size={14} />
            <span>Version 2.0 • Pro Edition</span>
          </div>
          <h1>
            Signal. <br />
            <span className="text-gradient">Pure Signal.</span>
          </h1>
          <p>
            We've stripped away the noise. The most sophisticated Hacker News 
            client ever built—designed for the 0.1% of technical thinkers.
          </p>
          <div className="hero-btns">
            <Link to="/register" className="btn btn-primary btn-lg">
              Initialize Account <ArrowRight size={18} />
            </Link>
            <Link to="/login" className="btn btn-outline btn-lg">
              Access Vault
            </Link>
          </div>
        </div>
      </section>

      <section className="bento-grid container">
        <div className="bento-item bento-large card-premium reveal" style={{ animationDelay: '0.2s' }}>
          <div className="feature-icon-wrapper-expert">
            <Cpu size={32} color="var(--primary)" />
          </div>
          <div style={{ height: '20px' }}></div>
          <h3>The Scraper Engine</h3>
          <p>A distributed node-based architecture that bypasses latency. Get the news before it's even news.</p>
          <div className="live-status">
            <span className="dot-live"></span>
            <span>Scanning 1,000+ HN Nodes...</span>
          </div>
        </div>

        <div className="bento-item card-premium reveal" style={{ animationDelay: '0.4s' }}>
          <TrendingUp size={32} color="var(--primary)" />
          <div style={{ height: '20px' }}></div>
          <h3>Velocity</h3>
          <p>Real-time trend analysis on every story.</p>
        </div>

        <div className="bento-item card-premium reveal" style={{ animationDelay: '0.6s' }}>
          <Bookmark size={32} color="var(--primary)" />
          <div style={{ height: '20px' }}></div>
          <h3>Persistence</h3>
          <p>Your vault, secured by 256-bit JWT.</p>
        </div>

        <div className="bento-item bento-large card-premium reveal" style={{ animationDelay: '0.8s' }}>
          <div className="flex-row-bento">
            <div className="stat-item">
              <h4>10ms</h4>
              <p>Latency</p>
            </div>
            <div className="stat-item">
              <h4>100%</h4>
              <p>Signal</p>
            </div>
            <div className="stat-item">
              <h4>Unlimited</h4>
              <p>Knowledge</p>
            </div>
          </div>
          <div style={{ height: '32px' }}></div>
          <h3>Enterprise Infrastructure</h3>
          <p>Built on the same architecture used by the world's leading technical intelligence agencies.</p>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .landing-container {
          padding-top: 80px;
          padding-bottom: 120px;
        }

        .hero {
          text-align: left;
          min-height: 70vh;
          max-width: 1200px;
          margin: 0 auto 120px;
          padding: 0 32px;
          display: flex;
          align-items: center;
        }
        
        .hero-content h1 {
          font-size: 112px;
          line-height: 0.85;
          margin-bottom: 32px;
          font-weight: 900;
          letter-spacing: -6px;
          color: var(--text-primary);
        }
        
        .hero-content p {
          font-size: 24px;
          color: var(--text-secondary);
          margin-bottom: 48px;
          line-height: 1.4;
          max-width: 650px;
          font-weight: 600;
          letter-spacing: -0.5px;
        }
        
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          background: #f8fafc;
          color: var(--text-primary);
          border-radius: 12px;
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 32px;
          border: 1px solid #e2e8f0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .hero-btns {
          display: flex;
          gap: 20px;
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .bento-grid h3 {
          font-size: 28px;
          margin-bottom: 16px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .bento-grid p {
          font-size: 17px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .live-status {
          margin-top: 32px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 700;
          color: var(--primary);
        }

        .dot-live {
          width: 10px;
          height: 10px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        .flex-row-bento {
          display: flex;
          gap: 48px;
        }

        .stat-item h4 {
          font-size: 40px;
          font-weight: 900;
          color: var(--text-primary);
          letter-spacing: -2px;
        }

        .stat-item p {
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 1px;
          font-weight: 800;
        }
        
        @media (max-width: 1024px) {
          .hero-content h1 {
            font-size: 72px;
            letter-spacing: -3px;
          }
          
          .hero {
            text-align: center;
            justify-content: center;
          }

          .hero-btns {
            justify-content: center;
          }

          .flex-row-bento {
            flex-direction: column;
            gap: 24px;
          }
        }
      `}} />
    </div>
  );
};

export default LandingPage;
