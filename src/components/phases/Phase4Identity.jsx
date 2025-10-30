import { motion } from 'framer-motion';
import { Sparkles, Award } from 'lucide-react';
import './Phase4Identity.css';

const Phase4Identity = ({ identityCard }) => {
  const rarityColors = {
    Common: '#9CA3AF',
    Rare: '#3B82F6',
    Epic: '#A855F7',
    Legendary: '#F59E0B'
  };

  const rarityColor = rarityColors[identityCard.rarity] || rarityColors.Epic;

  // Generate floating sparkles
  const sparkles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: 20 + (i * 10),
    top: 30 + ((i % 3) * 20),
    moveX: (Math.random() - 0.5) * 200,
    moveY: (Math.random() - 0.5) * 200
  }));

  return (
    <div className="phase4-identity">
      {/* Gradient orbs background */}
      <motion.div
        className="gradient-orbs"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, ${rarityColor}33 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, ${rarityColor}33 0%, transparent 50%)
          `
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
      />

      {/* Dot pattern */}
      <motion.div
        className="dot-pattern"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      />

      {/* Floating sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="floating-sparkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            color: rarityColor
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, sparkle.moveX],
            y: [0, sparkle.moveY]
          }}
          transition={{
            delay: 2 + (sparkle.id * 0.2),
            duration: 2,
            ease: 'easeOut'
          }}
        >
          <Sparkles size={20} />
        </motion.div>
      ))}

      {/* Identity Card */}
      <motion.div
        className="identity-card"
        style={{
          borderColor: rarityColor,
          boxShadow: `
            0 20px 60px rgba(0,0,0,0.5),
            0 0 0 1px rgba(255,255,255,0.1),
            0 0 40px ${rarityColor}66
          `
        }}
        initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        {/* Rarity Badge */}
        <motion.div
          className="rarity-badge"
          style={{
            background: rarityColor,
            boxShadow: `0 4px 16px ${rarityColor}99`
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6, duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ delay: 6.2, duration: 1 }}
          >
            <Award size={16} />
          </motion.div>
          <span>{identityCard.rarity} Identity</span>
        </motion.div>

        {/* Avatar */}
        <motion.div
          className="card-avatar"
          style={{
            borderColor: rarityColor,
            boxShadow: `0 8px 24px ${rarityColor}66`
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
            type: 'spring',
            stiffness: 200
          }}
        >
          <img src={identityCard.avatar} alt="Avatar" />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="card-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          {identityCard.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="card-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
        >
          {identityCard.description}
        </motion.p>

        {/* Top Categories */}
        <motion.div
          className="card-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.6 }}
        >
          <div className="section-label">Top Categories</div>
          <div className="categories-pills">
            {identityCard.topCategories.map((category, index) => (
              <motion.div
                key={index}
                className="category-pill"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 4.2 + (index * 0.1),
                  type: 'spring',
                  stiffness: 200
                }}
              >
                {category}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Color Palette */}
        <motion.div
          className="card-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.8, duration: 0.6 }}
        >
          <div className="section-label">Your Color Story</div>
          <div className="color-circles-row">
            {identityCard.colorPalette.map((color, index) => (
              <motion.div
                key={index}
                className="color-dot"
                style={{
                  background: color.hex,
                  boxShadow: `0 4px 12px ${color.hex}99`
                }}
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 5 + (index * 0.1),
                  type: 'spring',
                  stiffness: 200
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Year Badge */}
        <motion.div
          className="year-badge"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7, duration: 0.6 }}
        >
          Pinterest {identityCard.year}
        </motion.div>
      </motion.div>

      {/* CTA Hint */}
      <motion.div
        className="cta-hint"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 8, duration: 0.6 }}
      >
        <Sparkles size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
        Get ready to share your identity
      </motion.div>
    </div>
  );
};

export default Phase4Identity;
