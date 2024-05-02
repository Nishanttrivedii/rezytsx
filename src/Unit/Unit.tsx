import WaterUsageUnitWise from './WaterUsageUnitWise';
import InstalledDevicesUnitwise from './InstalledDevicesUnitwise';
import UnitInfo from './UnitInfo';
import Sensors from './Sensors';
const Unit = () => {
  return (
 <>
 <div className='flex flex-row bg-[#D8DFEA] gap-3 '>
 <div className="bg-[#EDF1F7] w-[calc(100%-25rem)]  h-[fit-content] my-4 ml-4 rounded-md" id="sensors">
     <Sensors />
    </div>

    <div id="unit details" className='bg-[#EDF1F7] w-[25rem] h-[fit-content] my-4 mr-4 rounded-md'>
<UnitInfo />
<InstalledDevicesUnitwise/>
<WaterUsageUnitWise />
    </div>
 </div>
 </>
  )
}

export default Unit