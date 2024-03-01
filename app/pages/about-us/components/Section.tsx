import React from "react";

const Section = ({ heading, subHeading ,title, content, image }: { heading: string, subHeading: string, title: string, content: string, image: string }) => (
  <section id="about" className="py-20 lg:py-32 px-12 relative">
    <div className="absolute top-0 left-0 w-full flex justify-center">
      <h1 className="text-3xl lg:text-4xl m-16 font-bold text-grey-300 py-2 px-4 rounded-lg uppercase relative">
        {heading}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-white"></span>
      </h1>
    </div>

    <div className="container mx-auto mt-12 px-6">
      <div className="flex pl-10 flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-12">
          <div className="text-center lg:text-left mb-6">
            <span className="text-lg font-semibold text-yellow-200 uppercase">{subHeading}</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white" dangerouslySetInnerHTML={{ __html: title }} />
          </div>
          <p className="text-gray-300 bg-blend-color-burn  text-lg">{content}</p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="about-img text-center lg:text-right" data-wow-delay=".2s">
            <img src={image} alt="" className="w-4/5 h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Section;
