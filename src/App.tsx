import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Unit from './Unit/Unit';
import Navbar from './components/Navbar';
import BuilNavbar from './components/Building/BuilNavbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unit" element={<Unit />} />
        <Route path="/building" element={<BuilNavbar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
