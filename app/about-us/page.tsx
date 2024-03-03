import React from 'react'
import NavBar from '../components/NavBar'
import Section from './components/Section'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden" style={{ backgroundImage: "url('../img/banner/banner_bg.jpg')" }}>

    <NavBar/>
    <Section
          heading='Trading Bot'
          subHeading=''
          title="<span>Nasdaq </span><span>Market</span>"
          content={"The stock market is the basis of the world economy, acting as an important source of investment, wealth creation, and economic growth. This huge financial ecosystem is a major factor in determining the financial landscape. With trillions of dollars moved every day across international exchanges, the vast number of transactions of stock market and money at risk is huge. By using modern deep learning models, we want to increase market efficiency. These algorithms will examine the market data to find complex patterns and trends that could otherwise go unnoticed."}
          image={"/img/images/about-us-logo.png"} 
    />
    <Section
          heading=''
          subHeading=''
          title="<span>Trading</span>"
          content={"We combine multiple deep learning models, each with distinct advantages and forecasting abilities, to create accurate predictions of the closing price of different stocks and analysis of the market. We improve the precision of our trading decision-making by this fusion technique in which, every model identifies the stock market patterns individually and when we combine the predictions taken place on different dimensional analysis of historical data of market, the overall results make more accurate predictions."}
          image={"/img/images/about-us-chart.png"} 
    />
    
    <Footer/>
   
    </section>
  )
}

export default AboutUs