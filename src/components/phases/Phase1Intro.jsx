import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import './Phase1Intro.css';

const Phase1Intro = ({ year = 2024 }) => {
  return (
    <div className="phase1-intro">
      {/* Dot pattern background */}
      <motion.div
        className="dot-pattern"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
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
        transition={{ delay: 2.3, duration: 0.6 }}
      >
        Your Year in Pinterest
      </motion.h1>

      {/* Year number */}
      <motion.div
        className="year-number"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.6, duration: 0.6 }}
      >
        {year}
      </motion.div>

      {/* Decorative sparkles */}
      <motion.div
        className="sparkle sparkle-bottom-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ delay: 2.8, duration: 0.8 }}
      >
        <Sparkles size={40} />
      </motion.div>

      <motion.div
        className="sparkle sparkle-bottom-right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ delay: 2.9, duration: 0.8 }}
      >
        <Sparkles size={30} />
      </motion.div>

      <motion.div
        className="sparkle sparkle-top-right"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ delay: 3.0, duration: 0.8 }}
      >
        <Sparkles size={25} />
      </motion.div>
    </div>
  );
};

export default Phase1Intro;
