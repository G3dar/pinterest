import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Phase3Analysis.css';

const Phase3Analysis = ({ colorPalette, keywords, categories }) => {
  const [subPhase, setSubPhase] = useState('colors'); // colors, keywords, categories

  useEffect(() => {
    // Switch to keywords after 3 seconds
    const keywordsTimer = setTimeout(() => setSubPhase('keywords'), 3000);
    // Switch to categories after 6 seconds
    const categoriesTimer = setTimeout(() => setSubPhase('categories'), 6000);

    return () => {
      clearTimeout(keywordsTimer);
      clearTimeout(categoriesTimer);
    };
  }, []);

  return (
    <div className="phase3-analysis">
      <motion.div
        className="analysis-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Analyzing Your Aesthetic
      </motion.div>

      <AnimatePresence mode="wait">
        {subPhase === 'colors' && (
          <motion.div
            key="colors"
            className="colors-subphase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="subphase-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your Color Palette
            </motion.h2>

            <div className="color-circles">
              {colorPalette.map((color, index) => {
                const size = 100 + (color.weight * 100);
                return (
                  <motion.div
                    key={index}
                    className="color-circle-container"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.6,
                      type: 'spring',
                      stiffness: 200
                    }}
                  >
                    <div
                      className="color-circle"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        background: color.hex,
                        boxShadow: `0 8px 32px ${color.hex}66, 0 0 0 4px rgba(255,255,255,0.1)`
                      }}
                    />
                    <motion.div
                      className="color-percentage"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {Math.round(color.weight * 100)}%
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {subPhase === 'keywords' && (
          <motion.div
            key="keywords"
            className="keywords-subphase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="subphase-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your Visual Language
            </motion.h2>

            <div className="keywords-container">
              {keywords.map((keyword, index) => {
                const fontSize = 1 + (keyword.weight * 2);
                return (
                  <motion.div
                    key={index}
                    className="keyword-pill"
                    style={{ fontSize: `${fontSize}rem` }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                      type: 'spring',
                      stiffness: 150
                    }}
                  >
                    {keyword.text}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {subPhase === 'categories' && (
          <motion.div
            key="categories"
            className="categories-subphase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="subphase-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your Top Categories
            </motion.h2>

            <div className="categories-list">
              {categories.slice(0, 5).map((category, index) => (
                <motion.div
                  key={index}
                  className="category-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.5,
                    ease: 'easeOut'
                  }}
                >
                  <div className="category-header">
                    <motion.span
                      className="category-name"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.2 }}
                    >
                      {category.name}
                    </motion.span>
                    <motion.span
                      className="category-percentage"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: index * 0.15 + 0.3,
                        type: 'spring',
                        stiffness: 200
                      }}
                    >
                      {category.percentage}%
                    </motion.span>
                  </div>

                  <div className="progress-bar-container">
                    <motion.div
                      className="progress-bar-fill"
                      style={{
                        background: `linear-gradient(90deg, ${category.colors.join(', ')})`
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${category.percentage}%` }}
                      transition={{
                        delay: index * 0.15 + 0.2,
                        duration: 1,
                        ease: 'easeOut'
                      }}
                    />
                  </div>

                  <div className="category-thumbnails">
                    {category.images.map((img, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        className="thumbnail"
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: index * 0.15 + 0.6 + imgIndex * 0.05,
                          type: 'spring',
                          stiffness: 200
                        }}
                      >
                        <img src={img.url} alt="" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Phase3Analysis;
