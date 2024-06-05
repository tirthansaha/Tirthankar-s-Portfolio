"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.3, duration: 0.5, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* Circle around DP */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[350px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00CED1" //circle color
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.3, duration: 0.5, ease: "easeInOut" },
          }}
          className="w-[280px] h-[280px] xl:w-[480px] xl:h-[480px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
        >
          <Image
            src="/illustrator_portrait_grey.png"
            priority
            quality={100}
            fill
            alt="Profile Picture"
            className="object-contain rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
