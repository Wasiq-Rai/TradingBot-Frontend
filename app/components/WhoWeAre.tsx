import React from "react";
import Section from "./Section";
import Background from "./Background";

const WhoWeAre = ({title,content,image}: { title: string, content: string, image: string }) => (
    <section id="about" className=" py-2 sm:py-20 lg:py-32">
      
      <div className="container">
        <div className="about-container row items-center "style={{ display: 'flex' }}>
          <div className="w-full md:w-1/2 lg:w-1/2">
            <div className="about-content" data-wow-delay=".2s">
              <div className="section-title mb-6">
                <span className="sub-title block text-lg font-medium text-gray-600">Who we are</span>
                
                <h2 className="title font-bold">
                <div dangerouslySetInnerHTML={{ __html: title }} />
                </h2>
                <p className="text-gray-600">{content}</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2">
            <div className="about-img" data-wow-delay=".2s">
              <img src={image} alt="" className="w-4/5 h-auto rounded-lg" />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )


export default WhoWeAre;