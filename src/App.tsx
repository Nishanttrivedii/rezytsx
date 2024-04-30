import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './Component1/FireAlarmCompo/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/firealarm" element={<Navbar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
