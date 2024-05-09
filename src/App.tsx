import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Unit from './components/Unit/Unit';
import Navbar from './components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { setSmallScreen, setLargeScreen } from './components/Slices/ScreenSizeSlice';
import { RootState } from './store';
import MobileNavbar from './components/MobileNavbar';
import MobileUnit from './components/Unit/MobileUnit';
import { useEffect } from 'react';
import MobileFooter from './components/MobileFooter';
import MobileHome from './components/MobileHome';
import HomeMoreInfo from './components/HomeMoreInfo';
import UnitMoreInfo from './components/Unit/UnitMoreInfo';
import TenantList from './components/TenantList/TenantList';
import TenantMobile from './components/TenantList/TenantMobile';
import Building from './components/Buildings/Buildings';
import BuildingMobile from './components/Buildings/BuildingMobile';
import BuilNav from './components/Building/BuilNav';
import FireAlarm from './components/FireAlarm/FireAlarm';
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
        {isLargeScreen ? <Navbar /> : <MobileNavbar />}
        <Routes>
          {isLargeScreen ? <Route path="/" element={<Home />} /> : <Route path="/" element={<MobileHome />} />}
          {isLargeScreen ? <Route path="/unit" element={<Unit />} /> : <Route path="/unit" element={<MobileUnit />} />}
          <Route path="/homemoreinfo" element={<HomeMoreInfo />} />
          <Route path="/unitmoreinfo" element={<UnitMoreInfo />} />
          {isLargeScreen ? <Route path="/tenant" element={<TenantList />} /> : <Route path="/tenant" element={<TenantMobile />} />}
          {isLargeScreen ? <Route path="/buildings" element={<Building />} /> : <Route path="/buildings" element={<BuildingMobile />} />}
          {/* <Route path="/buildings/:propertyId" */}
          <Route path="/building/:buildingId" element={<BuilNav />} />
          <Route path="/firealarm" element={<FireAlarm />}></Route>



        </Routes>
        {isLargeScreen ? "" : <MobileFooter />}

      </BrowserRouter>

    </>
  );
}

export default App;
