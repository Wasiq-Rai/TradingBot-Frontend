import React from 'react'



const Section = ({ title,content, image }: { title: string, content: string, image: string }) => (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="section-content">
              <h2 className="text-3xl font-bold mb-4">{title}</h2>
              <p className="text-gray-600">{content}</p>
            </div>
          </div>
          <div className="w-full md:w-1/ px-3">
            <div className="section-image">
              <img src={image} alt={title} className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

export default Section