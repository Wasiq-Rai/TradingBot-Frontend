import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Header from './components/Header'
import PricingCards from './components/PriceCards/PricingCards'

const Pricing = () => {
  return (
    <section className="relative overflow-hidden" style={{ backgroundImage: "url('../img/banner/banner_bg.jpg')" }}>
      <NavBar/>
      <Header/>
      <PricingCards/>
      <Footer/>
    </section>
  )
}

export default Pricing