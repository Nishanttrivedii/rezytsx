import tenant from "../../assets/tenantwhole.png"
import bluefilter from "../../assets/bluefilter.png"
import tableData from "./TableData";
import box from "../../assets/box.png"
import dustbin from "../../assets/dustbin.png"
import beldon from "../../assets/belldon.png"
import unit from "../../assets/unit.png"
import divide from "../../assets/break.png"



const TenantList = () => {



  interface Header {
    name: string;
  }

  const tableHeaders: Header[] = [
    { name: "NAME" },
    { name: "ROLE" },
    { name: "JOINED" },
    { name: "PHONE" },
    { name: "EMAIL" },
    { name: "PROPERTY" },
    { name: "ACTION" },
  ];
  return (
    <>
      <div className="bg-[#EDF1F7]  flex flex-col mb-4 mx-4 rounded-t-lg relative top-[6rem]">
        <header className="flex flex-row justify-between bg-[white]  h-[3rem] rounded-t-lg items-center px-1">
          <div className="flex flex-row gap-1 order-1 items-ceter justify-center">
            <img src={tenant} alt="" className="h-6 w-6" />
            <div className="text-[#01337C]">Tenant List</div>
          </div>

          <div className='flex flex-row gap-1 order-2'>
            <button id="sortBy " className="flex flex-row items-center gap-2 justify-center bg-[#C0D9FF] p-1 rounded items-center justify-center">
              <div className="bg-[#C0D9FF]">SORT BY</div>
              <img className="h-6 w-6 " id="filter" src={bluefilter} alt="" />
            </button>
            <div id="count"></div>
          </div>
        </header>
        <div id="content" className="">
          <>
            <div className=' lg:w-[100%]  2xl:w-[100%] sm:w-full xs:w-full rounded-lg w-[100%] flex justify-center'>
              <table className="w-[95%] divide  -y divide-gray-200 border-separate border-spacing-y-3 md:m-4 lg:m-4 m-[10px] ">
                <thead className="bg-[#01337C] text-white-800 " style={{background: 'linear-gradient(231.98deg, #01337C 28.19%, #013A8C 28.2%, #013A8C 96.59%, #00C17B 119.39%)',
}}>
                  <tr className="">
                    {tableHeaders.map((header) => (
                      <th
                        key={header.name} // Important for performance
                        scope="col"
                        className= {` ${header.name=="NAME" && "rounded-l-lg"}  ${header.name=="ACTION" && "  rounded-r-lg text-end"} xl:px-6 lg:px-6 sm:px-2 xs:px-2 py-3 text-start text-xs font-medium uppercase text-white`} 
                      >
                        {header.name}

                      </th>
                    ))}

                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tableData.map((item, index) => (
                    <tr key={index} className="bg-[white]">
                      <td style={{ lineHeight: '3px',color:'rgba(0, 0, 0, 0.8)' }} className="rounded-l-xl px-6 py-4 whitespace-nowrap text-sm font-sm ">{item.name}</td>
                      <td style={{ lineHeight: '3px',color:'rgba(0, 0, 0, 0.8)' }} className="xl:px-6 lg:px-6 sm:px-2 xs:px-2 py-4 whitespace-nowrap text-sm font-sm "><div className="bg-[#EDF1F7] h-[2rem] items-center flex justify-center">{item.role}</div></td> {/* Use item.role from data */}
                      <td style={{ lineHeight: '3px',color:'rgba(0, 0, 0, 0.8)' }} className="xl:px-6 lg:px-6 sm:px-2 xs:px-2 py-4 whitespace-nowrap text-sm ">{item.joined}</td>
                      <td style={{ lineHeight: '3px',color:'rgba(0, 0, 0, 0.8)' }} className="xl:px-6 lg:px-6 sm:px-2 xs:px-2 py-4 whitespace-nowrap text-sm  ">{item.phone}</td>
                      <td style={{ lineHeight: '3px',color:'rgba(0, 0, 0, 0.8)' }} className="xl:px-6 lg:px-6 sm:px-2 xs:px-2 py-4 whitespace-nowrap text-sm ">{item.email}</td>
                      <td style={{ lineHeight: '3px',color:'rgba(0, 0, 0, 0.8)' }} className="xl:px-6 lg:px-6 sm:px-2 xs:px-2 py-4 whitespace-nowrap text-sm ">
                        <div className="flex flex-row gap-2 bg-[#EDF1F7] h-[2.5rem] items-center justify-center rounded w-[fit-content] p-2">
                        <div className="flex flex-row gap-1 items-center text-[rgba(92, 98, 110, 0.7)]">
                        <img className="h-4 w-4" src={beldon} alt="" />
                        <div style={{color:'rgba(92, 98, 110, 0.7)'}} className="text-[rgba(92, 98, 110, 0.7)]">{item.property.beldon}</div>
                        </div>
                        <img className="h-4 " src={divide} alt="" />

                        <div className="flex flex-row gap-1 items-center text-[rgba(92, 98, 110, 0.7)]">
                        <img className="h-4 w-4" src={unit} alt="" />
                        <div  style={{color:'rgba(92, 98, 110, 0.7)'}}  className="text-[rgba(92, 98, 110, 0.7)]">{item.property.unit}</div>
                        </div>
                        </div>
                        </td>
                      <td style={{ lineHeight: '3px' }} className="xl:px-6 lg:px-6 sm:px-2 xs:px-2 py-4 whitespace-nowrap text-sm text-gray-800 rounded-r-xl flex justify-end items-center"><div className="flex flex-row gap-2"><img className="h-6 w-6" src={dustbin} alt="" /><img className="h-6 w-6" src={box} alt="" /></div></td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        </div>
      </div>
    </>
  )
}

export default TenantList