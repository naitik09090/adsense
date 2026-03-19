import React, { useState, useMemo } from 'react';
import './Blog.css';
import { blogPosts, categories } from '../data/blogData';
import AdComponent from './AdComponent';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return blogPosts.find(post => post.featured);
  }, []);

  const openPost = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePost = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="container" style={{ position: 'relative' }}>
      <header className="blog-header">
        <h2>Our Insights</h2>
        <p>A collection of thoughts and expert opinions on web development, design systems, and advertising strategy.</p>
      </header>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search articles..."
          className="search-input glass"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <nav className="filter-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

      <div className="blog-grid">
        {/* Featured Post Render */}
        {!searchQuery && selectedCategory === "All" && featuredPost && (
          <div className="post-card glass featured-post" onClick={() => openPost(featuredPost)} style={{ cursor: 'pointer' }}>
            <div className="post-image-container">
              <img src={featuredPost.image} alt={featuredPost.title} className="post-image" loading="lazy" />
              <div className="post-badge">Featured</div>
            </div>
            <div className="post-content">
              <div className="post-meta">
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <div className="post-title">
                <h3>{featuredPost.title}</h3>
              </div>
              <p className="post-excerpt">{featuredPost.excerpt}</p>
              <div className="post-footer">
                <div className="post-author">
                  <div className="author-avatar" />
                  <span className="author-name">{featuredPost.author}</span>
                </div>
                <button className="read-more-btn">Read Full Story →</button>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Only (In-feed ads removed) */}
        {filteredPosts
          .filter(post => searchQuery || selectedCategory !== "All" || !post.featured)
          .map(post => (
            <article key={post.id} className="post-card glass" onClick={() => openPost(post)} style={{ cursor: 'pointer' }}>
              <div className="post-image-container">
                <img src={post.image} alt={post.title} className="post-image" loading="lazy" />
                <div className="post-badge">{post.category}</div>
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="post-title">
                  <h3>{post.title}</h3>
                </div>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-footer">
                  <div className="post-author">
                    <div className="author-avatar" />
                    <span className="author-name">{post.author}</span>
                  </div>
                  <button className="read-more-btn">Read More →</button>
                </div>
              </div>
            </article>
          ))}

        {filteredPosts.length === 0 && (
          <div className="no-posts" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem' }}>
            <p>No articles found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Full Post Modal (Modal ad removed) */}
      {selectedPost && (
        <div className="modal-overlay" onClick={closePost}>
          <div className="modal-content glass" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closePost}>&times;</button>
            <div className="modal-hero">
              <img src={selectedPost.image} alt={selectedPost.title} />
            </div>
            <div className="modal-body">
              <div className="post-meta">
                <span className="post-badge">{selectedPost.category}</span>
                <span>{selectedPost.date}</span>
                <span>{selectedPost.readTime}</span>
              </div>
              <h2>{selectedPost.title}</h2>
              <div className="post-author-large">
                <div className="author-avatar" />
                <div>
                  <div className="author-name">{selectedPost.author}</div>
                  <div className="author-title">Principal Technical Writer</div>
                </div>
              </div>
              <div className="post-full-content">
                <p>{selectedPost.excerpt}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed pretium diam sem ut ipsum. Ut varius tincidunt libero.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
