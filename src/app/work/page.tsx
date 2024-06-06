"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaGoogleDrive } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "1",
    category: "Graphics Design",
    title: "Vector art, Portrait, Banners, Posters",
    description: "Created images of various office products, stationery, and electronics for international online markets and ACROPAQ site. Also created various facebook posts, images, x-banner, posters for various Club Projects.",
    stack: [{ name: "Photoshop" }, { name: "Illustrator" }, { name: "GIMP" }, { name: "Paint.Net" }],
    image: "/vector-01.png",
    gdrive: "https://drive.google.com/drive/u/1/folders/1MqT0cxdsU15wcjsGv6c3TNxkmI9o9K8L",
    github: "",
  },
  {
    num: "2",
    category: "3D Graphics Design",
    title: "3D Rendered Models",
    description: "Created multiple 3D models i.e, 3D Chair, 3D Polygon Car, 3D Minecraft Block and an environment with a game engine",
    stack: [{ name: "Blender" }, { name: "Unreal Engine" }],
    image: "/blender-01.png",
    gdrive: "https://drive.google.com/drive/u/1/folders/1xJNaGs-J69oOuHJLSQfJhrunLxp114UY",
    github: "",
  },
  {
    num: "3",
    category: "Game Project",
    title: "Project Ruin",
    description: "Created a first person shooting game titled Project Ruin, implementing basic engine mechanics and blueprints",
    stack: [{ name: "Unreal Engine" }],
    image: "/projectruin-01.png",
    gdrive: "https://drive.google.com/drive/u/1/folders/1EMtnos9Y5TVIGUbHS1JxS8SHdEQGf5Xn",
    github: "",
  },
  {
    num: "4",
    category: "Frontend Project",
    title: "Tirthankar's Portfolio",
    description: "Formed a dynamic portfolio website by utilizing next.js",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Framer Motion" }],
    image: "/portfoliosite-01.png",
    gdrive: "",
    github: "https://github.com/tirthansaha",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: { activeIndex: any; }) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-bold text-[#333333]">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-[#333333] hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <div className="border border-black/30"></div>
              <h2 className="text-[30px] font-semibold leading-none text-black/60">
                &apos;{project.title}&apos;
              </h2>
              
              <p className="text-black/70">{project.description}</p>
              
              <ul className="flex gap-4 font-bold">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name} {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-black/30"></div>
              <div className="flex items-center gap-4">
                {project.gdrive && (
                  <Link href={project.gdrive} passHref>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/10 flex justify-center items-center group">
                          <FaGoogleDrive className="text-black text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Google Drive</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {project.github && (
                  <Link href={project.github} passHref>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/10 flex justify-center items-center group">
                          <BsGithub className="text-black text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] realtive group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right rounded-full bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="rounded-full bg-[#808080] hover:bg-accent-hover text-primary text-[22px] w-[40px] h-[40px] flex justify-center items-center transition-all" iconStyles={undefined} />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
