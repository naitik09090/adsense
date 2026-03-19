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

      <main id="blog">
        <Blog />
      </main>

      <section id="ads" className="ad-section">
        <div className="container">
          <div className="ad-box glass">
            <span className="ad-label">Sponsored</span>
            <AdComponent />
          </div>
        </div>
      </section>

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
