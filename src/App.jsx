import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { RiLayout } from './layouts/RiLayout';
import TemaBesar from './components/TemaBesar';
import gambar1 from '../src/assets/tema_besar_1.jpg';
import gambar2 from '../src/assets/tema_besar_2.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  const slides = [
    {
      imageSrc: gambar1,
      title: "Tema Besar",
      subtitle: '"Nusantara Baru Indonesia Maju "',
    },
    {
      imageSrc: gambar2,
      title: "Tema Besar",
      subtitle: 'HUT ke-79 RI merupakan sebuah batu loncatan besar bagi Indonesia, karena mengalami 3 transisi penting, yaitu menyongsong Ibu Kota baru, pergantian pemimpin, serta Indonesia Emas 2045.',
    },
  ];


  return (
    <Router>
      <Routes>
        <Route path="/" element={<RiLayout>
          <Home />
          <TemaBesar slides={slides} />
          </RiLayout>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
