import Photo from "@/components/ui/Photo"
import Social from "@/components/ui/Social"
import { Button } from "@/components/ui/button"
import Stats from "@/components/ui/Stats"
import {FiDownload} from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">  
            <h1 className="h1 text-black/70">Hello I'm <br/> <span className='text-accent '>Tirthankar Saha</span></h1>
            <span className='text-xl mb-4 block text-black/80'>Graphics, UX/UI Designer & Frontend Developer</span>
            <p className="max-w-[500px] mb-9 text-black/80">I am proficient in various graphic softwares, programming languages and technologies.</p>
            {/*social buttons*/}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button variant='outline' size='md' className='uppercase flex items-center gap-2 hover:bg-accent-hover'>
                <span><a href="https://drive.google.com/file/d/1z1NpKgia6p_H-yDuZRdmOFUa3s0_lx94/view?usp=sharing">Download CV</a></span>
                <FiDownload className='text-xl'/>
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Social containerStyles="flex gap-6" iconStyles="w-12 h-12 border border-black/80 rounded-full flex justify-center items-center text-xl text-black/80 hover:bg-accent hover:border-accent hover:text-primary hover:transition-all duration-300" />
              </div>
            </div>
          </div>
          {/*dp*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <p></p>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home