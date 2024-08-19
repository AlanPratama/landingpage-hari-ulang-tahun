import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { RiLayout } from './layouts/RiLayout';
import { Gallery } from './pages/Gallery';
import { Sejarah } from './pages/Sejarah';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RiLayout><Home /></RiLayout>} />
        <Route path="/ri/gallery" element={<Gallery />} />
        <Route path="/ri/sejarah" element={<RiLayout><Sejarah /></RiLayout>} />
        <Route path="/about" element={<RiLayout><About /></RiLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
