import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Terminal, Activity, Search, Cpu, Globe, Lock, BarChart3 } from 'lucide-react';

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div className="blueprint-grid"></div>
      <div className="radial-vignette"></div>

      {/* Hero Section */}
      <header className="hero-v4">
        <div className="hero-inner container centered">
          <div className="hero-text-content">
            <div className="system-badge reveal-up">
              <span className="status-indicator"></span>
              <span className="terminal-text">SYSTEM_READY: v4.0.2</span>
            </div>
            <h1 className="reveal-up" style={{ animationDelay: '0.1s' }}>
              Precision Data <br />
              <span className="outline-text">Harvesting</span>
            </h1>
            <p className="reveal-up" style={{ animationDelay: '0.2s' }}>
              Advanced scraping infrastructure for high-frequency data extraction.
              Built for developers who require zero-latency intelligence.
            </p>
            <div className="hero-actions reveal-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/register" className="btn-primary">
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link to="/" className="btn-secondary">
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Bento Grid Features */}
      <section className="bento-section container">
        <div className="bento-layout">

          {/* Feature 1: The Firehose (Main Card) */}
          <div className="bento-card col-2 glass-panel reveal-up" style={{ animationDelay: '0.4s' }}>
            <div className="scan-line"></div>
            <div className="card-top">
              <Terminal size={18} className="text-primary" />
              <span className="card-label">CORE_ENGINE / QUANTUM_STREAM</span>
            </div>
            <div className="card-body-split">
              <div className="text-side">
                <h3>High-Velocity Pipe</h3>
                <p>Bypass standard rate limits with autonomous node rotation and residential proxy pooling.</p>
              </div>
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="t-dots"><span></span><span></span><span></span></div>
                  <div className="t-title">bash — 80x24</div>
                </div>
                <div className="terminal-content">
                  <code className="c-blue">root@engine:~$</code> <code>harvest --target=social</code>
                  <code className="c-green">[OK] 1,402 items/sec extracted</code>
                  <code className="c-dim">Latency: 14ms</code>
                  <div className="loading-bar-mini"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Analysis (The "Smart" Card) */}
          <div className="bento-card glass-panel reveal-up" style={{ animationDelay: '0.5s' }}>
            <div className="card-top">
              <Search size={18} className="text-primary" />
              <span className="card-label">AI_PARSER</span>
            </div>
            <div className="feature-visual">
              <div className="code-blob">{"{ 'price': '$120' }"}</div>
              <ArrowRight size={14} className="c-dim" />
              <div className="code-blob highlight">{"{ price: 120.00 }"}</div>
            </div>
            <h3>Auto-Schema</h3>
            <p>Raw HTML to structured JSON. Instantly.</p>
          </div>

          {/* Feature 3: Security (The "Shield" Card) */}
          <div className="bento-card glass-panel reveal-up" style={{ animationDelay: '0.6s' }}>
            <div className="card-top">
              <Lock size={18} className="text-primary" />
              <span className="card-label">ENCRYPTION</span>
            </div>
            <div className="shield-animation">
              <Shield size={40} className="shield-icon" />
              <div className="pulse-rings"></div>
            </div>
            <h3>Stealth Mode</h3>
            <p>Fingerprint randomization to keep your scrapers invisible.</p>
          </div>

          {/* Feature 4: Global Network (The "Map" Card) */}
          <div className="bento-card col-2 glass-panel reveal-up" style={{ animationDelay: '0.7s' }}>
            <div className="card-top">
              <Globe size={18} className="text-primary" />
              <span className="card-label">DISTRIBUTION</span>
            </div>
            <div className="map-visual">
              <div className="map-point p1"></div>
              <div className="map-point p2"></div>
              <div className="map-point p3"></div>
              <div className="map-line"></div>
            </div>
            <div className="card-body-bottom">
              <h3>Global Exit Nodes</h3>
              <p>Route requests through 12+ regions to access localized content and bypass geo-blocks.</p>
            </div>
          </div>


        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          --bg-dark: #070708;
          --grid-line: rgba(255, 255, 255, 0.03);
          --grid-line-bold: rgba(255, 255, 255, 0.07);
          --primary: #ff6600;
          --primary-glow: rgba(255, 102, 0, 0.3);
          --text-main: #f1f5f9;
          --text-muted: #64748b;
          --border: rgba(255, 255, 255, 0.08);
          --glass: rgba(15, 15, 17, 0.7);
        }

        .landing-wrapper {
          background-color: var(--bg-dark);
          color: var(--text-main);
          min-height: 100vh;
          position: relative;
          font-family: 'Inter', -apple-system, sans-serif;
          overflow-x: hidden;
        }

        /* --- BACKGROUNDS --- */
        .blueprint-grid {
          position: fixed; inset: 0; background-size: 40px 40px;
          background-image: linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px);
          z-index: 0;
        }
        .blueprint-grid::after {
          content: ''; position: absolute; inset: 0; background-size: 200px 200px;
          background-image: linear-gradient(to right, var(--grid-line-bold) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--grid-line-bold) 1px, transparent 1px);
        }
        .radial-vignette {
          position: fixed; inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 0%, var(--bg-dark) 85%);
          z-index: 1; pointer-events: none;
        }

        /* --- HERO --- */
        .hero-v4 { padding: 160px 0 100px; position: relative; z-index: 2; }
        .hero-inner.centered { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .hero-text-content h1 {
          font-size: clamp(54px, 10vw, 110px);
          font-weight: 900; line-height: 0.9; letter-spacing: -5px; margin-bottom: 24px;
        }
        .outline-text { color: transparent; -webkit-text-stroke: 1.5px rgba(255,255,255,0.2); }
        .system-badge {
          display: flex; align-items: center; gap: 10px; background: #111;
          border: 1px solid var(--border); padding: 8px 16px; border-radius: 100px; margin-bottom: 32px;
        }
        .status-indicator { 
          width: 8px; height: 8px; background: var(--primary); border-radius: 50%; 
          box-shadow: 0 0 12px var(--primary); animation: pulse 2s infinite;
        }
        @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }

        /* --- BENTO GRID LAYOUT --- */
        .bento-section { padding: 40px 20px 120px; position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; }
        .bento-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(280px, auto);
          gap: 20px;
        }

        .glass-panel {
          position: relative;
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 30px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .glass-panel:hover {
          border-color: rgba(255, 102, 0, 0.4);
          background: rgba(20, 20, 25, 0.8);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(255,102,0,0.05);
        }

        .col-2 { grid-column: span 2; }

        /* --- CARD ELEMENTS --- */
        .card-top { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .card-label { font-family: monospace; font-size: 11px; color: var(--text-muted); letter-spacing: 2px; }
        h3 { font-size: 24px; font-weight: 800; margin-bottom: 12px; letter-spacing: -0.5px; }
        p { color: var(--text-muted); font-size: 15px; line-height: 1.6; }

        /* --- ANIMATED ASSETS --- */
        .scan-line {
          position: absolute; top: 0; left: 0; width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          opacity: 0.2; animation: scan 4s linear infinite;
        }
        @keyframes scan { 0% { top: 0%; } 100% { top: 100%; } }

        .terminal-window {
          background: #000; border: 1px solid #1e293b; border-radius: 12px;
          font-family: monospace; flex: 1; min-width: 250px;
        }
        .terminal-header { background: #111; padding: 10px; display: flex; align-items: center; justify-content: space-between; }
        .t-dots { display: flex; gap: 6px; }
        .t-dots span { width: 8px; height: 8px; border-radius: 50%; background: #334155; }
        .t-title { font-size: 10px; color: #475569; }
        .terminal-content { padding: 20px; font-size: 12px; }
        
        .loading-bar-mini {
          height: 4px; background: #1e293b; width: 100%; margin-top: 15px; border-radius: 10px; overflow: hidden;
        }
        .loading-bar-mini::after {
          content: ''; display: block; height: 100%; width: 40%; background: var(--primary);
          animation: load 2s infinite;
        }
        @keyframes load { 0% { transform: translateX(-100%); } 100% { transform: translateX(300%); } }

        .feature-visual { display: flex; align-items: center; gap: 10px; margin: 20px 0; }
        .code-blob { background: #161b22; padding: 10px; border-radius: 8px; font-family: monospace; font-size: 12px; color: #8b949e; }
        .code-blob.highlight { color: #ff6600; border: 1px solid rgba(255,102,0,0.2); }

        .shield-animation { position: relative; height: 100px; display: flex; align-items: center; justify-content: center; }
        .shield-icon { color: var(--primary); z-index: 2; filter: drop-shadow(0 0 10px var(--primary)); }
        .pulse-rings {
          position: absolute; width: 60px; height: 60px; border: 1px solid var(--primary);
          border-radius: 50%; animation: ring-pulse 3s infinite; opacity: 0;
        }
        @keyframes ring-pulse { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(2.5); opacity: 0; } }

        .map-visual { position: relative; height: 120px; background: rgba(255,255,255,0.02); border-radius: 10px; margin-bottom: 20px; }
        .map-point { position: absolute; width: 6px; height: 6px; background: var(--primary); border-radius: 50%; box-shadow: 0 0 10px var(--primary); }
        .p1 { top: 20%; left: 20%; } .p2 { top: 60%; left: 80%; } .p3 { top: 40%; left: 50%; }
        .map-line {
          position: absolute; top: 23%; left: 23%; width: 60%; height: 40%; 
          border-top: 1px dashed rgba(255,102,0,0.3); border-left: 1px dashed rgba(255,102,0,0.3);
          border-radius: 50% 0 0 0;
        }

        .big-stat { display: flex; align-items: baseline; gap: 4px; margin-top: 10px; }
        .stat-value { font-size: 64px; font-weight: 900; color: #fff; }
        .stat-pct { color: var(--primary); font-size: 24px; font-weight: 800; }
        
        .mini-graph { display: flex; align-items: flex-end; gap: 4px; height: 40px; margin-top: 20px; }
        .bar { flex: 1; background: rgba(255,255,255,0.1); border-radius: 2px; transition: height 0.3s; }
        .bar:hover { background: var(--primary); }

        .card-body-split { display: flex; gap: 30px; align-items: center; flex-wrap: wrap; }
        .text-side { flex: 1; }

        /* --- BUTTONS --- */
        .hero-actions { display: flex; gap: 15px; margin-top: 10px; }
        .btn-primary {
          background: #fff; color: #000; padding: 16px 32px; border-radius: 12px;
          font-weight: 800; text-decoration: none; display: flex; align-items: center; gap: 10px;
          transition: all 0.3s;
        }
        .btn-primary:hover { background: var(--primary); color: #fff; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(255,102,0,0.2); }
        .btn-secondary {
          background: rgba(255,255,255,0.03); color: #fff; border: 1px solid var(--border);
          padding: 16px 32px; border-radius: 12px; font-weight: 600; text-decoration: none; transition: all 0.3s;
        }
        .btn-secondary:hover { background: rgba(255,255,255,0.08); }

        /* --- ANIMATIONS --- */
        .reveal-up { opacity: 0; transform: translateY(30px); animation: reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        @keyframes reveal { to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 900px) {
          .bento-layout { grid-template-columns: 1fr; }
          .col-2 { grid-column: span 1; }
          .hero-v4 { padding-top: 100px; }
        }
      `}} />
    </div>
  );
};

export default Landing;