import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Phase2Montage.css';

const Phase2Montage = ({ images, categories }) => {
  const [subPhase, setSubPhase] = useState('grid'); // grid, carousel, clusters

  useEffect(() => {
    // Switch to carousel after 5 seconds
    const carouselTimer = setTimeout(() => setSubPhase('carousel'), 5000);
    // Switch to clusters after 10 seconds
    const clustersTimer = setTimeout(() => setSubPhase('clusters'), 10000);

    return () => {
      clearTimeout(carouselTimer);
      clearTimeout(clustersTimer);
    };
  }, []);

  const gridImages = images.slice(0, 24);
  const carouselImages = [...images.slice(0, 15), ...images.slice(0, 15)]; // Duplicate for seamless loop

  return (
    <div className="phase2-montage">
      <AnimatePresence mode="wait">
        {subPhase === 'grid' && (
          <motion.div
            key="grid"
            className="grid-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {gridImages.map((img, index) => {
              const height = 150 + ((index % 3) * 50);
              return (
                <motion.div
                  key={index}
                  className="grid-card"
                  style={{ height: `${height}px` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                    ease: 'easeOut'
                  }}
                >
                  <img src={img.url} alt="" />
                  <motion.div
                    className="color-bar"
                    style={{
                      background: `linear-gradient(to right, ${img.colors.join(', ')})`,
                      transformOrigin: 'left'
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      delay: index * 0.05 + 0.2,
                      duration: 0.6
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {subPhase === 'carousel' && (
          <motion.div
            key="carousel"
            className="carousel-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="carousel-track"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 5,
                ease: 'linear',
                repeat: 0
              }}
            >
              {carouselImages.map((img, index) => (
                <motion.div
                  key={index}
                  className="carousel-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: Math.min(index * 0.1, 2),
                    duration: 0.5
                  }}
                >
                  <img src={img.url} alt="" />
                  <motion.div
                    className="category-label"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: Math.min(index * 0.1 + 0.3, 2.3),
                      duration: 0.5
                    }}
                  >
                    {img.categoryName}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {subPhase === 'clusters' && (
          <motion.div
            key="clusters"
            className="clusters-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.slice(0, 4).map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="category-cluster"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: catIndex * 0.2,
                  duration: 0.6,
                  ease: 'easeOut'
                }}
              >
                <motion.h3
                  className="cluster-title"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: catIndex * 0.2 + 0.2, duration: 0.5 }}
                >
                  {category.name}
                </motion.h3>

                <div className="cluster-grid">
                  {category.images.map((img, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      className="cluster-image"
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: catIndex * 0.2 + imgIndex * 0.1 + 0.3,
                        duration: 0.4,
                        type: 'spring',
                        stiffness: 200
                      }}
                    >
                      <img src={img.url} alt="" />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="weight-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: catIndex * 0.2 + 0.6,
                    type: 'spring',
                    stiffness: 200
                  }}
                >
                  {category.percentage}% of your year
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Phase2Montage;
