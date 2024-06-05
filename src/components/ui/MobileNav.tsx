"use client";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {usePathname} from "next/navigation"
import Link from "next/link"
import {CiMenuFries} from "react-icons/ci"

const links=[
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },
]

const MobileNav = () => {
    const pathName = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-white"/>
        </SheetTrigger>

        <SheetContent className="flex flex-col bg-[#333333]">
            <div className="mt-32 mb-40 text-center text-2xl">  
            <h1 className="text-4xl font-semibold">T<span className='text-accent'>i</span>rthankar</h1> </div> {/* logo */}
            
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index)=>{
                    const isActive = link.path === pathName;
                    return <Link
                    href={link.path}
                    key={index}
                    className={`text-xl capitalize transition-all hover:text-accent ${
                      isActive ? "text-accent border-b-2 border-accent" : ""
                    }`}
                  >
                        {link.name}
                    </Link>
                })}
            </nav>

        </SheetContent>

    </Sheet>
  )
}

export default MobileNav