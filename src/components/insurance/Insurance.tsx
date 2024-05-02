
const Insurance = () => {
 const data= [
    {
      "category": "Average Occupancy",
      "value": "86% (-5%)"
    },
    {
      "category": "Eviction",
      "value": "8% (+5%)"
      
    },
    {
      "category": "Unregistered Vehicle",
      "value": 234,
      // No change indicator needed for numerical values
    },
    {
      "category": "Vacant Alerts",
      "value": 234,
 // No change indicator needed for numerical values
    },
    {
      "category": "Curfew Activity",
      "value": 0,
     // No change indicator needed for zero value
    }
  ]
  
  return (
  <div className='bg-white w-[100%] lg:w-[100%] xl:w-[50%] 2xl:w-[50%] sm:w-full xs:w-full rounded-lg '>
    <div className='m-2 text-[#01337C]'>Insurance Index</div>
      <table className=" divide-y divide-gray-200 border-separate border-spacing-y-3 font-inter  m-4 w-[92%] ">
    
    <tbody className="divide-y divide-gray-200">
      {data.map((item, index) => (
        <tr key={index} className="bg-[#EDF1F7]">
          <td style={{lineHeight:'3px'}} className="rounded-l-xl xl:px-6 lg:px-6 sm:px-2 xs:px-2 py-4 whitespace-nowrap text-sm font-medium text-[#5C626E] font-inter">{item.category}</td>
          <td style={{lineHeight:'3px'}}  className="xl:px-6 lg:px-6 sm:px-2 xs:px-2 py-4 whitespace-nowrap text-sm font-medium text-[#01337C] font-inter flex justify-end">
            {typeof item.value === 'string' ? item.value : item.value.toString()} 
          </td>
          
        </tr>
      ))}
    </tbody>
  </table>
  </div>
  );
}

export default Insurance