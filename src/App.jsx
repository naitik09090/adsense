import './App.css'
import AdComponent from './components/AdComponent'
import Blog from './components/Blog'

function App() {
  return (
    <div className="app-main">
      <nav className="navbar glass">
        <div className="container nav-content">
          <div className="logo">Adsense<span>Hub</span></div>
          <div className="nav-links">
            <a href="#blog">Blog</a>
            <a href="#ads">Ads</a>
            <button className="cta-btn">Connect</button>
          </div>
        </div>
      </nav>

      <section className="billboard-ad">
        <div className="container" style={{ paddingTop: '6rem' }}>
          <div className="glass" style={{ padding: '1rem', textAlign: 'center' }}>
            <span className="ad-label" style={{ fontSize: '0.6rem', color: 'var(--text-dim)', textAlign: 'left', display: 'block' }}>Sponsored Message</span>
            <AdComponent />
          </div>
        </div>
      </section>

      <main id="blog">
        <Blog />
      </main>

      <footer className="glass">
        <div className="container footer-content">
          <p>&copy; 2026 AdsenseHub. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
