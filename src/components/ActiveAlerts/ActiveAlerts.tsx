import React from 'react'
import fire from "../../assets/fire.png"
import arrow from "../../assets/icon.png"
import yellowarrow from "../../assets/yellow.png"
import drop from "../../assets/drop.png"
import Alerts from './Alerts.js'
const ActiveAlerts = () => {
    const iconMapping = {
        fire: fire,
        drop: drop,
    };

    const imageMapping = {
        arrow: arrow,
        yellowarrow: yellowarrow,
    };
  return (
  <>
<div className='m-4'>
<div className='w-[100%] h-[2rem] bg-[#01337C] text-white p-1 font-[inter] font-small text-[18px] rounded flex items-center'>Active Alerts</div>
  <ul>
  {Alerts.map((alert) => (
    <li key={alert.issue}  className={`w-[100%] h-[3rem] bg-[${alert.bg}] mt-2 items-center flex rounded justify-between`} style={{backgroundColor:alert.bg}} >
        <div className='flex flex-row gap-2 ml-2 order-1'>
        <img className="h-6 w-6" src={iconMapping[alert.im]} alt="" /> 
                   <div  style={{color:alert.text}}>{alert.issue}</div>
        </div>
        <div className='order-2 mr-2 flex flex-row gap-1' style={{color:alert.text}}>
            <div>Building {alert.building} - Unit {alert.unit}</div>
            <img className="h-6 w-6" src={imageMapping[alert.imm]} alt="" /> 
        </div>
    </li>
))}

   
  </ul>
</div>
  </>
  )
}

export default ActiveAlerts