import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import ConceptPage from './pages/ConceptPage';
import PrototypePage from './pages/PrototypePage';
import StatsPage from './pages/StatsPage';
import MobileWarning from './components/MobileWarning';
import generateWrappedData from './data/mockData';
import { trackPageView, initSessionTracking } from './utils/analytics';

// Component to track page views on route changes
function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location]);

  return null;
}

function App() {
  const [wrappedData, setWrappedData] = useState(null);

  useEffect(() => {
    const data = generateWrappedData();
    setWrappedData(data);

    // Initialize pitch-specific session tracking
    initSessionTracking();
  }, []);

  if (!wrappedData) {
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <PageViewTracker />
      <MobileWarning />
      <Routes>
        <Route path="/" element={<HomePage images={wrappedData.allImages} />} />
        <Route path="/wrapped/concept" element={<ConceptPage />} />
        <Route path="/wrapped/prototype" element={<PrototypePage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
