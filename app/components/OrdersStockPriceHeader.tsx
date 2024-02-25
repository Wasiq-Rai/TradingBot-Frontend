import React from 'react';

const StockPriceHeader = () => {
    return (
        <div className="stock-header flex flex-row gap-4">
            {/* First section */}
            <div className="flex-grow bg-blue-100 rounded-md shadow-md p-4">
                <div className="layout">
                    <div className="childrenContainer">
                        <div className="mb-4">
                            <h1 className="text-lg font-semibold text-blue-700">AAPL/NASDAQ</h1>
                            <a href="https://www.binance.com/en/price" target="_blank" rel="noopener noreferrer" className="text-blue-500">AAPL Price</a>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="bg-blue-500 text-blue-700 rounded-md p-1 mr-1">POW</span>
                                <span className="bg-blue-500 text-white rounded-md p-1">Vol</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="showPrice text-2xl font-bold text-black">50,895.13</div>
                        <div className="subPrice text-blue-700">$50,895.13</div>
                    </div>
                </div>
            </div>

            {/* Second section */}
            <div className="flex-grow bg-blue-100 rounded-md shadow-md p-4">
                <div className="tickerListContainer">
                    <div className="tickerList grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="tickerItem bg-blue-200 p-2 rounded-md">
                            <div className="tickerItemLabel text-blue-700">24h Change</div>
                            <div className="tickerPriceText">
                                <div className="grid grid-rows-2">
                                    <span className="text-red-500">-667.60</span>
                                    <span className="text-red-500">-1.29%</span>
                                </div>
                            </div>
                        </div>
                        <div className="tickerItem bg-blue-200 p-2 rounded-md">
                            <div className="tickerItemLabel text-blue-700">24h High</div>
                            <div className="tickerPriceText text-blue-700">51,564.57</div>
                        </div>
                        <div className="tickerItem bg-blue-200 p-2 rounded-md">
                            <div className="tickerItemLabel text-blue-700">24h Low</div>
                            <div className="tickerPriceText text-blue-700">50,629.33</div>
                        </div>
                        <div className="tickerItem bg-blue-200 p-2 rounded-md">
                            <div className="tickerItemLabel text-blue-700">24h Volume(AAPL)</div>
                            <div className="tickerPriceText text-blue-700">30,833.86</div>
                        </div>
                        <div className="tickerItem bg-blue-200 p-2 rounded-md">
                            <div className="tickerItemLabel text-blue-700">24h Volume(USDT)</div>
                            <div className="tickerPriceText text-blue-700">1,574,921,700.30</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StockPriceHeader;
