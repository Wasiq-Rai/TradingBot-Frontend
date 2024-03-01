import React from 'react';
import Link from 'next/link'

const StockPriceHeader = () => {
    return (
        <div className="flex flex-row gap-4 w-full h-full">
            {/* First section */}
            <div className=" rounded-md shadow-md p-4">
                <div className="layout">
                    <div className="childrenContainer">
                        <div className="mb-4">
                            <h1 className="text-lg font-semibold text-white">AAPL/NASDAQ</h1>
                            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500">AAPL Price</Link>
                            
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* Second section */}
            <div className=" rounded-md shadow-md p-4 flex flex-wrap gap-4">
            <div className="tickerItem  p-2 rounded-md flex flex-col align-center">
                    <div className="tickerItemLabel text-green-300 text-xl">50,895.13</div>
                    <div className="tickerPriceText text-sm">
                        <div className="grid grid-rows-2">
                            <span className="text-green-500">H: 60,895.13</span>
                            <span className="text-red-500">L: 20,895.13</span>
                        </div>
                    </div>
                </div>
                <div className="tickerItem  p-2 rounded-md flex flex-col align-center">
                    <div className="tickerItemLabel text-gray-400 text-sm">24h Change</div>
                    <div className="tickerPriceText text-sm">
                        <div className="grid grid-rows-2">
                            <span className="text-red-500">-667.60</span>
                            <span className="text-red-500">-1.29%</span>
                        </div>
                    </div>
                </div>
                <div className="tickerItem  p-2 rounded-md flex flex-col align-center">
                    <div className="tickerItemLabel text-gray-400 text-sm">24h High</div>
                    <div className="tickerPriceText text-white text-sm">51,564.57</div>
                </div>
                <div className="tickerItem  p-2 rounded-md flex flex-col align-center">
                    <div className="tickerItemLabel text-gray-400 text-sm">24h Low</div>
                    <div className="tickerPriceText text-white text-sm">50,629.33</div>
                </div>
                <div className="tickerItem  p-2 rounded-md flex flex-col align-center">
                    <div className="tickerItemLabel text-gray-400 text-sm">24h Volume(AAPL)</div>
                    <div className="tickerPriceText text-white text-sm">30,833.86</div>
                </div>
                <div className="tickerItem  p-2 rounded-md flex flex-col align-center">
                    <div className="tickerItemLabel text-gray-400 text-sm">24h Volume(USDT)</div>
                    <div className="tickerPriceText text-white text-sm">1,574,921,700.30</div>
                </div>
            </div>
        </div>
    );
};

export default StockPriceHeader;
