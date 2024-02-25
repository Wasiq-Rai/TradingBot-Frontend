import React from 'react'
import Banner from '@/app/components/Banner'
import WhoWeAre from '@/app/components/WhoWeAre'
import Background from '@/app/components/Background'
import WhyChooseUs from '@/app/components/WhyChooseUs'
import TeamOne from '@/app/components/Team'
import Team from '@/app/components/Team'
import NavBar from '../components/NavBar'

const HomePage = () => {
  return (
    <section className="banner-bg relative overflow-hidden">
  <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-opacity-0 via-opacity-0 to-opacity-100" style={{ backgroundImage: 'url(/img/banner/banner_bg02.jpg)' }}></div>
  <div className="relative z-10 padding-top-120">
    
    <NavBar/>
    
    <Banner/>
    <WhoWeAre
          title="Build By <span>Traders</span>, For <span>Traders</span>."
          content={""}
          image={"/img/images/who-we-are-chart.png"} 
          />
    <WhyChooseUs>

    </WhyChooseUs>
    <WhoWeAre
          title="<span>Trading</span> Bot"
          content={"Trading bot use the Deep learning based Algorithms to take decision and predict NSDAQ stock market’s prices and help you to grow up your funds with absolute precision.  "}
          image={"/img/images/robot.png"} 
          />
    <Team team_members={[]}>
      
    </Team>
    </div>
    </section>
  )
}

export default HomePage