import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import './Phase1Intro.css';

const Phase1Intro = ({ year = 2025 }) => {
  return (
    <motion.div
      className="phase1-intro"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 1.5, ease: 'easeInOut' }
      }}
    >
      {/* Background color transition overlay */}
      <motion.div
        className="background-transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{
          opacity: 1,
          background: [
            'linear-gradient(135deg, #E60023 0%, #C13584 100%)',
            'linear-gradient(135deg, #C13584 0%, #8B2B8A 100%)',
            'linear-gradient(135deg, #7A1F7A 0%, #4a0e4e 100%)',
            'linear-gradient(135deg, #2d0a3a 0%, #1a0a1f 100%)'
          ]
        }}
        transition={{
          duration: 2,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />

      {/* Dot pattern background */}
      <motion.div
        className="dot-pattern"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Main logo that scales and moves */}
      <motion.div
        className="logo-container"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.5, 0.5],
          opacity: [0, 1, 0.8],
          y: [0, 0, -100]
        }}
        exit={{ opacity: 0, scale: 0.3, y: -150 }}
        transition={{
          times: [0, 0.2, 0.4],
          duration: 2,
          ease: 'easeOut'
        }}
      >
        <Sparkles size={80} strokeWidth={1.5} />
      </motion.div>

      {/* Main heading */}
      <motion.h1
        className="main-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ delay: 2.3, duration: 0.6 }}
      >
        Your Year in Pinterest
      </motion.h1>

      {/* Year number */}
      <motion.div
        className="year-number"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ delay: 2.6, duration: 0.6 }}
      >
        {year}
      </motion.div>

      {/* Decorative sparkles */}
      <motion.div
        className="sparkle sparkle-bottom-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.6, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ delay: 2.8, duration: 0.8 }}
      >
        <Sparkles size={40} />
      </motion.div>

      <motion.div
        className="sparkle sparkle-bottom-right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.6, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ delay: 2.9, duration: 0.8 }}
      >
        <Sparkles size={30} />
      </motion.div>

      <motion.div
        className="sparkle sparkle-top-right"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.4, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 3.0, duration: 0.8 }}
      >
        <Sparkles size={25} />
      </motion.div>
    </motion.div>
  );
};

export default Phase1Intro;
