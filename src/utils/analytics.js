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

// ============================================
// PITCH-SPECIFIC TRACKING
// ============================================

/**
 * Initialize session tracking
 * Detects if this is a new or returning visitor
 */
export const initSessionTracking = () => {
  const sessionId = getOrCreateSessionId();
  const isReturning = checkReturningVisitor();
  const referralSource = getReferralSource();

  trackEvent('session_start', {
    event_category: 'pitch_analytics',
    session_id: sessionId,
    is_returning_visitor: isReturning,
    referral_source: referralSource,
    user_agent: navigator.userAgent,
    screen_resolution: `${window.screen.width}x${window.screen.height}`,
  });

  // Track session end on page unload
  window.addEventListener('beforeunload', () => {
    const sessionDuration = getSessionDuration();
    trackEvent('session_end', {
      event_category: 'pitch_analytics',
      session_id: sessionId,
      duration_seconds: sessionDuration,
    });
  });
};

/**
 * Get or create a unique session ID
 */
function getOrCreateSessionId() {
  let sessionId = sessionStorage.getItem('pitch_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('pitch_session_id', sessionId);
    sessionStorage.setItem('pitch_session_start', Date.now().toString());
  }
  return sessionId;
}

/**
 * Check if this is a returning visitor
 */
function checkReturningVisitor() {
  const hasVisited = localStorage.getItem('pitch_has_visited');
  if (!hasVisited) {
    localStorage.setItem('pitch_has_visited', 'true');
    localStorage.setItem('pitch_first_visit', new Date().toISOString());
    return false;
  }

  // Increment visit count
  const visitCount = parseInt(localStorage.getItem('pitch_visit_count') || '0') + 1;
  localStorage.setItem('pitch_visit_count', visitCount.toString());
  localStorage.setItem('pitch_last_visit', new Date().toISOString());

  return true;
}

/**
 * Get referral source information
 */
function getReferralSource() {
  const params = new URLSearchParams(window.location.search);

  // Check for UTM parameters
  if (params.has('utm_source')) {
    return {
      source: params.get('utm_source'),
      medium: params.get('utm_medium'),
      campaign: params.get('utm_campaign'),
      type: 'utm',
    };
  }

  // Check for referrer
  if (document.referrer) {
    try {
      const referrerUrl = new URL(document.referrer);
      return {
        source: referrerUrl.hostname,
        type: 'referrer',
      };
    } catch (e) {
      // Invalid referrer URL
    }
  }

  return {
    source: 'direct',
    type: 'direct',
  };
}

/**
 * Get current session duration in seconds
 */
function getSessionDuration() {
  const startTime = parseInt(sessionStorage.getItem('pitch_session_start') || Date.now().toString());
  return Math.floor((Date.now() - startTime) / 1000);
}

/**
 * Track when someone forwards/shares the link
 * @param {string} method - How it was shared ('copy_link', 'email', 'social', etc.)
 */
export const trackForward = (method) => {
  trackEvent('pitch_forwarded', {
    event_category: 'pitch_analytics',
    event_label: `Pitch forwarded via ${method}`,
    method: method,
    session_id: sessionStorage.getItem('pitch_session_id'),
  });
};

/**
 * Track navigation between pages
 * @param {string} from - Previous page
 * @param {string} to - Current page
 */
export const trackNavigation = (from, to) => {
  trackEvent('pitch_navigation', {
    event_category: 'pitch_analytics',
    from_page: from,
    to_page: to,
    session_id: sessionStorage.getItem('pitch_session_id'),
  });
};

/**
 * Get visitor statistics (for display purposes)
 */
export const getVisitorStats = () => {
  return {
    visitCount: parseInt(localStorage.getItem('pitch_visit_count') || '1'),
    firstVisit: localStorage.getItem('pitch_first_visit'),
    lastVisit: localStorage.getItem('pitch_last_visit'),
    currentSessionId: sessionStorage.getItem('pitch_session_id'),
    sessionDuration: getSessionDuration(),
  };
};
