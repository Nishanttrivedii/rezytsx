import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/FireAlarm/Navbar';
import BuilNavbar from './components/Building/BuilNavbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/firealarm" element={<Navbar/>}/>
        <Route path="/building" element={<BuilNavbar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
