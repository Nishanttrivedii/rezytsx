import React from 'react';

interface KPIData {
  KPI: string;
  T3: string | number;
  TGT: string | number;
  PROJECTION: string | number;
}

const KPI = () => {
  const data: KPIData[] = [
    { KPI: 'Gallons', T3: 1728, TGT: 1720, PROJECTION: 1357 },
    { KPI: 'Expenses', T3: '$652', TGT: '$651', PROJECTION: '$752' },
    { KPI: 'Revenue', T3: '$712', TGT: '$613', PROJECTION: '$616' },
    { KPI: 'P&L', T3: '$465', TGT: '$465', PROJECTION: '$465' },
  ];

  return (
    <>
      <div className='bg-white lg:w-[100%] xl:w-[50%] 2xl:w-[50%] sm:w-full xs:w-full rounded-lg w-[100%]'>
        <div className='m-2 text-[#01337C]'>KPI</div>
        <table className="w-[95%] divide-y divide-gray-200 border-separate border-spacing-y-3 md:m-4 lg:m-4 m-[10px]">
          <thead className="bg-[#01337C] text-white-800">
            <tr>
              <th scope="col" className="xl:px-6 lg:px-6 sm:px-2 xs:px-2 rounded-l-xl px-6 py-3 text-start text-xs font-medium uppercase text-white"></th>
              <th scope="col" className="xl:px-6 lg:px-6 sm:px-2 xs:px-2 py-3 text-start text-xs font-medium uppercase text-white">T-3</th>
              <th scope="col" className="xl:px-6 lg:px-6 sm:px-2 xs:px-2 py-3 text-start text-xs font-medium uppercase text-white">TGT</th>
              <th scope="col" className="xl:px-6 lg:px-6 sm:px-2 xs:px-2 py-3 text-start text-xs font-medium uppercase text-white rounded-r-xl">Projection</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="bg-[#EDF1F7]">
                <td style={{ lineHeight: '3px' }} className="rounded-l-xl px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{item.KPI}</td>
                <td style={{ lineHeight: '3px' }} className="xl:px-6 lg:px-6 sm:px-2 xs:px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{item.T3}</td>
                <td style={{ lineHeight: '3px' }} className="xl:px-6 lg:px-6 sm:px-2 xs:px-2 py-4 whitespace-nowrap text-sm text-gray-800">{item.TGT}</td>
                <td style={{ lineHeight: '3px' }} className="xl:px-6 lg:px-6 sm:px-2 xs:px-2 py-4 whitespace-nowrap text-sm text-gray-800 rounded-r-xl">{item.PROJECTION}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default KPI;
