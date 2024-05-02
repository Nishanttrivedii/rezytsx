import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Unit from './Unit/Unit';
import Navbar from './components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { setSmallScreen, setLargeScreen } from './components/Slices/ScreenSizeSlice';
import { RootState } from './store';
import MobileNavbar from './components/MobileNavbar';
import MobileUnit from './Unit/MobileUnit';
import { useEffect } from 'react';
import MobileFooter from './components/MobileFooter';
import MobileHome from './components/MobileHome';
import HomeMoreInfo from './components/HomeMoreInfo';
import UnitMoreInfo from './Unit/UnitMoreInfo';
function App() {
  const { isLargeScreen } = useSelector((state: RootState) => state.screenSize);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        dispatch(setSmallScreen());
      } else {
        dispatch(setLargeScreen());
      }
    };

    handleResize(); // Initial check on mount

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);



  return (
  <>
   
    
    <BrowserRouter>
   {isLargeScreen ? <Navbar /> :<MobileNavbar />}
      <Routes>
       { isLargeScreen ? <Route path="/" element={<Home />} /> :  <Route path="/" element={<MobileHome />} /> }
       { isLargeScreen ? <Route path="/unit" element={<Unit />} /> :  <Route path="/unit" element={<MobileUnit />} /> }
        <Route path="/homemoreinfo" element ={<HomeMoreInfo />} /> 
        <Route path="/unitmoreinfo" element ={<UnitMoreInfo />} /> 


      </Routes>
      {isLargeScreen ? "" :<MobileFooter />}

    </BrowserRouter>
   
   </>
  );
}

export default App;
