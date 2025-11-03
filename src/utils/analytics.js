// Google Analytics utility functions

/**
 * Track a page view
 * @param {string} path - The page path
 * @param {string} title - The page title
 */
export const trackPageView = (path, title) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
    });
  }
};

/**
 * Track a custom event
 * @param {string} eventName - The name of the event
 * @param {object} eventParams - Additional parameters for the event
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track when user starts the wrapped experience
 */
export const trackWrappedStart = () => {
  trackEvent('wrapped_start', {
    event_category: 'engagement',
    event_label: 'User started Pinterest Pulse experience',
  });
};

/**
 * Track when user completes a phase
 * @param {number} phase - The phase number
 */
export const trackPhaseComplete = (phase) => {
  trackEvent('phase_complete', {
    event_category: 'engagement',
    event_label: `Phase ${phase} completed`,
    phase_number: phase,
  });
};

/**
 * Track when user shares their results
 * @param {string} method - The sharing method (e.g., 'download', 'copy_link')
 */
export const trackShare = (method) => {
  trackEvent('share', {
    event_category: 'engagement',
    event_label: `Shared via ${method}`,
    method: method,
  });
};

/**
 * Track time spent on a phase
 * @param {number} phase - The phase number
 * @param {number} timeInSeconds - Time spent in seconds
 */
export const trackTimeOnPhase = (phase, timeInSeconds) => {
  trackEvent('time_on_phase', {
    event_category: 'engagement',
    phase_number: phase,
    value: timeInSeconds,
  });
};
