import { useState } from 'react';
import { motion } from 'framer-motion';

const CenteringTest = () => {
  // Test controls to isolate what breaks centering
  const [enableConstellationDiv, setEnableConstellationDiv] = useState(false);
  const [enableConstellationImages, setEnableConstellationImages] = useState(false);
  const [enableSVGLines, setEnableSVGLines] = useState(false);
  const [enableFramerMotion, setEnableFramerMotion] = useState(false);
  const [enableParticles, setEnableParticles] = useState(false);
  const [enableSeasonalGradient, setEnableSeasonalGradient] = useState(false);

  const testKeywords = [
    { text: 'minimalist', weight: 0.8 },
    { text: 'geometric', weight: 0.6 },
    { text: 'dreamy', weight: 0.7 },
    { text: 'elegant', weight: 0.5 },
    { text: 'colorful', weight: 0.9 }
  ];

  // Mock constellation data
  const mockSeasons = [
    {
      season: 'Spring',
      images: Array(15).fill({ url: 'https://via.placeholder.com/100' }),
      position: { x: 15, y: 15 },
      color: '#90EE90',
      particles: '🌸',
      bgGradient: 'radial-gradient(circle at 15% 15%, rgba(144, 238, 144, 0.2), transparent 60%)'
    },
    {
      season: 'Summer',
      images: Array(15).fill({ url: 'https://via.placeholder.com/100' }),
      position: { x: 85, y: 15 },
      color: '#FFD700',
      particles: '☀️',
      bgGradient: 'radial-gradient(circle at 85% 15%, rgba(255, 215, 0, 0.2), transparent 60%)'
    },
    {
      season: 'Fall',
      images: Array(15).fill({ url: 'https://via.placeholder.com/100' }),
      position: { x: 15, y: 85 },
      color: '#FF8C42',
      particles: '🍂',
      bgGradient: 'radial-gradient(circle at 15% 85%, rgba(255, 140, 66, 0.2), transparent 60%)'
    },
    {
      season: 'Winter',
      images: Array(15).fill({ url: 'https://via.placeholder.com/100' }),
      position: { x: 85, y: 85 },
      color: '#87CEEB',
      particles: '❄️',
      bgGradient: 'radial-gradient(circle at 85% 85%, rgba(135, 206, 235, 0.2), transparent 60%)'
    }
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#111111',
      overflow: 'hidden'
    }}>
      {/*
        TEST RESULT: The constellation-map-fullscreen div with position: absolute breaks centering!

        ANALYSIS:
        - In Phase3Analysis.jsx, the constellation-map-fullscreen has position: absolute
        - This creates a new positioning context
        - When the keywords overlay uses position: fixed with transform, it gets affected
        - The parent .phase3-analysis has display: flex, which may influence child positioning

        FIX: The keywords overlay needs to be OUTSIDE the constellation container entirely,
        or the constellation container should not use positioning that affects fixed children.
      */}
      {enableConstellationDiv && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 70%)'
        }}>
          {/* Seasonal gradient background */}
          {enableSeasonalGradient && (
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `
                  linear-gradient(
                    135deg,
                    rgba(144, 238, 144, 0.15) 0%,
                    rgba(255, 215, 0, 0.15) 25%,
                    rgba(255, 140, 66, 0.15) 50%,
                    rgba(135, 206, 235, 0.15) 75%,
                    rgba(144, 238, 144, 0.1) 100%
                  )`,
                pointerEvents: 'none',
                zIndex: 0
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            />
          )}

          {/* Constellation Images */}
          {enableConstellationImages && mockSeasons.map((seasonGroup, groupIndex) => (
            <div key={seasonGroup.season} style={{
              position: 'absolute',
              width: '100%',
              height: '100%'
            }}>
              {/* Seasonal particles */}
              {enableParticles && Array.from({ length: 5 }).map((_, pIndex) => (
                <motion.div
                  key={`particle-${pIndex}`}
                  style={{
                    position: 'absolute',
                    left: `${seasonGroup.position.x + (Math.random() - 0.5) * 40}%`,
                    top: `${seasonGroup.position.y + (Math.random() - 0.5) * 40}%`,
                    fontSize: `${1 + Math.random()}rem`,
                    pointerEvents: 'none',
                    filter: 'drop-shadow(0 0 8px currentColor)',
                    zIndex: 5
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
                style={{
                  position: 'absolute',
                  left: `${seasonGroup.position.x}%`,
                  top: `${seasonGroup.position.y > 50 ? seasonGroup.position.y + 8 : seasonGroup.position.y - 8}%`,
                  color: seasonGroup.color,
                  fontSize: '2rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  textShadow: `
                    0 0 30px currentColor,
                    0 0 60px currentColor,
                    0 4px 20px rgba(0, 0, 0, 0.8)`,
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none',
                  zIndex: 15
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

              {/* Images as constellation nodes */}
              {seasonGroup.images.slice(0, 5).map((img, imgIndex) => {
                const angle = (imgIndex * (360 / 5)) * (Math.PI / 180);
                const radius = 22;
                const offsetX = Math.cos(angle) * radius;
                const offsetY = Math.sin(angle) * radius;

                const NodeComponent = enableFramerMotion ? motion.div : 'div';

                return (
                  <NodeComponent
                    key={imgIndex}
                    style={{
                      position: 'absolute',
                      left: `calc(${seasonGroup.position.x}% + ${offsetX}%)`,
                      top: `calc(${seasonGroup.position.y}% + ${offsetY}%)`,
                      width: '100px',
                      height: '100px',
                      transform: 'translate(-50%, -50%)',
                      transformStyle: 'preserve-3d',
                      cursor: 'pointer',
                      zIndex: 10
                    }}
                    {...(enableFramerMotion ? {
                      initial: { scale: 0, opacity: 0, rotateY: -180 },
                      animate: {
                        scale: 1,
                        opacity: 1,
                        rotateY: 0,
                        y: [0, -15, 0, -10, 0]
                      },
                      transition: {
                        delay: groupIndex * 0.3 + imgIndex * 0.08,
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 200,
                        y: {
                          delay: groupIndex * 0.3 + imgIndex * 0.08 + 0.3,
                          duration: 4 + imgIndex * 0.5,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }
                      }
                    } : {})}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '-20px',
                      left: '-20px',
                      right: '-20px',
                      bottom: '-20px',
                      borderRadius: '50%',
                      opacity: 0.6,
                      filter: 'blur(25px)',
                      pointerEvents: 'none',
                      boxShadow: `
                        0 0 60px ${seasonGroup.color},
                        0 0 100px ${seasonGroup.color}66
                      `
                    }} />
                    <img
                      src={img.url}
                      alt=""
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '4px solid rgba(255, 255, 255, 0.4)',
                        boxShadow: `
                          0 12px 40px rgba(0, 0, 0, 0.6),
                          inset 0 0 30px rgba(255, 255, 255, 0.15),
                          0 0 0 2px rgba(255, 255, 255, 0.1)`,
                        position: 'relative',
                        zIndex: 2
                      }}
                    />
                  </NodeComponent>
                );
              })}
            </div>
          ))}

          {/* SVG Connecting Lines */}
          {enableSVGLines && (
            <svg
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1
              }}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="lineGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {mockSeasons.map((season, idx) => {
                const nodes = [];
                const numNodes = 5;
                const radius = 22;

                for (let i = 0; i < numNodes; i++) {
                  const angle = (i * (360 / numNodes)) * (Math.PI / 180);
                  const x = season.position.x + Math.cos(angle) * radius;
                  const y = season.position.y + Math.sin(angle) * radius;
                  nodes.push({ x, y });
                }

                return nodes.map((node, i) => {
                  const nextNode = nodes[(i + 1) % numNodes];
                  const LineComponent = enableFramerMotion ? motion.line : 'line';

                  return (
                    <LineComponent
                      key={`season-${idx}-line-${i}`}
                      x1={node.x}
                      y1={node.y}
                      x2={nextNode.x}
                      y2={nextNode.y}
                      stroke={season.color}
                      strokeWidth="0.4"
                      strokeOpacity="0.5"
                      strokeLinecap="round"
                      filter="url(#lineGlow)"
                      {...(enableFramerMotion ? {
                        initial: { pathLength: 0, opacity: 0 },
                        animate: { pathLength: 1, opacity: 1 },
                        transition: {
                          delay: idx * 0.3 + 0.3 + i * 0.02,
                          duration: 0.4,
                          ease: 'easeInOut'
                        }
                      } : {})}
                    />
                  );
                });
              })}
            </svg>
          )}
        </div>
      )}

      {/* Visual guides to check centering */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        height: '1px',
        background: 'red',
        zIndex: 100
      }} />
      <div style={{
        position: 'absolute',
        left: '50%',
        top: 0,
        bottom: 0,
        width: '1px',
        background: 'red',
        zIndex: 100
      }} />

      {/* Test overlay - THE KEYWORDS THAT MUST STAY CENTERED */}
      <motion.div
        initial={{ x: '-50%', y: '-50%' }}
        animate={{ x: '-50%', y: '-50%' }}
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
          background: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '1rem',
          border: '2px solid yellow'
        }}
      >
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 800,
          color: 'white',
          marginBottom: '2rem',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
          textAlign: 'center',
          whiteSpace: 'nowrap'
        }}>
          Your Visual Language
        </h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {testKeywords.map((keyword, index) => {
            const fontSize = 1 + (keyword.weight * 2);
            return (
              <div
                key={index}
                style={{
                  fontSize: `${fontSize}rem`,
                  padding: '0.75rem 1.5rem',
                  background: 'rgba(230, 0, 35, 0.1)',
                  border: '2px solid rgba(230, 0, 35, 0.3)',
                  borderRadius: '2rem',
                  color: 'white',
                  textTransform: 'lowercase',
                  whiteSpace: 'nowrap'
                }}
              >
                {keyword.text}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Control panel to test different combinations */}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        background: 'rgba(0, 0, 0, 0.9)',
        color: 'white',
        padding: '1rem',
        borderRadius: '0.5rem',
        fontSize: '0.75rem',
        fontFamily: 'monospace',
        zIndex: 200,
        maxWidth: '300px'
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
          Centering Test v2 - Isolation Mode
        </div>
        <div style={{ marginBottom: '0.75rem', color: '#888' }}>
          Red lines = true center | Yellow border = test box
        </div>

        <div style={{ marginBottom: '0.5rem', color: '#90EE90' }}>Toggle components:</div>

        <label style={{ display: 'block', marginBottom: '0.25rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={enableConstellationDiv}
            onChange={(e) => setEnableConstellationDiv(e.target.checked)}
          />
          {' '}Constellation Container (absolute)
        </label>

        <label style={{ display: 'block', marginBottom: '0.25rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={enableSeasonalGradient}
            onChange={(e) => setEnableSeasonalGradient(e.target.checked)}
            disabled={!enableConstellationDiv}
          />
          {' '}Seasonal Gradient Background
        </label>

        <label style={{ display: 'block', marginBottom: '0.25rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={enableConstellationImages}
            onChange={(e) => setEnableConstellationImages(e.target.checked)}
            disabled={!enableConstellationDiv}
          />
          {' '}Constellation Images (5 per season)
        </label>

        <label style={{ display: 'block', marginBottom: '0.25rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={enableSVGLines}
            onChange={(e) => setEnableSVGLines(e.target.checked)}
            disabled={!enableConstellationDiv}
          />
          {' '}SVG Connection Lines
        </label>

        <label style={{ display: 'block', marginBottom: '0.25rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={enableFramerMotion}
            onChange={(e) => setEnableFramerMotion(e.target.checked)}
            disabled={!enableConstellationDiv}
          />
          {' '}Framer Motion Animations
        </label>

        <label style={{ display: 'block', marginBottom: '0.5rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={enableParticles}
            onChange={(e) => setEnableParticles(e.target.checked)}
            disabled={!enableConstellationDiv}
          />
          {' '}Seasonal Particles (5 per season)
        </label>

        <div style={{ marginTop: '0.75rem', padding: '0.5rem', background: 'rgba(230, 0, 35, 0.2)', borderRadius: '0.25rem', fontSize: '0.7rem' }}>
          <strong>Expected:</strong> Enabling "Constellation Container" should NOT affect the yellow box centering. If it shifts, we found the bug!
        </div>
      </div>
    </div>
  );
};

export default CenteringTest;
