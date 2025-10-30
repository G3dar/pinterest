import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import './Phase0Loading.css';

const Phase0Loading = ({ isLoading, error, onRetry }) => {
  if (!isLoading && !error) return null;

  return (
    <motion.div
      className="phase0-loading"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {error ? (
        <motion.div
          className="error-state"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>Oops!</h2>
          <p>{error}</p>
          <button onClick={onRetry} className="retry-button">
            Try Again
          </button>
        </motion.div>
      ) : (
        <motion.div
          className="loading-state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            <Loader2 size={48} className="loader-icon" />
          </motion.div>
          <h2>Analyzing Your Year</h2>
          <p>Gathering your Pinterest aesthetics...</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Phase0Loading;
