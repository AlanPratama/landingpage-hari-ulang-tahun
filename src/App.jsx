import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { RiLayout } from './layouts/RiLayout';
import { Splash } from './pages/Splash';
import './custom.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path="/home" element={<RiLayout><Home /></RiLayout>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
