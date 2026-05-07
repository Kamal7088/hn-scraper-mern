import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Zap, Bookmark, Shield } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <section className="hero fade-in">
        <div className="hero-content">
          <div className="badge">
            <Zap size={14} />
            <span>Real-time HN Scraper</span>
          </div>
          <h1>
            Discover the <span className="text-gradient">Top Stories</span> from Hacker News
          </h1>
          <p>
            Experience Hacker News like never before. A premium, minimal interface 
            to browse, save, and manage the best in tech news.
          </p>
          <div className="hero-btns">
            <Link to="/register" className="btn btn-primary btn-lg">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link to="/login" className="btn btn-outline btn-lg">
              Login to Account
            </Link>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-card">
            <div className="visual-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="visual-body">
              <div className="skeleton skeleton-text" style={{ width: '90%' }}></div>
              <div className="skeleton skeleton-text" style={{ width: '70%' }}></div>
              <div className="skeleton skeleton-meta" style={{ width: '40%' }}></div>
              <div style={{ height: '20px' }}></div>
              <div className="skeleton skeleton-text" style={{ width: '85%' }}></div>
              <div className="skeleton skeleton-text" style={{ width: '60%' }}></div>
              <div className="skeleton skeleton-meta" style={{ width: '35%' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="features container">
        <div className="feature-card glass">
          <Globe className="feature-icon" color="var(--primary)" />
          <h3>Real-time Scraping</h3>
          <p>Always stay updated with the latest top 10 stories directly from Y Combinator.</p>
        </div>
        <div className="feature-card glass">
          <Bookmark className="feature-icon" color="var(--primary)" />
          <h3>Smart Bookmarks</h3>
          <p>Save your favorite articles to your personal collection with a single click.</p>
        </div>
        <div className="feature-card glass">
          <Shield className="feature-icon" color="var(--primary)" />
          <h3>Secure Access</h3>
          <p>JWT-based authentication ensures your data and favorites are always private.</p>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .landing-container {
          padding-top: 40px;
        }
        
        .hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          min-height: 70vh;
          max-width: 1200px;
          margin: 0 auto 100px;
          padding: 0 20px;
        }
        
        .hero-content {
          flex: 1;
        }
        
        .hero-content h1 {
          font-size: 64px;
          line-height: 1.1;
          margin-bottom: 24px;
          font-weight: 800;
          letter-spacing: -2px;
          color: var(--text-primary);
        }
        
        .hero-content p {
          font-size: 20px;
          color: var(--text-secondary);
          margin-bottom: 40px;
          line-height: 1.6;
          max-width: 550px;
        }
        
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(37, 99, 235, 0.08);
          color: var(--primary);
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
          border: 1px solid rgba(37, 99, 235, 0.15);
        }
        
        .hero-btns {
          display: flex;
          gap: 16px;
        }
        
        .btn-lg {
          padding: 16px 32px;
          font-size: 16px;
          border-radius: 12px;
        }
        
        .hero-visual {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: center;
        }
        
        .visual-card {
          width: 100%;
          max-width: 450px;
          padding: 32px;
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid var(--glass-border);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
        }
        
        .visual-header {
          display: flex;
          gap: 8px;
          margin-bottom: 32px;
        }
        
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .red { background: #fee2e2; border: 1.5px solid #ef4444; }
        .yellow { background: #fef3c7; border: 1.5px solid #f59e0b; }
        .green { background: #dcfce7; border: 1.5px solid #10b981; }
        
        .text-gradient {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 120px;
        }
        
        .feature-card {
          padding: 48px 32px;
          text-align: center;
          transition: var(--transition);
          border-radius: 24px;
        }
        
        .feature-card:hover {
          transform: translateY(-12px);
          border-color: var(--primary);
          box-shadow: var(--shadow-lg);
        }
        
        .feature-icon {
          width: 56px;
          height: 56px;
          margin-bottom: 24px;
          padding: 12px;
          background: rgba(37, 99, 235, 0.05);
          border-radius: 16px;
        }
        
        .feature-card h3 {
          font-size: 22px;
          margin-bottom: 16px;
          color: var(--text-primary);
        }
        
        .feature-card p {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 15px;
        }
        
        @media (max-width: 1024px) {
          .hero {
            flex-direction: column;
            text-align: center;
            padding-top: 20px;
            margin-bottom: 60px;
          }
          
          .hero-content h1 {
            font-size: 48px;
          }
          
          .hero-content p {
            margin: 0 auto 40px;
          }
          
          .hero-btns {
            justify-content: center;
          }
          
          .hero-visual {
            display: none;
          }
          
          .features {
            grid-template-columns: 1fr;
            padding: 0 20px;
          }
        }
      `}} />
    </div>
  );
};

export default LandingPage;
