import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { RiLayout } from './layouts/RiLayout';
import { Splash } from './pages/Splash';
import './custom.css';
import { Gallery } from './pages/Gallery';
import { Sejarah } from './pages/Sejarah';
import gambar1 from '../src/assets/tema_besar_1.jpg';
import gambar2 from '../src/assets/tema_besar_2.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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
