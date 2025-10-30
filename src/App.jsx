import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ConceptPage from './pages/ConceptPage';
import PrototypePage from './pages/PrototypePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/wrapped/concept" replace />} />
        <Route path="/wrapped/concept" element={<ConceptPage />} />
        <Route path="/wrapped/prototype" element={<PrototypePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
