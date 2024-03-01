import React from 'react'
import SearchBar from './components/SearchBar'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import StockCard from './components/StockCard'
import MarketInfo from './components/MarketInfo'

const Markets = () => {
  return (
    <section className="relative px-16 overflow-hidden" style={{ backgroundImage: "url('../img/banner/banner_bg.jpg')" }}>
        <NavBar/>
        <SearchBar/>
        <StockCard
            logo_url="../img/logo/AAPLlogo.png"
            longName="AAPL"
            symbol="AAPL.inc"
            regularMarketPrice={18200.232}
            regularMarketChangePercent={2.5}
/>
        <MarketInfo/>

        <Footer/>
    </section>
  )
}

export default Markets