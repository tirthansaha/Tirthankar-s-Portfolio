"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaMapMarkerAlt } from "react-icons/fa"
import {motion} from "framer-motion"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+88)01688510442"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tirthankar.sh37@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "102 Shantinagar, Dhaka - 1217"
  },
]


const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition:{delay:2.4, duration: 0.4, ease:"easeIn"} }} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 border-2 border-[#b2b2b2] rounded-xl"> {/* form border */}
              <h1 className="text-4xl font-semibold text-accent">Let's Work Together</h1>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="E-mail" />
                <Input type="phone" placeholder="Phone" />
              </div>
              {/* select */}
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="est">Graphics Design</SelectItem>
                    <SelectItem value="cst">Logo Design</SelectItem>
                    <SelectItem value="mst">Posters and Banners</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}
              {/* textarea */}
              <Textarea className="h-[200px]" placeholder="Type your message here" />
              {/* buttOn */}
              <div className="flex-1 flex items-center justify-center ">
              <Button size="md" className="min-w-30 max-w-40">Send Message</Button>
              <p className="flex-1 flex justify-center text-black/60">OR</p>
              <Button size="md" className="min-w-30 max-w-40"><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlJVXVjfGQfkfVrrtQXshLkxwZLsCPfpxlFJhgpNqTtQgQGFKpGdVXfQhWRgbHkMcLNlBq">Email Directly</a></Button>
              </div>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item,index)=>{
                return(
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#333333] hover:bg-accent text-white rounded-full flex items-center justify-center">
                      <div className="text-[20px]">{item.icon}</div>
                    </div>
                    <div>
                      <p className="text-black/60">{item.title}</p>
                      <h3 className="text-accent font-bold">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact