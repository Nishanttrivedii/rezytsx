import WaterUsageUnitWise from './WaterUsageUnitWise';
import InstalledDevicesUnitwise from './InstalledDevicesUnitwise';
import UnitInfo from './UnitInfo';
import Sensors from './Sensors';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Unit = () => {
  const [unitData,setUnitData]=useState([]);

  async function getUnitData(){
   const response = await axios.get("http://localhost:8080/unit/info/1");
   setUnitData(response.data);
   debugger
  }


  useEffect(()=>{getUnitData()},[])



  return (
 <>
 <div className='flex flex-row bg-[#D8DFEA] gap-3 relative top-[5rem]'>
 <div className="bg-[#EDF1F7] w-[calc(100%-25rem)]  h-[fit-content] my-4 ml-4 rounded-md" id="sensors">
     <Sensors unitData={unitData} />
    </div>

    <div id="unit details" className='bg-[#EDF1F7] w-[25rem] h-[fit-content] my-4 mr-4 rounded-md'>
<UnitInfo unitData={unitData} />
<InstalledDevicesUnitwise unitData={unitData}/>
<WaterUsageUnitWise  />
    </div>
 </div>
 </>
  )
}

export default Unit