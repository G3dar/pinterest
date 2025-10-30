import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = ({ images }) => {
  const navigate = useNavigate();
  const [columns, setColumns] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) setColumns(2);
      else if (width < 900) setColumns(3);
      else if (width < 1200) setColumns(4);
      else setColumns(5);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Distribute images into columns for masonry layout
  const distributeImages = () => {
    const cols = Array.from({ length: columns }, () => []);
    if (!images || !Array.isArray(images)) {
      return cols;
    }
    images.forEach((img, idx) => {
      cols[idx % columns].push(img);
    });
    return cols;
  };

  const imageColumns = distributeImages();

  return (
    <div className="home-page">
      {/* Vertical Sidebar */}
      <aside className="vertical-sidebar">
        <div className="sidebar-content">
          {/* Logo at top */}
          <div className="sidebar-logo">
            <svg height="32" width="32" viewBox="0 0 24 24">
              <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12" fill="#e60023"/>
            </svg>
          </div>

          {/* Navigation Icons */}
          <nav className="sidebar-nav">
            <button className="sidebar-icon active" title="Home">
              <svg height="24" width="24" viewBox="0 0 24 24">
                <path d="M12 3L3 10v11h6v-6h6v6h6V10L12 3z" fill="currentColor"/>
              </svg>
            </button>

            <button className="sidebar-icon" title="Explore">
              <svg height="24" width="24" viewBox="0 0 24 24">
                <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 3.5l3.5 7-7-3.5 7-3.5z" fill="currentColor"/>
              </svg>
            </button>

            <button className="sidebar-icon" title="Create">
              <svg height="24" width="24" viewBox="0 0 24 24">
                <path d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-3a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H9a1 1 0 110-2h2V10a1 1 0 011-1z" fill="currentColor"/>
              </svg>
            </button>

            <button className="sidebar-icon" title="Notifications">
              <svg height="24" width="24" viewBox="0 0 24 24">
                <path d="M12 2c1.103 0 2 .897 2 2v.5c2.757 1.077 4.5 3.737 4.5 6.5v3.5l2 2v1h-17v-1l2-2V11c0-2.763 1.743-5.423 4.5-6.5V4c0-1.103.897-2 2-2zm0 20a2 2 0 01-2-2h4a2 2 0 01-2 2z" fill="currentColor"/>
              </svg>
            </button>

            <button className="sidebar-icon has-notification" title="Messages">
              <svg height="24" width="24" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1 1 0 003.8 21.454l3.032-.892A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 110 16 8 8 0 010-16zm-4 7a1 1 0 100 2h8a1 1 0 100-2H8z" fill="currentColor"/>
              </svg>
              <span className="notification-badge">1</span>
            </button>
          </nav>

          {/* Settings at bottom */}
          <button className="sidebar-icon sidebar-settings" title="Settings">
            <svg height="24" width="24" viewBox="0 0 24 24">
              <path d="M12 2c.552 0 1 .448 1 1v.5a8.5 8.5 0 016 6H19.5c.552 0 1 .448 1 1s-.448 1-1 1H19a8.5 8.5 0 01-6 6v.5c0 .552-.448 1-1 1s-1-.448-1-1V17.5a8.5 8.5 0 01-6-6H4.5c-.552 0-1-.448-1-1s.448-1 1-1H5a8.5 8.5 0 016-6V3c0-.552.448-1 1-1zm0 4a6 6 0 100 12 6 6 0 000-12z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </aside>

      {/* Header */}
      <header className="home-header">
        <div className="header-left">
        </div>

        <div className="header-center">
          <nav className="nav-links">
            <a href="#" className="nav-link active">Home</a>
            <a href="#" className="nav-link">Explore</a>
            <a href="#" className="nav-link">Create</a>
          </nav>
        </div>

        <div className="header-right">
          <div className="search-container">
            <svg className="search-icon" height="16" width="16" viewBox="0 0 24 24">
              <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24" fill="currentColor"/>
            </svg>
            <input type="text" placeholder="Search" className="search-input" />
          </div>

          {/* Animated Wrapped Button */}
          <motion.button
            className="wrapped-button"
            onClick={() => navigate('/wrapped/concept')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="button-glow"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="button-text">Your PinWrap 2024</span>
          </motion.button>

          <div className="user-avatar">
            <div className="avatar-circle">A</div>
          </div>
        </div>
      </header>

      {/* Masonry Grid */}
      <div className="masonry-container">
        {imageColumns.map((column, colIndex) => (
          <div key={colIndex} className="masonry-column">
            {column.map((image, imgIndex) => (
              <motion.div
                key={imgIndex}
                className="masonry-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: imgIndex * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <img src={image.url} alt="" loading="lazy" />
                <div className="item-overlay">
                  <button className="save-button">Save</button>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
