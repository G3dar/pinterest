import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Phase2Montage.css';

const Phase2Montage = ({ images, categories }) => {
  const [subPhase, setSubPhase] = useState('grid');

  useEffect(() => {
    const carouselTimer = setTimeout(() => setSubPhase('carousel'), 9000);
    const clustersTimer = setTimeout(() => setSubPhase('clusters'), 14000);

    return () => {
      clearTimeout(carouselTimer);
      clearTimeout(clustersTimer);
    };
  }, []);

  const gridImages = images.slice(0, 35);
  const carouselImages = [...images.slice(0, 15), ...images.slice(0, 15)];

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
      exit={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
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

      <AnimatePresence mode="wait">
        {subPhase === 'grid' && (
          <>
            {/* Animated gradient backdrop - stays visible throughout */}
            <motion.div
              className="flowing-gradient-bg"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              exit={{
                opacity: 1
              }}
              transition={{
                opacity: { duration: 1 },
                backgroundPosition: {
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear'
                },
                exit: { duration: 0 }
              }}
            />

            {/* MOOD MAP - Large background text */}
            <motion.div
              className="mood-map-text"
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 50
              }}
              animate={{
                opacity: [0, 1, 1, 0.3],
                scale: [0.8, 1.05, 1, 1],
                y: [50, -20, 0, 0]
              }}
              exit={{
                opacity: 0
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
                transform: 'translate(-50%, -50%)',
                fontSize: 'clamp(4rem, 15vw, 12rem)',
                fontWeight: 900,
                color: 'rgba(255, 255, 255, 0.08)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                zIndex: 2,
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                textShadow: '0 0 80px rgba(193, 53, 132, 0.3)',
                WebkitTextStroke: '2px rgba(230, 0, 35, 0.1)',
                width: '100%',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
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
                      opacity: [0, 0.5, 1, 1, 1, 1],
                      x: [
                        scattered.x + window.innerWidth,
                        scattered.x * 0.3,
                        0,
                        (Math.sin(index) * 3),
                        (-Math.sin(index) * 3),
                        (Math.sin(index) * 3)
                      ],
                      y: [
                        scattered.y,
                        scattered.y * 0.5,
                        0,
                        (Math.cos(index) * 2),
                        (-Math.cos(index) * 2),
                        (Math.cos(index) * 2)
                      ],
                      scale: [scattered.scale, 0.8, 1, 1.01, 0.99, 1],
                      rotateZ: [scattered.rotate, scattered.rotate * 0.5, 0, 1, -1, 0],
                      rotateY: [90, 45, 0, 2, -2, 0],
                      rotateX: [30, 15, 0, 1, -1, 0]
                    }}
                    exit={{
                      x: window.innerWidth / 2,
                      y: window.innerHeight / 2,
                      scale: 0,
                      opacity: 0,
                      rotateZ: 360 * (2 + (index * 0.1)),
                      rotateY: 180,
                      filter: 'blur(10px)'
                    }}
                    whileHover={{
                      scale: 1.08,
                      rotateZ: 2,
                      zIndex: 20,
                      transition: { duration: 0.3 }
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 7,
                      ease: 'easeInOut',
                      times: [0, 0.15, 0.3, 0.5, 0.7, 1],
                      repeat: 0,
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

              {/* Keyword Tags - Splash of intelligence AFTER images fill */}
              {keywordData.map((keywordInfo, keyIndex) => {
                // Create more keywords by duplicating the array
                if (keyIndex >= 18) return null; // Limit to 18 keywords

                // Random organic positioning
                const randomX = 10 + Math.random() * 80; // 10-90% across width
                const randomY = 10 + Math.random() * 80; // 10-90% across height

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
                      x: window.innerWidth / 2,
                      y: window.innerHeight / 2,
                      scale: 0,
                      opacity: 0,
                      rotateZ: 360 * 3
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
                      transform: 'translate(-50%, -50%)',
                      background: `linear-gradient(135deg, ${keywordInfo.colors[0]}40, ${keywordInfo.colors[1]}40)`,
                      borderColor: `${keywordInfo.colors[0]}80`,
                      boxShadow: `0 8px 32px ${keywordInfo.colors[0]}60, 0 0 40px ${keywordInfo.colors[1]}40`,
                      border: `2px solid ${keywordInfo.colors[0]}80`,
                      borderRadius: '2rem',
                      padding: '0.75rem 1.5rem',
                      backdropFilter: 'blur(10px)',
                      zIndex: 10,
                      pointerEvents: 'none'
                    }}
                  >
                    <motion.span
                      animate={{
                        textShadow: [
                          `0 0 20px ${keywordInfo.colors[0]}`,
                          `0 0 40px ${keywordInfo.colors[1]}`,
                          `0 0 20px ${keywordInfo.colors[0]}`
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                      style={{
                        color: 'white',
                        fontSize: '1rem',
                        fontWeight: 600,
                        textTransform: 'lowercase'
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
                        scale: 1,
                        rotate: 0,
                        opacity: 1,
                        z: 0
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        zIndex: 10,
                        transition: { duration: 0.2 }
                      }}
                      transition={{
                        delay: catIndex * 0.15 + imgIndex * 0.08 + 0.3,
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 180,
                        damping: 12
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
