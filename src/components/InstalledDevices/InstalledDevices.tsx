import fire from "../../assets/firehollow.png"
import cosensor from "../../assets/cosensor.png"
import tempsensor from "../../assets/tempsensor.png"
import watermeters from "../../assets/watermeters.png"
import arrow from "../../assets/arrow.png"
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const InstalledDevices = () => {

  const {isLargeScreen } = useSelector((state: RootState) => state.screenSize);

  const iconMapping = {
   fire:fire,
   cosensor:cosensor,
   tempsensor:tempsensor,
   watermeters:watermeters

   
};

 const devices= [
    {
      "device_type": "Fire Alarms",
      "count": 134,
      "icon":"fire"
    },
    {
      "device_type": "CO Sensors",
      "count": 123,
      "icon":"cosensor"
    },
    {
      "device_type": "Temp/Humidity Sensors",
      "count": 121,
      "icon":"tempsensor"
    },
    {
      "device_type": "Water Meters",
      "count": 19,
      "icon":"watermeters"
    }
  ]
  
  return (
    <>
    <div className='bg-[##EDF1F7] w-[100%]  sm:w-full xs:w-full rounded-lg justify-center flex flex-col items-center '>
    <div className={`w-[95%] h-[2rem] bg-[#01337C] text-white p-1  font-small text-[18px] rounded flex items-center ${isLargeScreen ? 'mt-3' : ''}`}>Installed Devices</div>

    <table className={`w-[95%] divide-y divide-gray-200 border-separate border-spacing-y-3 mb-[10px] mt-[1px] ${isLargeScreen ? 'mx-[10px]' : ''}`}>
        <tbody className="divide-y divide-gray-200">
          {devices.map((item, index) => (
            <tr key={index} className="bg-[#FFFFFF] h-[42px]">
<td style={{ lineHeight: '3px', borderTopLeftRadius: '0.75rem', borderBottomLeftRadius: '0.75rem' }} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#5C626E] flex flex-row gap-2 items-center pl-1 rounded-l-xl">
              <img className="h-6 w-6" src={iconMapping[item.icon]} alt="" />                 
            <div>    {item.device_type}</div>
                
                </td>
              <td style={{ lineHeight: '3px' }} className=" rounded-r-xl xl:pl-6 lg:pl-6 sm:px-2 xs:px-2 py-4 whitespace-nowrap text-sm font-medium text-[#01337C] pr-1 ">
                <div className="flex flex-row items-center gap-2">
                <div>{item.count}</div>
                <img className="h-6 w-6" src={arrow} alt="" />

                </div>
                </td>
               </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
  
  )
}

export default InstalledDevices