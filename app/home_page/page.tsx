import React from 'react'
import Banner from '@/app/home_page/Components/Banner'
import WhoWeAre from '@/app/home_page/Components/WhoWeAre'
import WhyChooseUs from '@/app/home_page/Components/WhyChooseUs/WhyChooseUs'
import Team from '@/app/home_page/Components/Team/Team'
import NavBar from '../components/NavBar'
import CommentSection from './Components/CommentSection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <section className="relative overflow-hidden" style={{ backgroundImage: "url('../img/banner/banner_bg.jpg')" }}>
  <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-opacity-0 via-opacity-0 to-opacity-100" style={{ backgroundImage: 'url(/img/banner/banner_bg02.jpg)' }}></div>
  <div className="relative z-10 padding-top-120">
    
    <NavBar/>
    
    <Banner/>
    
    <WhoWeAre
          heading='Trading Platiform'
          subHeading='. Who We are .'
          title="Build By <span>Traders</span>, For <span>Traders</span>."
          content={""}
          image={"/img/images/who-we-are-chart.png"} 
          />
    <WhyChooseUs>

    </WhyChooseUs>
    <WhoWeAre
          heading=''
          subHeading=''
          title="<span>Trading</span> Bot"
          content={"Trading bot use the Deep learning based Algorithms to take decision and predict NSDAQ stock market’s prices and help you to grow up your funds with absolute precision.  "}
          image={"/img/images/robot.png"} 
          />
    <Team team_members={[]}/>
    <CommentSection/>
    <Footer/>
    </div>
    </section>
  )
}

export default HomePage