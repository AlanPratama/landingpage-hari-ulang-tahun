import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { RiLayout } from './layouts/RiLayout';
import { Splash } from './pages/Splash';
import './custom.css';
import { Gallery } from './pages/Gallery';
import { Sejarah } from './pages/Sejarah';
import { Pahlawan } from './pages/Pahlawan';
import { EnigmaLayout } from './layouts/EnigmaLayout';
import { HomeEnigma } from './pages/enigma/HomeEnigma';
import './custom.css';
import { DefaultPage } from './pages/DefaultPage';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/ri" element={<RiLayout><Home /></RiLayout>} />
        <Route path="/ri/pahlawan" element={<RiLayout><Pahlawan /></RiLayout>} />
        <Route path="/ri/sejarah" element={<RiLayout><Sejarah /></RiLayout>} />
        <Route path="/ri/gallery" element={<Gallery />} />


        <Route path="/enigma" element={<EnigmaLayout><HomeEnigma/></EnigmaLayout>} />

      </Routes>
    </Router>
  );
}

export default App;
