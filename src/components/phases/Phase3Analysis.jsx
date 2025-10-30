import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Phase3Analysis.css';

const Phase3Analysis = ({ colorPalette, keywords, categories }) => {
  const [subPhase, setSubPhase] = useState('colors'); // colors, constellations, categories

  useEffect(() => {
    // Switch to constellations after 3 seconds
    const constellationsTimer = setTimeout(() => setSubPhase('constellations'), 3000);
    // Switch to categories after 11 seconds (keywords shown as overlay during constellation)
    const categoriesTimer = setTimeout(() => setSubPhase('categories'), 11000);

    return () => {
      clearTimeout(constellationsTimer);
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

        {subPhase === 'constellations' && (
          <motion.div
            key="constellations"
            className="constellations-subphase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="subphase-title constellation-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [20, 0, 0, -20]
              }}
              transition={{
                duration: 3,
                times: [0, 0.2, 0.7, 1],
                ease: 'easeInOut'
              }}
            >
              Your Year Unfolding
            </motion.h2>

            <motion.p
              className="constellation-subtitle"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                delay: 0.3,
                duration: 2.7,
                times: [0, 0.2, 0.7, 1],
                ease: 'easeInOut'
              }}
            >
              A creative journey through the seasons
            </motion.p>

            {/* Constellation Map - Full Screen */}
            <div className="constellation-map-fullscreen">
              {/* Progressing seasonal gradient background */}
              <motion.div
                className="seasonal-gradient-bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              />

              {/* Season groups - 4 quadrants with environmental effects */}
              {[
                {
                  season: 'Spring',
                  images: categories[0]?.images.slice(0, 12) || [],
                  position: { x: 15, y: 15 },
                  color: '#90EE90',
                  particles: '🌸',
                  bgGradient: 'radial-gradient(circle at 15% 15%, rgba(144, 238, 144, 0.2), transparent 60%)'
                },
                {
                  season: 'Summer',
                  images: categories[1]?.images.slice(0, 12) || [],
                  position: { x: 85, y: 15 },
                  color: '#FFD700',
                  particles: '☀️',
                  bgGradient: 'radial-gradient(circle at 85% 15%, rgba(255, 215, 0, 0.2), transparent 60%)'
                },
                {
                  season: 'Fall',
                  images: categories[2]?.images.slice(0, 12) || [],
                  position: { x: 15, y: 85 },
                  color: '#FF8C42',
                  particles: '🍂',
                  bgGradient: 'radial-gradient(circle at 15% 85%, rgba(255, 140, 66, 0.2), transparent 60%)'
                },
                {
                  season: 'Winter',
                  images: categories[3]?.images.slice(0, 12) || [],
                  position: { x: 85, y: 85 },
                  color: '#87CEEB',
                  particles: '❄️',
                  bgGradient: 'radial-gradient(circle at 85% 85%, rgba(135, 206, 235, 0.2), transparent 60%)'
                }
              ].map((seasonGroup, groupIndex) => (
                <div key={seasonGroup.season} className="season-constellation">
                  {/* Seasonal background glow */}
                  <motion.div
                    className="season-bg-glow"
                    style={{ background: seasonGroup.bgGradient }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: groupIndex * 0.2,
                      duration: 0.8
                    }}
                  />

                  {/* Seasonal particles */}
                  {Array.from({ length: 12 }).map((_, pIndex) => (
                    <motion.div
                      key={`particle-${pIndex}`}
                      className="seasonal-particle"
                      style={{
                        left: `${seasonGroup.position.x + (Math.random() - 0.5) * 40}%`,
                        top: `${seasonGroup.position.y + (Math.random() - 0.5) * 40}%`,
                        fontSize: `${1 + Math.random()}rem`
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0],
                        y: seasonGroup.season === 'Winter' ? [0, 100] : [0, -50],
                        x: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 60],
                        rotate: [0, 360]
                      }}
                      transition={{
                        delay: groupIndex * 0.2 + pIndex * 0.05,
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 2
                      }}
                    >
                      {seasonGroup.particles}
                    </motion.div>
                  ))}
                  {/* Season Label */}
                  <motion.div
                    className="season-label"
                    style={{
                      left: `${seasonGroup.position.x}%`,
                      top: `${seasonGroup.position.y > 50 ? seasonGroup.position.y + 8 : seasonGroup.position.y - 8}%`,
                      color: seasonGroup.color
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: groupIndex * 0.15,
                      duration: 0.4,
                      type: 'spring'
                    }}
                  >
                    {seasonGroup.season}
                  </motion.div>

                  {/* Images as constellation nodes - larger and more spread */}
                  {seasonGroup.images.map((img, imgIndex) => {
                    const angle = (imgIndex * (360 / seasonGroup.images.length)) * (Math.PI / 180);
                    const radius = 22; // Increased radius for more spread
                    const offsetX = Math.cos(angle) * radius;
                    const offsetY = Math.sin(angle) * radius;

                    return (
                      <motion.div
                        key={imgIndex}
                        className="constellation-node-large"
                        style={{
                          left: `calc(${seasonGroup.position.x}% + ${offsetX}%)`,
                          top: `calc(${seasonGroup.position.y}% + ${offsetY}%)`
                        }}
                        initial={{ scale: 0, opacity: 0, rotateY: -180 }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                          rotateY: 0,
                          y: [0, -15, 0, -10, 0], // Floating animation
                        }}
                        whileHover={{
                          scale: 1.2,
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                        transition={{
                          delay: groupIndex * 0.3 + imgIndex * 0.08,
                          duration: 0.5,
                          type: 'spring',
                          stiffness: 200,
                          // Continuous floating motion
                          y: {
                            delay: groupIndex * 0.3 + imgIndex * 0.08 + 0.3,
                            duration: 4 + imgIndex * 0.5,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }
                        }}
                      >
                        <div className="node-glow-large" style={{
                          boxShadow: `
                            0 0 60px ${seasonGroup.color},
                            0 0 100px ${seasonGroup.color}66
                          `
                        }} />
                        <img src={img.url} alt="" />
                        <motion.div
                          className="node-star-pulse"
                          style={{ background: seasonGroup.color }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.7, 1, 0.7],
                            rotate: [0, 180, 360]
                          }}
                          transition={{
                            delay: groupIndex * 1.5 + imgIndex * 0.3 + 0.8,
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              ))}

              {/* Connecting Lines - All nodes connected */}
              <svg className="constellation-lines-fullscreen" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <filter id="lineGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Connect all nodes within each season (circle pattern) */}
                {[
                  { position: { x: 15, y: 15 }, color: '#90EE90', groupIndex: 0 }, // Spring
                  { position: { x: 85, y: 15 }, color: '#FFD700', groupIndex: 1 }, // Summer
                  { position: { x: 15, y: 85 }, color: '#FF8C42', groupIndex: 2 }, // Fall
                  { position: { x: 85, y: 85 }, color: '#87CEEB', groupIndex: 3 }  // Winter
                ].map((season) => {
                  const nodes = [];
                  const numNodes = 12;
                  const radius = 22;

                  // Calculate all node positions for this season
                  for (let i = 0; i < numNodes; i++) {
                    const angle = (i * (360 / numNodes)) * (Math.PI / 180);
                    const x = season.position.x + Math.cos(angle) * radius;
                    const y = season.position.y + Math.sin(angle) * radius;
                    nodes.push({ x, y });
                  }

                  // Create lines connecting all nodes in this season
                  return nodes.map((node, i) => {
                    const nextNode = nodes[(i + 1) % numNodes];
                    return (
                      <motion.line
                        key={`season-${season.groupIndex}-line-${i}`}
                        x1={node.x}
                        y1={node.y}
                        x2={nextNode.x}
                        y2={nextNode.y}
                        stroke={season.color}
                        strokeWidth="0.4"
                        strokeOpacity="0.5"
                        strokeLinecap="round"
                        filter="url(#lineGlow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                          delay: season.groupIndex * 0.3 + 0.3 + i * 0.02,
                          duration: 0.4,
                          ease: 'easeInOut'
                        }}
                      />
                    );
                  });
                })}

                {/* Connect seasons to each other - create flow between quadrants */}
                {/* Spring to Summer - connect closest nodes */}
                {(() => {
                  const springNodes = [];
                  const summerNodes = [];
                  const fallNodes = [];
                  const winterNodes = [];

                  const positions = [
                    { x: 15, y: 15, nodes: springNodes },
                    { x: 85, y: 15, nodes: summerNodes },
                    { x: 15, y: 85, nodes: fallNodes },
                    { x: 85, y: 85, nodes: winterNodes }
                  ];

                  positions.forEach(pos => {
                    for (let i = 0; i < 12; i++) {
                      const angle = (i * (360 / 12)) * (Math.PI / 180);
                      const x = pos.x + Math.cos(angle) * 22;
                      const y = pos.y + Math.sin(angle) * 22;
                      pos.nodes.push({ x, y });
                    }
                  });

                  return (
                    <>
                      {/* Spring (rightmost node) to Summer (leftmost node) */}
                      <motion.line
                        x1={springNodes[3].x} y1={springNodes[3].y}
                        x2={summerNodes[9].x} y2={summerNodes[9].y}
                        stroke="rgba(255, 255, 255, 0.2)"
                        strokeWidth="0.3"
                        strokeDasharray="4 3"
                        filter="url(#lineGlow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8, ease: 'easeInOut' }}
                      />

                      {/* Summer (bottommost node) to Winter (topmost node) */}
                      <motion.line
                        x1={summerNodes[6].x} y1={summerNodes[6].y}
                        x2={winterNodes[0].x} y2={winterNodes[0].y}
                        stroke="rgba(255, 255, 255, 0.2)"
                        strokeWidth="0.3"
                        strokeDasharray="4 3"
                        filter="url(#lineGlow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8, ease: 'easeInOut' }}
                      />

                      {/* Fall (rightmost node) to Winter (leftmost node) */}
                      <motion.line
                        x1={fallNodes[3].x} y1={fallNodes[3].y}
                        x2={winterNodes[9].x} y2={winterNodes[9].y}
                        stroke="rgba(255, 255, 255, 0.2)"
                        strokeWidth="0.3"
                        strokeDasharray="4 3"
                        filter="url(#lineGlow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 1.8, duration: 0.8, ease: 'easeInOut' }}
                      />

                      {/* Spring (bottommost node) to Fall (topmost node) */}
                      <motion.line
                        x1={springNodes[6].x} y1={springNodes[6].y}
                        x2={fallNodes[0].x} y2={fallNodes[0].y}
                        stroke="rgba(255, 255, 255, 0.2)"
                        strokeWidth="0.3"
                        strokeDasharray="4 3"
                        filter="url(#lineGlow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 2.1, duration: 0.8, ease: 'easeInOut' }}
                      />
                    </>
                  );
                })()}
              </svg>
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

      {/*
        CENTERING FIX: Keywords overlay positioned OUTSIDE AnimatePresence

        WHY THIS FIX WORKS:
        1. AnimatePresence and its children create transform contexts
        2. When a parent has a transform, position: fixed becomes relative to that parent
        3. By placing this OUTSIDE AnimatePresence, position: fixed works correctly
        4. The overlay now positions relative to the viewport, not a transformed parent

        RESULT: Perfect centering maintained regardless of constellation animations
      */}
      {subPhase === 'constellations' && (
        <motion.div
          className="keywords-overlay-centered"
          initial={{ opacity: 0, scale: 0.9, x: '-50%', y: '-50%' }}
          animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
          exit={{ opacity: 0, scale: 0.9, x: '-50%', y: '-50%' }}
          transition={{ delay: 3.2, duration: 0.8, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: '50vh',
            left: '50vw',
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'auto',
            maxWidth: '1100px',
            padding: '2rem',
            background: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '1rem',
            pointerEvents: 'auto'
          }}
        >
          <motion.h2
            className="subphase-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.4, duration: 0.6 }}
            style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: 'white',
              marginBottom: '2rem',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
              textAlign: 'center',
              whiteSpace: 'nowrap'
            }}
          >
            Your Visual Language
          </motion.h2>

          <div className="keywords-container" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
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
                    delay: 3.6 + index * 0.08,
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
    </div>
  );
};

export default Phase3Analysis;
