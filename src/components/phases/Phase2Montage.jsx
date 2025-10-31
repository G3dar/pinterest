import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Phase2Montage.css';

const Phase2Montage = ({ images, categories, colorPalette }) => {
  const [subPhase, setSubPhase] = useState('grid');

  useEffect(() => {
    const carouselTimer = setTimeout(() => setSubPhase('carousel'), 8000);
    const clustersTimer = setTimeout(() => setSubPhase('clusters'), 13000);

    return () => {
      clearTimeout(carouselTimer);
      clearTimeout(clustersTimer);
    };
  }, []);

  const gridImages = images.slice(0, 28);
  const carouselImages = [...images.slice(0, 12), ...images.slice(0, 12)];

  // Keywords with color themes
  const keywordData = [
    { text: 'minimalist', colors: ['#E8D5C4', '#C4A57B'] },
    { text: 'dreamy', colors: ['#D8BFD8', '#DDA0DD'] },
    { text: 'elegant', colors: ['#2C3E50', '#BFA696'] },
    { text: 'colorful', colors: ['#FFB6C1', '#87CEEB'] },
    { text: 'organic', colors: ['#98D8C8', '#8FBC8F'] },
    { text: 'modern', colors: ['#FF6B6B', '#4ECDC4'] },
    { text: 'cozy', colors: ['#F4A460', '#DEB887'] },
    { text: 'ethereal', colors: ['#BA55D3', '#9370DB'] },
    { text: 'vibrant', colors: ['#FF1493', '#FF69B4'] },
    { text: 'serene', colors: ['#87CEEB', '#B0E0E6'] },
    { text: 'bold', colors: ['#DC143C', '#FF4500'] },
    { text: 'soft', colors: ['#FFE4E1', '#FFC0CB'] }
  ];

  // Generate scattered random starting positions (disorganized chaos)
  const getScatteredPosition = (index) => {
    // Create truly random scattered positions across the viewport
    const angle = (index * 137.5) % 360; // Golden angle for distribution
    const distance = 200 + (index % 5) * 100;
    return {
      x: Math.cos(angle * Math.PI / 180) * distance + (Math.random() - 0.5) * 200,
      y: Math.sin(angle * Math.PI / 180) * distance + (Math.random() - 0.5) * 200,
      rotate: (Math.random() - 0.5) * 60, // Random rotation -30 to 30 degrees
      scale: 0.3 + Math.random() * 0.3 // Start small and varied
    };
  };

  return (
    <motion.div
      className="phase2-montage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut',
        exit: { duration: 0.4, ease: 'easeOut' }
      }}
    >
      {/* Background color transition from Phase1 */}
      <motion.div
        initial={{
          opacity: 1,
          background: 'linear-gradient(135deg, #2d0a3a 0%, #1a0a1f 100%)'
        }}
        animate={{
          opacity: [1, 0],
          background: [
            'linear-gradient(135deg, #2d0a3a 0%, #1a0a1f 100%)',
            'linear-gradient(135deg, #1a0a1f 0%, #0a0a1a 100%)',
            'linear-gradient(135deg, #111111 0%, #111111 100%)'
          ]
        }}
        exit={{
          opacity: 1
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          exit: {
            duration: 0
          }
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Continuous floating particles in background */}
      <motion.div
        className="floating-particles"
        exit={{ opacity: 1 }}
        transition={{ exit: { duration: 0 } }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${(i * 5)}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, (i % 2 === 0 ? 20 : -20), 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            exit={{ opacity: 0.2 }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
              exit: { duration: 0 }
            }}
          />
        ))}
      </motion.div>

      {/* Color palette morphing transition - purple to user colors */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{
          exit: { duration: 1.5, ease: 'easeInOut' }
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 100,
          pointerEvents: 'none'
        }}
      >
        {/* Morphing gradient background */}
        <motion.div
          exit={{
            background: [
              'radial-gradient(circle at 50% 50%, #2d0a3a 0%, #1a0a1f 100%)',
              `radial-gradient(circle at 50% 50%, ${colorPalette[0]?.hex || '#E60023'} 0%, ${colorPalette[1]?.hex || '#C13584'} 50%, ${colorPalette[2]?.hex || '#8B43DA'} 100%)`,
            ],
            scale: [1, 1.5]
          }}
          transition={{
            exit: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 50% 50%, #2d0a3a 0%, #1a0a1f 100%)',
          }}
        />

        {/* Color ripple VFX */}
        {colorPalette?.slice(0, 5).map((color, i) => (
          <motion.div
            key={i}
            exit={{
              scale: [0, 3, 5],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              exit: {
                duration: 1.5,
                delay: i * 0.15,
                ease: 'easeOut'
              }
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '200px',
              height: '200px',
              marginLeft: '-100px',
              marginTop: '-100px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${color.hex}40, transparent 70%)`,
              border: `2px solid ${color.hex}80`,
            }}
          />
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        {subPhase === 'grid' && (
          <>
            {/* Animated gradient backdrop - fades out smoothly */}
            <motion.div
              className="flowing-gradient-bg"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              exit={{
                opacity: 0
              }}
              transition={{
                opacity: { duration: 1 },
                backgroundPosition: {
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear'
                },
                exit: {
                  duration: 0.5,
                  ease: 'easeOut'
                }
              }}
            />

            {/* MOOD MAP - Large centered text in front */}
            <motion.div
              className="mood-map-text"
              initial={{
                opacity: 0,
                scale: 0.8,
                x: '-50%',
                y: 50
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1.05, 1, 1],
                x: '-50%',
                y: [50, -20, 0, 0]
              }}
              exit={{
                opacity: 0,
                x: '-50%',
                y: 0
              }}
              transition={{
                duration: 4,
                times: [0, 0.3, 0.5, 1],
                ease: [0.16, 1, 0.3, 1],
                exit: {
                  duration: 0.3,
                  ease: 'easeOut'
                }
              }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                translateY: '-50%',
                fontSize: 'clamp(4rem, 15vw, 12rem)',
                fontWeight: 900,
                color: 'rgba(255, 255, 255, 0.2)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                zIndex: 50,
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                marginLeft: '-0.075em'
              }}
            >
              MOOD MAP
            </motion.div>

            {/* Self-organizing images container - stays visible during portal transition */}
            <motion.div
              key="grid"
              className="self-organizing-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 1
              }}
              transition={{
                exit: { duration: 0 }
              }}
            >
              {gridImages.map((img, index) => {
                const height = 150 + ((index % 4) * 50);
                const scattered = getScatteredPosition(index);

                // Calculate grid position (organized state)
                const gridColumn = (index % 6) + 1;
                const gridRow = Math.floor(index / 6) + 1;

                // Organic final rotation for each card - more pronounced
                const organicRotateZ = (Math.sin(index) * 4) + (Math.cos(index * 1.3) * 3);
                const organicRotateY = (Math.cos(index) * 3) + (Math.sin(index * 0.8) * 2);
                const organicRotateX = (Math.sin(index * 0.7) * 2) + (Math.cos(index * 1.1) * 1.5);

                // Organic position offsets - scattered but harmonious
                const organicOffsetX = (Math.sin(index * 1.7) * 25) + (Math.cos(index * 0.9) * 15);
                const organicOffsetY = (Math.cos(index * 1.3) * 20) + (Math.sin(index * 1.1) * 12);

                // Calculate center position for portal suction
                // Grid has 6 columns, approximate cell width
                const gridCellWidth = window.innerWidth / 6;
                const gridCellHeight = 200; // approximate
                const currentX = (gridColumn - 1) * gridCellWidth + organicOffsetX;
                const currentY = (gridRow - 1) * gridCellHeight + organicOffsetY;
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;
                const exitX = centerX - currentX;
                const exitY = centerY - currentY;

                return (
                  // Image - starts scattered, flows from right, organizes into grid, gets sucked into portal
                  <motion.div
                    key={index}
                    className="chaos-to-order-card"
                    style={{
                      height: `${height}px`,
                      gridColumn: gridColumn,
                      gridRow: gridRow
                    }}
                    initial={{
                      opacity: 0,
                      x: scattered.x + window.innerWidth,
                      y: scattered.y,
                      scale: scattered.scale,
                      rotateZ: scattered.rotate,
                      rotateY: 90,
                      rotateX: 30
                    }}
                    animate={{
                      opacity: 1,
                      x: organicOffsetX,
                      y: organicOffsetY,
                      scale: 1,
                      rotateZ: organicRotateZ,
                      rotateY: organicRotateY,
                      rotateX: organicRotateX
                    }}
                    exit={{
                      x: exitX,
                      y: exitY,
                      scale: 0,
                      opacity: 0,
                      rotateZ: organicRotateZ + (720 + (index * 45)), // 2+ spins with variation
                      rotateY: 180,
                      rotateX: 90,
                      filter: 'blur(10px)'
                    }}
                    whileHover={{
                      scale: 1.08,
                      rotateZ: organicRotateZ + 2,
                      zIndex: 20,
                      transition: { duration: 0.3 }
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 1.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      exit: {
                        delay: 0.8 + (index * 0.015),
                        duration: 2.5,
                        ease: [0.32, 0.72, 0, 1]
                      }
                    }}
                  >
                    {/* Magnetic field effect as they organize */}
                    <motion.div
                      className="organization-aura"
                      style={{
                        background: `radial-gradient(circle, ${img.colors[0]}60, ${img.colors[1] || img.colors[0]}30, transparent)`
                      }}
                      animate={{
                        opacity: [0, 0.8, 0.4, 0],
                        scale: [0.5, 2, 1.5, 0.8]
                      }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.08,
                        times: [0, 0.3, 0.6, 1]
                      }}
                    />

                    {/* Card glow */}
                    <motion.div
                      className="card-glow"
                      style={{
                        background: `radial-gradient(circle, ${img.colors[0]}40, transparent)`
                      }}
                      animate={{
                        opacity: [0, 0.6, 0.3],
                        scale: [1, 1.3, 1.1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.1 + 1
                      }}
                    />

                    <img src={img.url} alt="" />

                    {/* Color bar */}
                    <motion.div
                      className="color-bar"
                      style={{
                        background: `linear-gradient(to right, ${img.colors.join(', ')})`,
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{
                        delay: index * 0.08 + 1.2,
                        duration: 0.6,
                        ease: 'easeOut'
                      }}
                    />
                  </motion.div>
                );
              })}

              {/* Keyword Tags - Positioned in lower-right of images */}
              {[...keywordData, ...keywordData].map((keywordInfo, keyIndex) => {
                // Map keywords to images non-uniformly - skip some, double up on others
                const imageMapping = [
                  0, 2, 2, 5, 7, 9, 9, 12, 14, 17, 19, 20,
                  22, 25, 25, 27, 1, 4, 16, 11
                ]; // Some images get 2 tags, some get none (adjusted for 28 images)

                if (keyIndex >= imageMapping.length) return null;

                const imageIndex = imageMapping[keyIndex];

                // Calculate grid position for associated image
                const gridColumn = (imageIndex % 6) + 1;
                const gridRow = Math.floor(imageIndex / 6) + 1;

                // Organic position offsets from image positioning (matching image offsets)
                const organicOffsetX = (Math.sin(imageIndex * 1.7) * 25) + (Math.cos(imageIndex * 0.9) * 15);
                const organicOffsetY = (Math.cos(imageIndex * 1.3) * 20) + (Math.sin(imageIndex * 1.1) * 12);

                // Grid cell dimensions
                const gridCellWidth = window.innerWidth / 6;
                const gridCellHeight = 200;

                // Image center position
                const imageX = (gridColumn - 1) * gridCellWidth + organicOffsetX;
                const imageY = (gridRow - 1) * gridCellHeight + organicOffsetY;

                // Image dimensions (approximate)
                const imageWidth = 180;
                const imageHeight = 180;

                // Position tag at lower-right corner of image with small padding
                // Check how many times this image appears in the mapping before current index
                const previousOccurrences = imageMapping.slice(0, keyIndex).filter(idx => idx === imageIndex).length;

                // Use stacking offset to prevent overlaps when multiple tags on same image
                const stackOffsetX = previousOccurrences * 12; // Horizontal offset for multiple tags
                const stackOffsetY = previousOccurrences * -8; // Slight vertical offset upward

                const tagX = imageX + (imageWidth / 2) - 10 + stackOffsetX;
                const tagY = imageY + (imageHeight / 2) - 25 + stackOffsetY;

                const randomX = (tagX / window.innerWidth) * 100;
                const randomY = (tagY / window.innerHeight) * 100;

                // Calculate center position for portal suction
                const keywordCurrentX = tagX;
                const keywordCurrentY = tagY;
                const keywordCenterX = window.innerWidth / 2;
                const keywordCenterY = window.innerHeight / 2;
                const keywordExitX = keywordCenterX - keywordCurrentX;
                const keywordExitY = keywordCenterY - keywordCurrentY;

                return (
                  <motion.div
                    key={`keyword-splash-${keyIndex}`}
                    className="floating-keyword-chaos"
                    initial={{
                      opacity: 0,
                      scale: 0,
                      rotateZ: (Math.random() - 0.5) * 180
                    }}
                    animate={{
                      opacity: [0, 1, 1],
                      scale: [0, 1.3, 1],
                      rotateZ: [(Math.random() - 0.5) * 180, 0, (Math.random() - 0.5) * 5]
                    }}
                    exit={{
                      x: keywordExitX,
                      y: keywordExitY,
                      scale: 0,
                      opacity: 0,
                      rotateZ: 360 * 4 + (keyIndex * 30) // 4+ spins with variation
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 3.5 + (keyIndex * 0.08), // Start after images organize (3.5s)
                      ease: [0.34, 1.56, 0.64, 1],
                      times: [0, 0.6, 1],
                      exit: {
                        delay: 0.8 + (keyIndex * 0.01),
                        duration: 2.2,
                        ease: [0.32, 0.72, 0, 1]
                      }
                    }}
                    style={{
                      position: 'absolute',
                      left: `${randomX}%`,
                      top: `${randomY}%`,
                      transform: 'translate(0, 0)', // No centering - anchor to position
                      background: `linear-gradient(135deg, ${keywordInfo.colors[0]}E6, ${keywordInfo.colors[1]}CC)`,
                      borderColor: `${keywordInfo.colors[0]}`,
                      boxShadow: `
                        0 8px 32px ${keywordInfo.colors[0]}CC,
                        0 4px 16px rgba(0, 0, 0, 0.8),
                        inset 0 1px 0 rgba(255, 255, 255, 0.3)
                      `,
                      border: `3px solid ${keywordInfo.colors[0]}`,
                      borderRadius: '2rem',
                      padding: '0.75rem 1.5rem',
                      backdropFilter: 'blur(20px)',
                      zIndex: 10,
                      pointerEvents: 'none'
                    }}
                  >
                    <motion.span
                      style={{
                        color: 'white',
                        fontSize: '1rem',
                        fontWeight: 700,
                        textTransform: 'lowercase',
                        letterSpacing: '0.02em',
                        textShadow: `0 2px 8px rgba(0, 0, 0, 0.9), 0 1px 0 rgba(0, 0, 0, 0.5)`
                      }}
                    >
                      {keywordInfo.text}
                    </motion.span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Portal effect overlay - very gradual organic opening */}
            <motion.div
              className="portal-transition"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0, scale: 0 }}
              exit={{
                opacity: 1,
                scale: 20,
                rotateZ: 540
              }}
              transition={{
                opacity: {
                  duration: 4.5,
                  ease: [0.19, 1, 0.22, 1]
                },
                scale: {
                  duration: 4.5,
                  ease: [0.19, 1, 0.22, 1]
                },
                rotateZ: {
                  duration: 4.5,
                  ease: 'linear'
                },
                delay: 0.3
              }}
            />
          </>
        )}

        {subPhase === 'carousel' && (
          <motion.div
            key="carousel"
            className="carousel-view-enhanced"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            {/* Parallax layers for depth */}
            <motion.div
              className="parallax-bg"
              animate={{ x: ['0%', '-15%'] }}
              transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
            />

            <motion.div
              className="carousel-track-enhanced"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 8,
                ease: 'linear',
                repeat: 0
              }}
            >
              {carouselImages.map((img, index) => (
                <motion.div
                  key={index}
                  className="carousel-card-enhanced"
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    rotateY: 60,
                    z: -200
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    z: 0,
                    y: [0, -15, 0]
                  }}
                  transition={{
                    delay: Math.min(index * 0.08, 1.5),
                    duration: 0.8,
                    type: 'spring',
                    stiffness: 100,
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: 'easeInOut'
                    }
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: 1000
                  }}
                >
                  <motion.div
                    className="card-shimmer"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.3,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                  <img src={img.url} alt="" />
                  <motion.div
                    className="category-label-enhanced"
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: Math.min(index * 0.08 + 0.4, 2),
                      duration: 0.6,
                      type: 'spring',
                      stiffness: 150
                    }}
                  >
                    <motion.span
                      animate={{
                        textShadow: [
                          '0 0 10px rgba(230,0,35,0.5)',
                          '0 0 20px rgba(230,0,35,0.8)',
                          '0 0 10px rgba(230,0,35,0.5)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      {img.categoryName}
                    </motion.span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {subPhase === 'clusters' && (
          <motion.div
            key="clusters"
            className="clusters-view-enhanced"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            {categories.slice(0, 4).map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="category-cluster-enhanced"
                initial={{
                  opacity: 0,
                  y: 80,
                  rotateX: 45,
                  scale: 0.8
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1
                }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                transition={{
                  delay: catIndex * 0.15,
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 100,
                  damping: 12
                }}
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                <motion.div
                  className="cluster-bg-glow"
                  style={{
                    background: `radial-gradient(circle, ${category.colors[0]}30, transparent)`
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: catIndex * 0.5
                  }}
                />

                <motion.h3
                  className="cluster-title-enhanced"
                  initial={{ opacity: 0, x: -30, rotateY: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    rotateY: 0
                  }}
                  transition={{
                    delay: catIndex * 0.15 + 0.2,
                    duration: 0.6,
                    type: 'spring',
                    stiffness: 120
                  }}
                >
                  <motion.span
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${category.colors.join(', ')}, ${category.colors[0]})`,
                      backgroundSize: '200% 100%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {category.name}
                  </motion.span>
                </motion.h3>

                <div className="cluster-grid-enhanced">
                  {category.images.map((img, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      className="cluster-image-enhanced"
                      initial={{
                        scale: 0,
                        rotate: -20,
                        opacity: 0,
                        z: -100
                      }}
                      animate={{
                        scale: [0, 1, 1, 0.8],
                        rotate: [- 20, 0, 0, -10],
                        opacity: [0, 1, 1, 0],
                        z: [-100, 0, 0, -50]
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        zIndex: 10,
                        transition: { duration: 0.2 }
                      }}
                      transition={{
                        delay: catIndex * 0.15 + imgIndex * 0.08 + 0.3,
                        duration: 4.5,
                        times: [0, 0.15, 0.75, 1],
                        ease: "easeInOut"
                      }}
                    >
                      <motion.div
                        className="image-glow-ring"
                        style={{
                          borderColor: category.colors[imgIndex % category.colors.length]
                        }}
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: imgIndex * 0.3
                        }}
                      />
                      <img src={img.url} alt="" />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="weight-badge-enhanced"
                  initial={{ scale: 0, rotateZ: -180 }}
                  animate={{ scale: 1, rotateZ: 0 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  transition={{
                    delay: catIndex * 0.15 + 0.7,
                    duration: 0.6,
                    type: 'spring',
                    stiffness: 200
                  }}
                >
                  <motion.span
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(255,255,255,0.5)',
                        '0 0 20px rgba(255,255,255,0.8)',
                        '0 0 10px rgba(255,255,255,0.5)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  >
                    {category.percentage}% of your year
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Phase2Montage;
