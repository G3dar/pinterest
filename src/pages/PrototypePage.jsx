import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import generateWrappedData from '../data/mockData';
import Phase0Loading from '../components/phases/Phase0Loading';
import Phase1Intro from '../components/phases/Phase1Intro';
import Phase2Montage from '../components/phases/Phase2Montage';
import Phase3Analysis from '../components/phases/Phase3Analysis';
import Phase4Identity from '../components/phases/Phase4Identity';
import Phase5Share from '../components/phases/Phase5Share';

const PrototypePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wrappedData, setWrappedData] = useState(null);
  const [currentPhase, setCurrentPhase] = useState(0);

  // Phase timing in milliseconds
  const PHASE_TIMINGS = {
    0: 0,      // Loading (variable)
    1: 5000,   // Intro (5s)
    2: 15000,  // Montage (15s)
    3: 16000,  // Analysis (16s) - includes constellation phase
    4: 10000,  // Identity (10s)
    5: Infinity // Share (user controlled)
  };

  // Load data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Simulate loading time
        await new Promise(resolve => setTimeout(resolve, 1000));
        const data = generateWrappedData();
        setWrappedData(data);
        setIsLoading(false);

        // Start with Phase 1 (Intro) after loading
        setTimeout(() => setCurrentPhase(1), 500);
      } catch (err) {
        setError('Failed to load your wrapped data. Please try again.');
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Auto-advance through phases based on timing
  useEffect(() => {
    if (currentPhase === 0 || currentPhase === 5) return; // Don't auto-advance loading or share

    const duration = PHASE_TIMINGS[currentPhase];
    const timer = setTimeout(() => {
      setCurrentPhase(prev => prev + 1);
    }, duration);

    return () => clearTimeout(timer);
  }, [currentPhase]);

  const handleRestart = () => {
    setCurrentPhase(1);
  };

  const handleRetry = () => {
    setError(null);
    setIsLoading(true);
    setCurrentPhase(0);

    // Retry loading
    setTimeout(() => {
      try {
        const data = generateWrappedData();
        setWrappedData(data);
        setIsLoading(false);
        setTimeout(() => setCurrentPhase(1), 500);
      } catch (err) {
        setError('Failed to load your wrapped data. Please try again.');
        setIsLoading(false);
      }
    }, 1000);
  };

  if (!wrappedData && !isLoading && !error) {
    return null;
  }

  return (
    <div className="prototype-page">
      <AnimatePresence mode="wait">
        {(isLoading || error) && (
          <Phase0Loading
            key="loading"
            isLoading={isLoading}
            error={error}
            onRetry={handleRetry}
          />
        )}

        {!isLoading && !error && wrappedData && (
          <>
            {currentPhase === 1 && (
              <Phase1Intro key="intro" year={wrappedData.year} />
            )}

            {currentPhase === 2 && (
              <Phase2Montage
                key="montage"
                images={wrappedData.allImages}
                categories={wrappedData.topCategories}
                colorPalette={wrappedData.colorPalette}
              />
            )}

            {currentPhase === 3 && (
              <Phase3Analysis
                key="analysis"
                colorPalette={wrappedData.colorPalette}
                keywords={wrappedData.keywords}
                categories={wrappedData.topCategories}
              />
            )}

            {currentPhase === 4 && (
              <Phase4Identity
                key="identity"
                identityCard={wrappedData.identityCard}
              />
            )}

            {currentPhase === 5 && (
              <Phase5Share
                key="share"
                identityCard={wrappedData.identityCard}
                onRestart={handleRestart}
              />
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PrototypePage;
