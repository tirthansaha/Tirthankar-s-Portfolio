"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator, SiUnrealengine, SiArduino, SiCanva, SiWondersharefilmora, SiTailwindcss, SiNextdotjs, SiBlender } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Myself",
  description: "A passionate and creative Graphic Designer with a Bachelor of Science in Computer Science and Engineering from BRAC University, I am seeking to leverage my expertise in graphic design, 3D modeling, and multimedia arts in a dynamic design environment.",
  info: [
    { fieldName: "Name:", fieldValue: "Tirthankar Saha Dibbya" },
    { fieldName: "Nationality:", fieldValue: "Bangladeshi" },
    { fieldName: "Address:", fieldValue: "Shantinagar, Dhaka-1217" },
    { fieldName: "Language:", fieldValue: "Bangla, English" },
    { fieldName: "Extracurriculum:", fieldValue: "Drawing, Painting, Robotics, IoT" },
    { fieldName: "Hobbies:", fieldValue: "Video Games, Crafting, Photography" },
  ]
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experiences",
  description: "",
  items: [
    {
      company: "ACROPAQ",
      position: "Illustrated Graphists",
      duration: "2022-2024"
    },
    {
      company: "Robotics Club of Brac University (ROBU)",
      position: "Secretary",
      duration: "2022-2024"
    },
    {
      company: "Brac University Computer Club (BUCC)",
      position: "Senior Executive",
      duration: "2021-2023"
    },
  ]
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description: "",
  items: [
    {
      institution: "Brac University",
      degree: "Bachelor of Science, Computer Science & Engineering",
      duration: "2020-2024"
    },
    {
      institution: "Adamjee Cantonment College",
      degree: "Higher Secondary Certificate",
      duration: "2018-2020"
    },
    {
      institution: "Ideal School & College",
      degree: "Secondary School Certificate",
      duration: "2013-2018"
    },
  ]
};

const skills = {
  title: "Skills",
  description: "",
  skillList: [
    {
      icon: <SiAdobephotoshop />,
      name: "Adobe Photoshop",
    },
    {
      icon: <SiAdobeillustrator />,
      name: "Adobe Illustrator",
    },
    {
      icon: <SiBlender />,
      name: "Blender",
    },
    {
      icon: <SiCanva />,
      name: "Canva",
    },
    {
      icon: <SiArduino />,
      name: "Arduino",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.Js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.CSS",
    },
    {
      icon: <SiUnrealengine />,
      name: "Unreal Engine",
    },
  ]
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.5,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Myself</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-[#1c1c22]">{experience.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-white border-2 h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent text-2xl">{item.position}</span>
                        <h3 className="max-w-[260px] min-h-[60px] text-center lg:text-left text-black/60">{item.duration}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-xl text-[#1c1c22]">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-[#1c1c22]">{education.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-white border-2 h-[240px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent text-2xl">{item.degree}</span>
                        <h3 className="max-w-[260px] min-h-[60px] text-center lg:text-left text-black/60">{item.duration}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-xl text-[#1c1c22]">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-[#1c1c22]">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#333333] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent asChild>
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="capitalize border-2 bg-[#1c1c22] rounded-md p-2"
                              >
                                {skill.name}
                              </motion.div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="about" className="wh-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-[#1c1c22]">{about.title}</h3>
                <h3 className="max-w-[600px] text-black mx-auto xl:mx-0">{about.description}</h3>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[700px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-5">
                      <span className="text-black/80">{item.fieldName}</span>
                      <span className="text-xl text-black font-semibold">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
