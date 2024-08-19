import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { RiLayout } from './layouts/RiLayout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RiLayout><Home /></RiLayout>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
