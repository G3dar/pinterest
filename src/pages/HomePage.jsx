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
    images.forEach((img, idx) => {
      cols[idx % columns].push(img);
    });
    return cols;
  };

  const imageColumns = distributeImages();

  return (
    <div className="home-page">
      {/* Header */}
      <header className="home-header">
        <div className="header-left">
          <div className="logo">
            <svg height="32" width="32" viewBox="0 0 24 24">
              <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12" fill="#e60023"/>
            </svg>
            <span className="logo-text">Pinterest</span>
          </div>
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
