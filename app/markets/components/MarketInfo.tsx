import React from 'react'
import Duration from './Duration'
import MarketChart from './MarketChart'
import BuySellMarketChart from './BuySellMarketChart'
import MarketPriceDetail from './MarketPriceDetail'

const MarketInfo = () => {
  return (
    <div style={{backgroundColor:"#131C40"}} className='p-6 rounded-lg mb-10'>
  {/* Top row */}
  <div className="flex justify-between items-center">
    <h1 className="text-lg font-semibold">Duration</h1>
    <Duration/>
  </div>
  {/* Bottom row */}
  <div className="flex mt-4">
    {/* Left 2/3rd */}
    <div className="w-2/3 pr-2">
      <div className="mb-4">
      <MarketChart/>
      </div>
      {/* Bottom left */}
      <div>
        <h2 className="text-xl m-6 font-semibold">AAPL Inc. (AAPL)</h2>
        <p className='m-6'>Apple Inc. (AAPL) holds a significant position in the NASDAQ stock exchange, being one of its most influential and actively traded stocks. Its market capitalization, often hovering among the highest in the world, contributes substantially to the overall valuation of the NASDAQ. As a technology giant with a global presence and a history of strong financial performance, Apple's stock price movements frequently impact the NASDAQ Composite Index, which comprises numerous tech-focused companies. AAPL's performance is closely watched by investors and analysts due to its market capitalization, trading volume, and its representation of broader trends within the technology sector. The company's success and innovations often set the tone for market expectations and can influence the overall sentiment and performance of the NASDAQ.</p>
      </div>
    </div>
    {/* Right 1/3rd */}
    <div className="w-1/3 pt-10 bg-gray-200 rounded-lg p-2">
      {/* Name section */}
      <div>
        <BuySellMarketChart/>
      </div>
      {/* Buy and Sell sections */}
      <div className="flex  justify-between">
        {/* Buy section */}
        <div className="w-1/2  pr-2">
          <h3 className="text-lg ml-4 text-gray-500 font-semibold">Buy</h3>
          {/* Buy Chart Component */}
          <div>
            <MarketPriceDetail
            color='text-green-500'/>
          </div>
        </div>
        {/* Sell section */}
        <div className="w-1/2 pl-2">
          <h3 className="text-lg ml-4 text-gray-500 font-semibold">Sell</h3>
          {/* Sell Chart Component */}
          <div>
            <MarketPriceDetail
            color='text-red-500'/>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default MarketInfo