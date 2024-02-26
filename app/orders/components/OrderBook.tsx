import React from 'react';

const OrderBook = () => {
  const generateRows = (start: number, end: number, color: string) => {
    const rows = [];
    for (let i = start; i <= end; i++) {
      const price :any = (19967.98 - i * 100).toFixed(2);
      const amount:any  = (0.10016 - i * 0.001).toFixed(5);
      const total = (price * amount).toFixed(5);
      rows.push(
        <tr
          key={i}
          className={`${
            i % 18 === 0 ? 'text-xl' : 'text-sm'
          }  dark:bg-gray-800 dark:border-black hover:bg-gray-50 dark:hover:bg-gray-600`}
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
          <td className={`  text-white ${color}`}>{amount}</td>
          <td className={`  text-white ${color}`}>{total}</td>
        </tr>
      );
    }
    return rows;
  };

  const rows = [
    ...generateRows(0, 17, 'text-red-500'),
    ...generateRows(18, 35, 'text-green-500'),
  ];

  return (
    <div className="relative overflow-x-auto shadow-md bg-gray-900 ">
      <table className=" text-sm tex-right rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-1">
              Price (USDT)
            </th>
            <th scope="col" className="px-1">
              Amount (AAPL)
            </th>
            <th scope="col" className="px-1">
              Total
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default OrderBook;
