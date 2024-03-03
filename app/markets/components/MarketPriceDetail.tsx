import React from 'react';

const MarketPriceDetail = ({color}:{color:string}) => {
  const generateRows = (start: number, end: number, color: string) => {
    const rows = [];
    for (let i = start; i <= end; i++) {
      const price :any = (19967.98 - i * 100).toFixed(2);
      const amount:any  = (0.10016 - i * 0.001).toFixed(5);
      rows.push(
        <tr
          key={i}
          className={` hover:bg-gray-50 dark:hover:bg-gray-600`}
        >
          <td
            className={`${
              i % 18 === 0 ? '' : 'text-red'
            }  ${
              i % 18 === 0 ? '' : 'font-medium'
            } whitespace-nowrap px-4 ${color}`}
            scope="row"
          >
            {price}
          </td>
          <td className={` hover:bg-gray-200 text-gray-500`}>{amount}</td>
        </tr>
      );
    }
    return rows;
  };

  const rows = [
    ...generateRows(0, 15, color),
  ];

  return (
    <div className="relative overflow-x-auto  ">
      <table className=" text-sm tex-right rtl:text-right text-gray-500 dark:text-gray-400">

        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default MarketPriceDetail;
