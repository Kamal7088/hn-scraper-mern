import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Bookmark, Shield, Cpu } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <section className="hero fade-in">
        <div className="hero-content">
          <div className="badge">
            <Zap size={14} />
            <span>AI-Powered News Extraction</span>
          </div>
          <h1>
            The Intelligent Way to <br />
            <span className="text-gradient">Consume Technology.</span>
          </h1>
          <p>
            An expert-grade interface for high-signal technical news. 
            Automated scraping, secure bookmarking, and a distraction-free 
            reading environment for the modern developer.
          </p>
          <div className="hero-btns">
            <Link to="/register" className="btn btn-primary btn-lg">
              Initialize Account <ArrowRight size={18} />
            </Link>
            <Link to="/login" className="btn btn-outline btn-lg">
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <section className="features container">
        <div className="feature-card glass fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="feature-icon-wrapper">
            <Cpu size={24} color="white" />
          </div>
          <h3>Rapid Extraction</h3>
          <p>Advanced node-based scraping engine fetches the top signal stories in milliseconds.</p>
        </div>
        <div className="feature-card glass fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="feature-icon-wrapper">
            <Bookmark size={24} color="white" />
          </div>
          <h3>Vault Collection</h3>
          <p>Maintain your personal knowledge vault with a persistent and organized bookmark system.</p>
        </div>
        <div className="feature-card glass fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="feature-icon-wrapper">
            <Shield size={24} color="white" />
          </div>
          <h3>Secure Tunnel</h3>
          <p>End-to-end JWT encryption ensures your reading habits and data remain yours alone.</p>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .landing-container {
          padding-top: 60px;
          position: relative;
          overflow: hidden;
        }

        .landing-container::after {
          content: '';
          position: absolute;
          top: -10%;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 102, 0, 0.04) 0%, transparent 70%);
          z-index: -1;
          pointer-events: none;
        }
        
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: 60vh;
          max-width: 900px;
          margin: 0 auto 120px;
          padding: 0 24px;
        }
        
        .hero-content {
          width: 100%;
        }
        
        .hero-content h1 {
          font-size: 84px;
          line-height: 0.95;
          margin-bottom: 32px;
          font-weight: 900;
          letter-spacing: -4px;
          color: var(--text-primary);
        }
        
        .hero-content p {
          font-size: 22px;
          color: var(--text-secondary);
          margin: 0 auto 48px;
          line-height: 1.5;
          max-width: 650px;
          font-weight: 500;
        }
        
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: #f8fafc;
          color: var(--text-primary);
          border-radius: 12px;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 32px;
          border: 1px solid #e2e8f0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .hero-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
        }
        
        .btn-lg {
          padding: 18px 36px;
          font-size: 16px;
          border-radius: 14px;
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 160px;
        }
        
        .feature-card {
          padding: 60px 40px;
          text-align: center;
          border-radius: 32px;
          background: #ffffff;
          border: 1px solid #f1f5f9;
        }
        
        .feature-card:hover {
          transform: translateY(-16px);
          border-color: var(--text-primary);
          box-shadow: var(--shadow-lg);
        }
        
        .feature-icon-wrapper {
          width: 64px;
          height: 64px;
          margin: 0 auto 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary);
          border-radius: 20px;
          box-shadow: 0 15px 30px -10px rgba(255, 102, 0, 0.4);
        }
        
        .feature-card h3 {
          font-size: 24px;
          margin-bottom: 16px;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.5px;
        }
        
        .feature-card p {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 16px;
          font-weight: 500;
        }
        
        @media (max-width: 1024px) {
          .hero-content h1 {
            font-size: 56px;
            letter-spacing: -2px;
          }
          
          .features {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </div>
  );
};

export default LandingPage;
