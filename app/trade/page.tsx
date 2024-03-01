import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import OrderForm from './components/OrderForms/Form'
import StockPriceHeader from './components/OrdersStockPriceHeader'
import OrderBook from './components/OrderBook'
import TradeChart from './components/Chart/TradeChart'
import OrderViewArea from './components/OrderView/OrderViewArea'
import MarketActivities from './components/MarketActivities'

const Orders = () => {
  return (
    <section className=" min-h-screen "style={{ backgroundImage: "url('/img/banner/banner_bg.jpg')" }}>
      <NavBar/>
      {/* Main Section */}
      <div className="h-2/3 w-full flex">
        {/* Upper Section */}
        <div className="w-full">
          {/* Horizontal Divisions */}
          <div className="h-full flex">
            {/* Left Section */}
            <div className=" flex flex-col w-4/5">
              {/* Top Subsection */}
              <div className="flex justify-center items-center">
                <StockPriceHeader/>
              </div>
              {/* Middle Subsection */}
              <div className="flex w-full">
                <TradeChart/>
              </div>
              {/* Bottom Subsection */}
              <div className="h-2/5 flex">
                {/* Subsections in Row */}
                <div className="w-1/2  flex justify-center items-center">
                <OrderForm
                buttonType='Buy'
                />
                </div>
                <div className="w-1/2 flex justify-center items-center">
                <OrderForm
                buttonType='Sell'
                />
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div className=" flex flex-col">
              {/* Upper Subsection */}
              <div className=" bg-purple-300  ">
                <OrderBook/>
              </div>
              {/* Bottom Subsection */}
              <div className="h-2/3   ">
                <MarketActivities/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Lower Section */}
      <div className="h-1/3 w-full ">
          <OrderViewArea/>
      </div>
      <Footer/>
    </section>
  )
}

export default Orders
