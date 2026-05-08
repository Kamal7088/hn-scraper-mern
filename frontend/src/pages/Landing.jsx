import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Bookmark, Shield, Cpu, Globe, Rocket, Terminal, Layers } from 'lucide-react';

const Landing = () => {
    return (
        <div className="landing-wrapper">
            <div className="grid-bg"></div>
            <div className="bg-glow"></div>

            {/* Hero Section */}
            <header className="hero-v4">
                <div className="hero-inner container">
                    <div className="hero-text-content">
                        <div className="badge-v4 reveal">
                            <Layers size={14} />
                            <span>Engine v4.0 • Enterprise Ready</span>
                        </div>
                        <h1 className="reveal" style={{ animationDelay: '0.1s' }}>
                            Technical Intel <br />
                            <span className="accent-text">Without Limits.</span>
                        </h1>
                        <p className="reveal" style={{ animationDelay: '0.2s' }}>
                            The most advanced data extraction platform for the global 
                            technical community. Sub-millisecond latency. Zero noise. 
                            Pure engineering intelligence.
                        </p>
                        <div className="hero-actions reveal" style={{ animationDelay: '0.3s' }}>
                            <Link to="/register" className="btn-v4 btn-v4-primary">
                                Launch Console <ArrowRight size={20} />
                            </Link>
                            <Link to="/login" className="btn-v4 btn-v4-ghost">
                                Secure Access
                            </Link>
                        </div>
                    </div>

                    <div className="hero-image-container reveal" style={{ animationDelay: '0.4s' }}>
                        <div className="image-wrapper">
                            <img 
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
                                alt="Advanced Tech Infrastructure" 
                                className="hero-img-pro"
                            />
                            <div className="image-overlay"></div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Bento Grid Features */}
            <section className="bento-section container">
                <h2 className="reveal">Precision Engineering.</h2>
                <div className="bento-layout">
                    <div className="bento-card bento-wide reveal" style={{ animationDelay: '0.5s' }}>
                        <div className="card-header">
                            <Terminal size={24} />
                            <span>System Log v4.0</span>
                        </div>
                        <h3>Deep Extraction</h3>
                        <p>Our proprietary node-mesh bypasses standard API limits to deliver raw, unfiltered data streams directly to your console.</p>
                        <div className="code-snippet">
                            <code>{`$ intel-fetch --target hn --priority high`}</code>
                            <br />
                            <code style={{ color: 'var(--primary)' }}>{`[OK] 128 packets received in 0.005s`}</code>
                        </div>
                    </div>

                    <div className="bento-card reveal" style={{ animationDelay: '0.6s' }}>
                        <Shield size={24} color="var(--primary)" />
                        <h3>Quantum Shield</h3>
                        <p>Military-grade encryption for your personalized intel vault.</p>
                    </div>

                    <div className="bento-card reveal" style={{ animationDelay: '0.7s' }}>
                        <Zap size={24} color="var(--primary)" />
                        <h3>Flash Sync</h3>
                        <p>Automatic real-time synchronization across all your nodes.</p>
                    </div>

                    <div className="bento-card bento-wide reveal" style={{ animationDelay: '0.8s' }}>
                        <div className="stats-row">
                            <div className="stat">
                                <h4>0.1ms</h4>
                                <span>Sync</span>
                            </div>
                            <div className="stat">
                                <h4>100%</h4>
                                <span>Signal</span>
                            </div>
                            <div className="stat">
                                <h4>Pro</h4>
                                <span>Tier</span>
                            </div>
                        </div>
                        <h3>Infrastructure Built for Speed.</h3>
                        <p>Leverage the power of our global distributed network to stay ahead of every technical trend.</p>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        :root {
          --primary: #06b6d4; /* Electric Cyan */
          --primary-soft: rgba(6, 182, 212, 0.1);
          --text: #0f172a;
          --text-muted: #475569;
          --bg: #ffffff;
          --card-bg: #f8fafc;
          --border: #e2e8f0;
          --transition-v4: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .landing-wrapper {
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        .grid-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.2;
          z-index: -2;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
        }

        .bg-glow {
          position: fixed;
          top: -20%;
          right: -10%;
          width: 1000px;
          height: 1000px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%);
          z-index: -1;
          pointer-events: none;
        }

        .hero-v4 {
          padding: 140px 0 160px;
          position: relative;
          z-index: 1;
        }

        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 80px;
        }

        .badge-v4 {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px;
          background: white;
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 40px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          color: var(--primary);
        }

        .hero-text-content h1 {
          font-size: 100px;
          line-height: 0.85;
          font-weight: 900;
          letter-spacing: -6px;
          margin-bottom: 40px;
          color: var(--text);
        }

        .accent-text {
          color: var(--primary);
          background: linear-gradient(135deg, var(--primary), #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-text-content p {
          font-size: 24px;
          line-height: 1.5;
          color: var(--text-muted);
          margin-bottom: 56px;
          max-width: 620px;
          font-weight: 500;
          letter-spacing: -0.5px;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
        }

        .btn-v4 {
          padding: 20px 40px;
          border-radius: 20px;
          font-weight: 900;
          font-size: 18px;
          text-decoration: none;
          transition: var(--transition-v4);
          display: inline-flex;
          align-items: center;
          gap: 12px;
          letter-spacing: -0.5px;
        }

        .btn-v4-primary {
          background: var(--text);
          color: white;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
        }

        .btn-v4-primary:hover {
          background: var(--primary);
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 30px 60px -15px var(--primary-soft);
        }

        .btn-v4-ghost {
          background: white;
          border: 2px solid var(--border);
          color: var(--text);
        }

        .btn-v4-ghost:hover {
          border-color: var(--text);
          background: #f8fafc;
          transform: translateY(-8px);
        }

        .hero-image-container {
          position: relative;
          z-index: 10;
        }

        .image-wrapper {
          position: relative;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 50px 100px -20px rgba(0,0,0,0.3);
          transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);
          transition: var(--transition-v4);
        }

        .image-wrapper:hover {
          transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05);
        }

        .hero-img-pro {
          width: 100%;
          display: block;
        }

        .image-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(135deg, var(--primary-soft), transparent);
          pointer-events: none;
        }

        /* Bento Section */
        .bento-section {
          padding: 100px 0 200px;
        }

        .bento-section h2 {
          font-size: 64px;
          font-weight: 900;
          letter-spacing: -4px;
          margin-bottom: 80px;
          text-align: center;
        }

        .bento-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(320px, auto);
          gap: 32px;
        }

        .bento-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: 40px;
          padding: 60px;
          transition: var(--transition-v4);
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }

        .bento-card:hover {
          transform: translateY(-15px);
          border-color: var(--primary);
          box-shadow: 0 50px 100px -25px rgba(0,0,0,0.1);
        }

        .bento-wide {
          grid-column: span 2;
        }

        .bento-card h3 {
          font-size: 32px;
          font-weight: 900;
          margin-bottom: 20px;
          letter-spacing: -1.5px;
        }

        .bento-card p {
          font-size: 18px;
          color: var(--text-muted);
          font-weight: 500;
          line-height: 1.6;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
          color: var(--primary);
          font-weight: 900;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 2px;
        }

        .code-snippet {
          margin-top: 40px;
          background: #0f172a;
          padding: 30px;
          border-radius: 20px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 16px;
          color: #f8fafc;
        }

        .stats-row {
          display: flex;
          gap: 60px;
          margin-bottom: 40px;
        }

        .stat h4 {
          font-size: 56px;
          font-weight: 900;
          color: var(--text);
          letter-spacing: -3px;
        }

        .stat span {
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 900;
          color: var(--text-muted);
          letter-spacing: 1px;
        }

        /* Entrance Animation */
        .reveal {
          opacity: 1;
          transform: translateY(0);
          animation: reveal-v4 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes reveal-v4 {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-text-content p { margin: 0 auto 56px; }
          .hero-actions { justify-content: center; }
          .hero-text-content h1 { font-size: 64px; }
          .bento-layout { grid-template-columns: 1fr; }
          .bento-wide { grid-column: span 1; }
          .hero-image-container { display: none; }
        }
      `}} />
        </div>
    );
};

export default Landing;
