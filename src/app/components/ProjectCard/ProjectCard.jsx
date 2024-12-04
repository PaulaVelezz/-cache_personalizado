import React from 'react'
import Image from 'next/image';


const ProjectCard = ({ title, description, technologies, date, service, img_mockup }) => {
  return (
    <div className="lg:w-[480px] lg:h-[322px]">
        <div className="bg-yellow-100 border-4 border-black rounded-lg shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="p-6 space-y-4">
                <h2 className="text-3xl font-bebas text-red-600 uppercase tracking-wide">{title}</h2>
                <p className="text-lg font-grotesk font-medium text-gray-800">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((stack, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-bebas">
                            {stack}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center font-grotesk">
                    <p className="text-sm font-bold text-gray-600">date: <span className="text-black">{date}</span></p>
                    <p className="text-sm font-bold text-gray-600">service: <span className="text-black">{service}</span></p>
                </div>
            </div>
            <div className="relative h-64 w-full">
                {/* <Image
                src={img_mockup}
                alt={`Mockup de ${title}`}
                fill
                style={{objectFit: 'cover'}}
                className="border-t-4 border-black"
                /> */}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard