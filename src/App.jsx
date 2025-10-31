import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import ConceptPage from './pages/ConceptPage';
import PrototypePage from './pages/PrototypePage';
import MobileWarning from './components/MobileWarning';
import generateWrappedData from './data/mockData';

function App() {
  const [wrappedData, setWrappedData] = useState(null);

  useEffect(() => {
    const data = generateWrappedData();
    setWrappedData(data);
  }, []);

  if (!wrappedData) {
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <MobileWarning />
      <Routes>
        <Route path="/" element={<HomePage images={wrappedData.allImages} />} />
        <Route path="/wrapped/concept" element={<ConceptPage />} />
        <Route path="/wrapped/prototype" element={<PrototypePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
