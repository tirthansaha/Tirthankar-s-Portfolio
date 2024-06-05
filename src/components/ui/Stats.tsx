"use client";

import CountUp from "react-countup"

const stats=[
    {
        num: 3,
        text: "Years of experience in Graphics Designing",
    },
    {
        num: 4,
        text: "Years of experience in Python",
    }
]

const Stats = () => {
  return (
    <section className="pt-3 xl:pt-0"> 
        <div className="container mx-auto text-black/80">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index)=>{
                    return (
                        <div className="flex-1 flex gap-4 items-center justify-center xl-justify-start" key={index}>
                        <CountUp end={item.num} 
                        duration={3} 
                        delay={1} 
                        className="text-6xl xl:text-5xl font-extrabold" />
                        <p className={'${item.text.length<15 ? "max-w-[100px]" : "max-w-[150px]"}'}>{item.text}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats