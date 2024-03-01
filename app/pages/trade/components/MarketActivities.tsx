import React from 'react';

const MarketActivities = () => {
  // Dummy data for market activities
  const marketActivities = [
    { symbol: 'MSFT', price: 171.72, pnl: '+2.121%', trend: 'Rally' },
    { symbol: 'AAPL', price: 148.96, pnl: '-1.214%', trend: 'Decline' },
    { symbol: 'GOOGL', price: 2716.94, pnl: '+0.753%', trend: 'Rally' },
    { symbol: 'AMZN', price: 3352.53, pnl: '-0.675%', trend: 'Decline' },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Market Activities</h2>
      <div className="flex flex-col space-y-2">
        {marketActivities.map((activity, index) => (
          <div
            key={index}
            className={`flex items-center justify-between px-4 py-2 rounded-md ${
              index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'
            }`}
          >
            <div className="flex items-center">
              <span className="mr-2 font-semibold">{activity.symbol}</span>
              <span className="text-gray-500 dark:text-gray-400">{activity.price}</span>
            </div>
            <div className={`flex items-center ${activity.pnl.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
              <span className="mr-2 font-semibold">{activity.pnl}</span>
              <span>
                {activity.trend === 'Rally' ? (
                  <svg
                    className="w-4 h-4 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketActivities;
