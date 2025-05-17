import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MenuPage from './pages/MenuPage';
import PlaceholderPage from './pages/PlaceholderPage';
import Filter from './components/Filter';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="app__content">
          <Filter />
          <Routes>
            <Route path="/menu" element={<MenuPage />} />
            <Route path="*" element={<PlaceholderPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
