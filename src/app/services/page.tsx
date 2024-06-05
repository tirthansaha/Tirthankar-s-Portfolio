"use client"

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"
import {motion} from "framer-motion"

const services=[
  {
    num: "1.",
    title: "Graphics Designing",
    description: "Graphic designs, including vector graphics, portraits, landscapes, card designs.",
    href:""
  },
  {
    num: "2.",
    title: "Logo Design",
    description: "Professional and minimalistic Logo Designs for websites and brands.",
    href:""
  },
  {
  num: "3.",
  title: "Posters and Banners",
  description: "Eye catching posters and banners for events, stage banners, x-banners.",
  href:""
  },

]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity:1,
          transition: {delay:2, duration:0.5, ease:"easeIn"}
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index)=>{
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                <div className="text-2xl font-bold text-[#1c1c22]">{service.num}</div>
                <Link href={service.href}>
                  <BsArrowDownRight className="group-hover:text-accent transition-all duration-500 hover:-rotate-45"/>
                </Link>
                </div>
                <h2 className="text-3xl font-bold text-[#1c1c22] group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-black/50 font-bold">{service.description}</p>
                <div className="border-b border-black/30 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services