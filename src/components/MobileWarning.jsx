import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MobileWarning.css';

const MobileWarning = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if user has previously dismissed the warning
    const hasDetDismissed = localStorage.getItem('mobileWarningDismissed');
    if (hasDetDismissed) {
      setDismissed(true);
      return;
    }

    // Detect mobile device
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent)
      || window.innerWidth < 768;

    if (isMobile) {
      setShowWarning(true);
    }
  }, []);

  const handleDismiss = () => {
    setShowWarning(false);
    setDismissed(true);
    localStorage.setItem('mobileWarningDismissed', 'true');
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {showWarning && (
        <motion.div
          className="mobile-warning-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="mobile-warning-content"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {/* Warning Icon */}
            <motion.div
              className="warning-icon"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 20h20L12 2z"
                  fill="#FFB84D"
                  stroke="#FF8C00"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 9v4M12 17h.01"
                  stroke="#111"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* Pinterest Logo */}
            <div className="warning-logo">
              <svg height="40" width="40" viewBox="0 0 24 24">
                <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12" fill="#e60023"/>
              </svg>
            </div>

            {/* Warning Title */}
            <h1 className="warning-title">Desktop Experience Recommended</h1>

            {/* Warning Message */}
            <p className="warning-message">
              This Pinterest Wrapped demo is designed for an optimal viewing experience on desktop browsers (PC or Mac).
            </p>

            <p className="warning-submessage">
              For the best interactive experience with animations, transitions, and full visual effects, please visit this demo on a desktop computer.
            </p>

            {/* Device Icons */}
            <div className="device-icons">
              <div className="device-icon recommended">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Desktop</span>
                <span className="status">✓ Recommended</span>
              </div>

              <div className="device-icon not-recommended">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <rect x="6" y="2" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10 5h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Mobile</span>
                <span className="status">! Limited</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="warning-actions">
              <motion.button
                className="warning-button primary"
                onClick={handleDismiss}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                I Understand, Continue Anyway
              </motion.button>

              <button
                className="warning-button secondary"
                onClick={() => window.history.back()}
              >
                Go Back
              </button>
            </div>

            {/* Additional Info */}
            <p className="warning-footer">
              This is a prototype demonstration. Some features may not work as intended on mobile devices.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileWarning;
