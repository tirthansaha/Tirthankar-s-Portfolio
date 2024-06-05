import { motion } from "framer-motion"

//variants
const StairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%","0%"]
    },
}

//calculate reverse index for staggered delay

const reverseIndex = (index: number) => {
    const totalSteps=6
    return totalSteps-index-1
}

const Stairs = () => {
  return (
    <>
    {/* render 6 motion divs, each represents a step of the stairs.
    each div will have the same animation defined by stairAnimation obj.
    the  delay for each div is calculated dynamically based on reverse index
    which forms a staggered effect with decreasing delay for each subsequent step. */}
    
    {[...Array(6)].map((_,index)=> {
        return(
        <motion.div key={index} variants={StairAnimation} initial="initial" animate="animate" exit="exit" 
        transition={{
            duration: "0.2",
            ease: "easeInOut",
            delay: reverseIndex(index)*0.1,
        }} 
        className="h-full w-full bg-[#1c1c22] relative"
        />
        )
    })
    }
    
    </>

    )
}

export default Stairs