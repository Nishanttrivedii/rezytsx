import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Unit from './Unit/Unit';
// import Navbar from "../src/components/FireAlarm/Navbar"
import BuilNavbar from './components/Building/BuilNavbar';
// import FireAlarmNav from './components/FireAlarm/FireAlarmNav';
import TopNavBar from './components/TopNavBar';
import FireAlarm from "./components/FireAlarm/FireAlarm"

function App() {
  return (
    <BrowserRouter>
    <TopNavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unit" element={<Unit />} />
        <Route path="/firealarm" element={<FireAlarm/>}/>
        <Route path="/building" element={<BuilNavbar/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
