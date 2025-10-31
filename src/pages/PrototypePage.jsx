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
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Phase timing in milliseconds
  const PHASE_TIMINGS = {
    0: 0,      // Loading (variable)
    1: 5000,   // Intro (5s)
    2: 20000,  // Montage (20s) - extended to give more time for category images
    3: 24000,  // Analysis (24s) - color palette + constellations + categories
    4: 11000,  // Identity (11s)
    5: Infinity // Share (user controlled)
  };

  // Load data on mount and preload all images
  useEffect(() => {
    const loadData = async () => {
      try {
        // Generate wrapped data
        const data = generateWrappedData();

        // Extract all unique image URLs from the data
        const imageUrls = new Set();

        // Add all images from allImages array
        if (data.allImages) {
          data.allImages.forEach(img => imageUrls.add(img.url));
        }

        // Add images from top categories
        if (data.topCategories) {
          data.topCategories.forEach(category => {
            if (category.images) {
              category.images.forEach(img => imageUrls.add(img.url));
            }
          });
        }

        // Add avatar image
        if (data.identityCard?.avatar) {
          imageUrls.add(data.identityCard.avatar);
        }

        const imagesToLoad = Array.from(imageUrls);
        let loadedCount = 0;

        // Preload all images
        const preloadPromises = imagesToLoad.map(url => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              loadedCount++;
              setLoadingProgress(Math.round((loadedCount / imagesToLoad.length) * 100));
              resolve();
            };
            img.onerror = () => {
              // Still count as loaded to prevent blocking
              loadedCount++;
              setLoadingProgress(Math.round((loadedCount / imagesToLoad.length) * 100));
              resolve();
            };
            img.src = url;
          });
        });

        // Wait for all images to load
        await Promise.all(preloadPromises);

        // Add small delay to show 100%
        await new Promise(resolve => setTimeout(resolve, 300));

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

  const handleRetry = async () => {
    setError(null);
    setIsLoading(true);
    setCurrentPhase(0);
    setLoadingProgress(0);

    // Retry loading with preloading
    try {
      // Generate wrapped data
      const data = generateWrappedData();

      // Extract all unique image URLs from the data
      const imageUrls = new Set();

      if (data.allImages) {
        data.allImages.forEach(img => imageUrls.add(img.url));
      }

      if (data.topCategories) {
        data.topCategories.forEach(category => {
          if (category.images) {
            category.images.forEach(img => imageUrls.add(img.url));
          }
        });
      }

      if (data.identityCard?.avatar) {
        imageUrls.add(data.identityCard.avatar);
      }

      const imagesToLoad = Array.from(imageUrls);
      let loadedCount = 0;

      // Preload all images
      const preloadPromises = imagesToLoad.map(url => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            setLoadingProgress(Math.round((loadedCount / imagesToLoad.length) * 100));
            resolve();
          };
          img.onerror = () => {
            loadedCount++;
            setLoadingProgress(Math.round((loadedCount / imagesToLoad.length) * 100));
            resolve();
          };
          img.src = url;
        });
      });

      await Promise.all(preloadPromises);
      await new Promise(resolve => setTimeout(resolve, 300));

      setWrappedData(data);
      setIsLoading(false);
      setTimeout(() => setCurrentPhase(1), 500);
    } catch (err) {
      setError('Failed to load your wrapped data. Please try again.');
      setIsLoading(false);
    }
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
            loadingProgress={loadingProgress}
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
