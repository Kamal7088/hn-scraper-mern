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
        
        <div className="hero-visual fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="visual-wrapper floating">
            <img 
              src="/assets/hero.png" 
              alt="HN Scraper Dashboard" 
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section className="features container">
        <div className="feature-card glass fade-in" style={{ animationDelay: '0.5s' }}>
          <Globe className="feature-icon" color="var(--primary)" />
          <h3>Real-time Scraping</h3>
          <p>Always stay updated with the latest top 10 stories directly from Y Combinator with zero latency.</p>
        </div>
        <div className="feature-card glass fade-in" style={{ animationDelay: '0.7s' }}>
          <Bookmark className="feature-icon" color="var(--primary)" />
          <h3>Personal Library</h3>
          <p>Save your favorite articles to your personal collection and build your knowledge base effortlessly.</p>
        </div>
        <div className="feature-card glass fade-in" style={{ animationDelay: '0.9s' }}>
          <Shield className="feature-icon" color="var(--primary)" />
          <h3>Secure Access</h3>
          <p>State-of-the-art JWT authentication ensures your curated data and favorites remain private and safe.</p>
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
          gap: 80px;
          min-height: 80vh;
          max-width: 1200px;
          margin: 0 auto 60px;
          padding: 40px 20px;
          position: relative;
        }
        
        /* Decorative background elements */
        .hero::before {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%);
          top: -100px;
          left: -100px;
          z-index: -1;
        }
        
        .hero-content {
          flex: 1.2;
          z-index: 1;
        }
        
        .hero-content h1 {
          font-size: 72px;
          line-height: 1.05;
          margin-bottom: 28px;
          font-weight: 800;
          letter-spacing: -3px;
          color: var(--text-primary);
        }
        
        .hero-content p {
          font-size: 22px;
          color: var(--text-secondary);
          margin-bottom: 48px;
          line-height: 1.5;
          max-width: 580px;
          font-weight: 400;
        }
        
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background: #eff6ff;
          color: var(--primary);
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 32px;
          border: 1px solid #dbeafe;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .hero-btns {
          display: flex;
          gap: 20px;
        }
        
        .btn-lg {
          padding: 18px 36px;
          font-size: 17px;
          border-radius: 14px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }
        
        .hero-visual {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: center;
          z-index: 1;
        }
        
        .visual-wrapper {
          width: 100%;
          max-width: 580px;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 40px 80px -15px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.8);
          transform: perspective(1200px) rotateY(-10deg) rotateX(2deg);
          transition: all 0.5s ease;
        }
        
        .visual-wrapper:hover {
          transform: perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1.05);
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.3);
        }
        
        .hero-image {
          width: 100%;
          display: block;
          filter: saturate(1.1);
        }

        @keyframes float {
          0% { transform: translateY(0px) perspective(1200px) rotateY(-10deg) rotateX(2deg); }
          50% { transform: translateY(-25px) perspective(1200px) rotateY(-8deg) rotateX(1deg); }
          100% { transform: translateY(0px) perspective(1200px) rotateY(-10deg) rotateX(2deg); }
        }

        .floating {
          animation: float 7s ease-in-out infinite;
        }
        
        .text-gradient {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 4px rgba(37, 99, 235, 0.1));
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
