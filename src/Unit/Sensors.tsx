
import sensorData from './Sensordata';
import danger from "../assets/warning.png"
import safe from "../assets/icon.png"
import full from "../assets/fullbattery.png"
import half from "../assets/halfbattery.png"
import low from "../assets/lowbattery.png"
import high from "../assets/hightemperature.png"
import humidity from "../assets/humidity.png"
import calender from "../assets/calender.png"
import right from "../assets/right.png"
import thumbnail from "../assets/thumbnail.png"
import back from "../assets/back.png"
const Sensors = () => {


    const dangerMapping = {
        danger:danger,
        safe:safe
       
    };

    const batteryMapping={
        full:full,
        half:half,
        low:low
    }

    const sensormapping={
        temperature:high,
        humidity:humidity
    }
    return (
        <>
       <div className='flex flex-row items-center gap-2'> <button><img src={back} className='h-6 w-6' alt="" /></button>
      <div className=''>  Unit 02</div></div>
        <ul className='gap-[2rem] flex flex-col p-4'>
    
    {
        sensorData.map((item,index)=>{
         return(
            <li className='bg-[white] flex flex-col gap-1 p-2 rounded-lg '>
            <div className='flex justify-between'   >   
            <div className='order-1'>
                 <div className='flex flex-row gap-2'>
                    {item.name_value_pairs[0]?.value >=40 || item.name_value_pairs[1]?.value >=40 ?
                    <img src={danger} className='h-6 w-6' alt="" />
                    :
                    <img src={right} className='h-6 w-6' alt="" />

                    }
    
     <div>{item.device_type}</div>
     <div className='text-[#5C626E]'>ID: {item.device_id}</div>
                 </div>
                 <div>
     
                 </div>
             </div>
     
             <div className='order-2 flex flex-row gap-1'>
                {item.battery_level==100 &&
                     <button className=' bg-[#00C17B] flex flex-row gap-1 items-center w-[70%] text-neutral-100 rounded-md'>
                     <img className="h-6 w-6" src={full} alt="" />
                     <div>Battery</div>
                     <div id="percentage">{item.battery_level}</div>
                 </button>
                }
                {item.battery_level==50 &&
                     <button className=' bg-[#FF9900] flex flex-row gap-1 items-center w-[70%] text-neutral-100 rounded-md'>
                     <img className="h-6 w-6" src={half} alt="" />
                     <div>Battery</div>
                     <div id="percentage">{item.battery_level}</div>
                 </button>
                }
                {item.battery_level==15 &&
                     <button className=' bg-[#F05348] flex flex-row gap-1 items-center w-[70%] text-neutral-100 rounded-md'>
                     <img className="h-6 w-6" src={low} alt="" />
                     <div>Battery</div>
                     <div id="percentage">{item.battery_level}</div>
                 </button>
                }
                 <button className='w-[5.5rem] h-[2.4rem]  bg-[#00C17B] text-white rounded-md'>{item.status}</button>
             </div>
            </div>
     
     
            <div className='flex flex-row justify-between'>
             <div className='order-1 flex flex-row gap-4'>
          {item.name_value_pairs[0]?.name ?
               <div className='h-[2.4rem] flex flex-row gap-2 p-2 items-center justify-center h-[2.2rem] text-[red] rounded-md' style={{ backgroundColor: item.name_value_pairs[0]?.name === 'Temperature' ? 'rgba(255, 87, 77, 0.24)' : '#EDF1F7',color : item.name_value_pairs[0]?.name === 'Temperature' ? 'red' : 'black'}}>                     <img  className="h-6 w-6" src={sensormapping.temperature} alt="" />
               <div>{item.name_value_pairs[0]?.name}</div>
               <div>{item.name_value_pairs[0]?.value} °C</div>
           </div>
           :
           <div className='h-[2.4rem] flex flex-row gap-2 p-2 items-center justify-center h-[2.2rem] text-[red] rounded-md' style={{ backgroundColor: '#EDF1F7',color : item.name_value_pairs[0]?.name === 'Temperature' ? 'red' : 'black'}}>                     <img  className="h-4 w-4" src={thumbnail} alt="" />
           <div>Name</div>
           <div>Value</div>
       </div>
          }
                 {item.name_value_pairs[1]?.name ?
                    <div className='flex flex-row gap-2 bg-[#FF574D] p-2 items-center justify-center h-[2.2rem] ' style={{backgroundColor:'#EDF1F7'}}>
                    <img  className="h-6 w-6" src={sensormapping.humidity} alt="" />
                    <div>{item.name_value_pairs[1]?.name}</div>
                    <div>{item.name_value_pairs[1]?.value}%</div>
                </div> 
                :
                <div className='h-[2.4rem] flex flex-row gap-2 p-2 items-center justify-center h-[2.2rem] text-[red] rounded-md' style={{ backgroundColor: '#EDF1F7',color : item.name_value_pairs[0]?.name === 'Temperature' ? 'red' : 'black'}}>                     <img  className="h-4 w-4" src={thumbnail} alt="" />
                <div>Name</div>
                <div>Value</div>
            </div>
                 }
                 <div>
     
                 </div>
     
             </div>
              <div className='order-2 flex flex-row bg-[#EDF1F7] p-1 text-[11px]'>
     <img  className="h-6 w-6" src={calender} alt="" />
     <div className='flex flex-col'>
     <div id="date">Feb 22,2024,</div>
     <div>09:27 PM</div>
     </div>
              </div> 
              </div>
         </li>
         )
        })
    }
        </ul>
  
        </>
    )
       
}

export default Sensors