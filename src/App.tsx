import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MenuPage from './pages/MenuPage';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/menu" element={<MenuPage />} />
          <Route path="*" element={<PlaceholderPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
