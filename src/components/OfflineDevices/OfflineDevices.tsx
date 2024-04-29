import React from 'react'
import Devices from './Devices'
import arrow from "../../assets/icon.png"
import yellowarrow from "../../assets/yellow.png"
import smoke from "../../assets/smoke.png"

const OfflineDevices = () => {
    const iconMapping = {
        smoke: smoke
       
    };

    const imageMapping = {
        arrow: arrow,
        yellowarrow: yellowarrow,
    };
  return (
<>

<div className='m-4'>
<div className='w-[100%] h-[2rem] bg-[#01337C] text-white p-1  font-small text-[18px] rounded flex items-center'>Offline Devices</div>
  <ul>
  {Devices.map((device) => (
    <li key={device.issue}  className={`w-[100%] h-[5rem] bg-[${device.bg}] mt-2 items-center flex rounded border-1 border-[#FF9900] flex-col gap-1`} style={{backgroundColor:device.bg,borderWidth:'1px',borderColor:'#FF9900'}} >
        <div className=' w-[100%] h-[50%] flex  mt-2 justify-between '>
        <div className='flex flex-row gap-2 ml-2 order-1'>
        <img className="h-6 w-6" src={iconMapping[device.im]} alt="" /> 
                   <div  style={{color:device.text}}>{device.issue}</div>
        </div>
        <div className='order-2 mr-2 flex flex-row gap-1' style={{color:device.text}}>
            <div>Building {device.building} - Unit {device.unit}</div>
            <img className="h-6 w-6" src={imageMapping[device.imm]} alt="" /> 
        </div>
        </div>
       <div className='justify-between h-[50%] w-[98%] bg-[#ffff] my-2 rounded flex flex-row space-between  '>
       <div className='order-1 flex flex-row gap-2 items-center text-xs ml-1'>
       <div className='text-sm text-[#FF9900] ' >OFFLINE TIME:</div>
       <div className='text-[#5C626E]'>{device.offlineTime}</div>
       </div>
       <div className='order-2 flex flex-row gap-2 items-center text-xs mr-1'>
       <div className='text-sm  text-[#FF9900] '>OFFLINE SINCE </div>
       <div className='text-[#5C626E]'>{device.offlineSince}</div>
       </div>
       </div>

    </li>
))}

   
  </ul>
</div>
  </>

  )
}

export default OfflineDevices