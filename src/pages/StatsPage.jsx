import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ============================================
// CONFIGURATION: Add your Looker Studio URL here
// ============================================
// After creating your Looker Studio dashboard, paste the embed URL below.
// See LOOKER_STUDIO_SETUP.md for instructions.
// Example: 'https://lookerstudio.google.com/embed/reporting/YOUR-REPORT-ID/page/YOUR-PAGE-ID?rm=minimal'
const LOOKER_STUDIO_URL = import.meta.env.VITE_LOOKER_STUDIO_URL || '';
// ============================================

function StatsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Check if already authenticated (stored in sessionStorage)
  useEffect(() => {
    const authenticated = sessionStorage.getItem('stats_authenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'patapim') {
      setIsAuthenticated(true);
      sessionStorage.setItem('stats_authenticated', 'true');
      setError('');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('stats_authenticated');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div style={styles.loginContainer}>
        <div style={styles.loginBox}>
          <h1 style={styles.title}>Pinterest Pulse Stats</h1>
          <p style={styles.subtitle}>Analytics Dashboard</p>
          <form onSubmit={handleLogin} style={styles.form}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={styles.input}
              autoFocus
            />
            {error && <p style={styles.error}>{error}</p>}
            <button type="submit" style={styles.button}>
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.dashboard}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.dashboardTitle}>Pinterest Pulse Analytics</h1>
          <p style={styles.dashboardSubtitle}>Pitch Performance Dashboard</p>
        </div>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </header>

      <div style={styles.content}>
        {/* Quick Stats Cards */}
        <div style={styles.statsGrid}>
          <StatCard
            title="Total Visitors"
            value="—"
            subtitle="Unique sessions"
            icon="👥"
          />
          <StatCard
            title="Return Visits"
            value="—"
            subtitle="Repeat viewers"
            icon="🔄"
          />
          <StatCard
            title="Avg. Session"
            value="—"
            subtitle="Time on site"
            icon="⏱️"
          />
          <StatCard
            title="Completion Rate"
            value="—"
            subtitle="Finished experience"
            icon="✅"
          />
        </div>

        {/* Google Analytics Embed Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Google Analytics Dashboard</h2>
          <div style={styles.gaEmbed}>
            {LOOKER_STUDIO_URL ? (
              // Show embedded Looker Studio dashboard if configured
              <iframe
                src={LOOKER_STUDIO_URL}
                style={styles.iframe}
                frameBorder="0"
                allowFullScreen
                title="Analytics Dashboard"
              />
            ) : (
              // Show setup instructions if not configured
              <div style={styles.placeholder}>
                <h3 style={styles.placeholderTitle}>📊 Connect Google Analytics</h3>
                <p style={styles.placeholderText}>
                  To view live analytics data, you have two options:
                </p>
                <ol style={styles.placeholderList}>
                  <li>
                    <strong>View in GA4:</strong> Visit{' '}
                    <a
                      href="https://analytics.google.com/analytics/web/#/p418517405/reports/intelligenthome"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.link}
                    >
                      Google Analytics Dashboard
                    </a>
                  </li>
                  <li>
                    <strong>Embed Dashboard:</strong> Follow the{' '}
                    <a
                      href="https://github.com/G3dar/pinterest/blob/main/LOOKER_STUDIO_SETUP.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.link}
                    >
                      Looker Studio Setup Guide
                    </a>
                  </li>
                </ol>
                <p style={styles.placeholderNote}>
                  Property ID: G-PB7TMM99WV
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Key Metrics for Pitch */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Pitch-Specific Insights</h2>
          <div style={styles.metricsGrid}>
            <MetricBox
              title="Referral Sources"
              description="How people found this page"
              items={[
                { label: 'Direct Link', value: '—' },
                { label: 'Email Forward', value: '—' },
                { label: 'Social Share', value: '—' },
              ]}
            />
            <MetricBox
              title="Engagement Depth"
              description="User interaction levels"
              items={[
                { label: 'Started Experience', value: '—' },
                { label: 'Completed All Phases', value: '—' },
                { label: 'Shared Results', value: '—' },
              ]}
            />
            <MetricBox
              title="Visit Patterns"
              description="When people are viewing"
              items={[
                { label: 'Peak Hour', value: '—' },
                { label: 'Most Active Day', value: '—' },
                { label: 'Avg. Session Duration', value: '—' },
              ]}
            />
          </div>
        </div>

        {/* Instructions */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>📈 Next Steps</h2>
          <div style={styles.instructions}>
            <p>To get real-time data on this dashboard, you can:</p>
            <ul>
              <li>Use the Google Analytics dashboard directly (linked above)</li>
              <li>Set up Google Analytics 4 Looker Studio for custom reports</li>
              <li>Implement a backend tracking solution for detailed session data</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              <strong>Current tracking:</strong> Page views, sessions, and custom events are being tracked via Google Analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function StatCard({ title, value, subtitle, icon }) {
  return (
    <div style={styles.statCard}>
      <div style={styles.statIcon}>{icon}</div>
      <div style={styles.statContent}>
        <div style={styles.statValue}>{value}</div>
        <div style={styles.statTitle}>{title}</div>
        <div style={styles.statSubtitle}>{subtitle}</div>
      </div>
    </div>
  );
}

function MetricBox({ title, description, items }) {
  return (
    <div style={styles.metricBox}>
      <h3 style={styles.metricTitle}>{title}</h3>
      <p style={styles.metricDescription}>{description}</p>
      <div style={styles.metricItems}>
        {items.map((item, index) => (
          <div key={index} style={styles.metricItem}>
            <span style={styles.metricLabel}>{item.label}</span>
            <span style={styles.metricValue}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles
const styles = {
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  loginBox: {
    background: 'white',
    borderRadius: '12px',
    padding: '3rem',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    maxWidth: '400px',
    width: '90%',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.875rem',
    fontSize: '1rem',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  button: {
    padding: '0.875rem',
    fontSize: '1rem',
    fontWeight: '600',
    color: 'white',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
  error: {
    color: '#e53e3e',
    fontSize: '0.875rem',
    marginTop: '-0.5rem',
  },
  dashboard: {
    minHeight: '100vh',
    background: '#f7f8fa',
  },
  header: {
    background: 'white',
    padding: '2rem',
    borderBottom: '1px solid #e0e0e0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dashboardTitle: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    margin: 0,
  },
  dashboardSubtitle: {
    fontSize: '0.875rem',
    color: '#666',
    margin: '0.25rem 0 0 0',
  },
  logoutButton: {
    padding: '0.5rem 1.5rem',
    fontSize: '0.875rem',
    color: '#666',
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  content: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '2rem',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  statCard: {
    background: 'white',
    borderRadius: '12px',
    padding: '1.5rem',
    display: 'flex',
    gap: '1rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  statIcon: {
    fontSize: '2.5rem',
  },
  statContent: {
    flex: 1,
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  statTitle: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#666',
    marginTop: '0.25rem',
  },
  statSubtitle: {
    fontSize: '0.75rem',
    color: '#999',
  },
  section: {
    background: 'white',
    borderRadius: '12px',
    padding: '2rem',
    marginBottom: '2rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '1.5rem',
  },
  gaEmbed: {
    minHeight: '400px',
    background: '#f7f8fa',
    borderRadius: '8px',
    border: '2px dashed #e0e0e0',
    overflow: 'hidden',
  },
  iframe: {
    width: '100%',
    minHeight: '800px',
    height: '100%',
    border: 'none',
    borderRadius: '8px',
  },
  placeholder: {
    padding: '3rem',
    textAlign: 'center',
  },
  placeholderTitle: {
    fontSize: '1.5rem',
    color: '#1a1a1a',
    marginBottom: '1rem',
  },
  placeholderText: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '1.5rem',
  },
  placeholderList: {
    textAlign: 'left',
    maxWidth: '600px',
    margin: '0 auto 1.5rem',
    lineHeight: '1.8',
    color: '#444',
  },
  placeholderNote: {
    fontSize: '0.875rem',
    color: '#999',
    fontFamily: 'monospace',
    background: '#f0f0f0',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    display: 'inline-block',
  },
  link: {
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: '600',
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  metricBox: {
    padding: '1.5rem',
    background: '#f7f8fa',
    borderRadius: '8px',
  },
  metricTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '0.5rem',
  },
  metricDescription: {
    fontSize: '0.875rem',
    color: '#666',
    marginBottom: '1rem',
  },
  metricItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  metricItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metricLabel: {
    fontSize: '0.875rem',
    color: '#444',
  },
  metricValue: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#667eea',
  },
  instructions: {
    fontSize: '0.95rem',
    color: '#444',
    lineHeight: '1.8',
  },
};

export default StatsPage;
