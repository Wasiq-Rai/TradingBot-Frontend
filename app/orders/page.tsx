import Footer from '@/app/components/Footer'
import NavBar from '@/app/components/NavBar'
import React from 'react'
import TradePriceHeader from './components/TradeStockPriceHeader'
import OrderViewArea from './components/OrderView/OrderViewArea'

const page = () => {
  return (

    <section className="relative px-16 overflow-hidden" style={{ backgroundImage: "url('/img/banner/banner_bg.jpg')" }}>
        <NavBar/>
        <TradePriceHeader/>
        <OrderViewArea/>
        <Footer/>

     </section>   
  )
}

export default page