import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import './WrapTransition.css';

const WrapTransition = ({ isActive, onComplete }) => {
  useEffect(() => {
    if (isActive) {
      // Navigate after complete wrapping animation (2 seconds total)
      const timer = setTimeout(() => {
        onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  return (
    <AnimatePresence>
      {isActive && (
        <>
          {/* Left wrapping panel */}
          <motion.div
            className="wrap-panel wrap-left"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="wrap-pattern"></div>
          </motion.div>

          {/* Right wrapping panel */}
          <motion.div
            className="wrap-panel wrap-right"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="wrap-pattern"></div>
          </motion.div>

          {/* Vertical ribbon */}
          <motion.div
            className="wrap-ribbon wrap-ribbon-vertical"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
          >
            <div className="ribbon-shine"></div>
          </motion.div>

          {/* Horizontal ribbon */}
          <motion.div
            className="wrap-ribbon wrap-ribbon-horizontal"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
          >
            <div className="ribbon-shine ribbon-shine-horizontal"></div>
          </motion.div>

          {/* Fade overlay for smooth transition to next page */}
          <motion.div
            className="wrap-fade"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.3 }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default WrapTransition;
