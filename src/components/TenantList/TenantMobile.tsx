import tenant from "../../assets/tenantwhole.png";
import bluefilter from "../../assets/bluefilter.png"
import dust from "../../assets/delete.png"
import customerData from "./mobiletabledata"
const TenantMobile = () => {

 

  return (
<>  <div id="container" className="relative top-[6rem] m-2">
        <header className="flex justify-between items-center bg-[white] p-2 rounded">
          <div className="order-1  flex flex-row gap-2 items-center text-[#01337C]">
            <img className="h-4 w-4" src={tenant} alt="" />
            <div className="">Tenants</div>
            <div>405</div>
          </div>
          <div className="order-2 bg-[#C0D9FF] p-1 rounded">
            <img className="h-6 w-6" src={bluefilter} alt="" />
          </div>
        </header>
<div id="content" className="relative  mt-2">
          {customerData.map((customer, index) => (
           <>
            <div key={index} className="bg-white w-[100%] lg:w-[100%] xl:w-[50%] 2xl:w-[50%] sm:w-full xs:w-full rounded-lg mb-4">
            <div className="flex flex-row gap-4 items-center m-2 py-1">
            <div className="rounded-full bg-[#C0D9FF] flex  items-center justify-center h-8 w-8 p-2">{customer.name.slice(0,1)}</div>
              <h2>{customer.name}</h2> 
            </div>
              <hr className="m-2" />
              <table className="divide-y divide-gray-200 border-separate border-spacing-y-3 font-inter  m-4 w-[92%] ">
                <tbody className="divide-y divide-gray-200">
                  {customer.data.map((item, index) => (
                    <>
                    <tr key={index} className="bg-[#EDF1F7]">
                      <td
                        style={{ lineHeight: "3px" }}
                        className="rounded-l-xl xl:px-6 lg:px-6 sm:px-2 xs:px-2 py-4 whitespace-nowrap text-sm font-medium text-[#5C626E] font-inter"
                      >
                        {item.category}
                      </td>
                      <td
                        style={{ lineHeight: "3px" }}
                        className="xl:px-6 lg:px-6 sm:px-2 xs:px-2 py-4 whitespace-nowrap text-sm font-normal text-[black] font-inter flex justify-end rounded-r-xl "
                      >
                     {item.value }
                      </td>
                    </tr>
                    
                   
                    </>
                        
                  ))}
                </tbody>
              </table>
              <div className="flex flex-row justify-between items-center">
                      <button className="order-1 bg-[#01337C] text-white p-1 m-1 rounded text-sm"> Tenant</button>
                      <button className="order-2 h-6 w-6"> <img src={dust} className="h-5 w-4" alt="" /></button>
                    </div>
            </div>
             <hr className="m-2" />
             </>
          ))}
        </div>
</div>
</>
  )
}

export default TenantMobile