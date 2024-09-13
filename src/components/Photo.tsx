"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import minhafoto from "@/app/img/Eu.jpeg";
const Photo = () => {
  console.log(minhafoto);
  return (
    <div className="w-full h-full relative rounded-full ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.1, ease: "easeIn" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.1, ease: "easeIn" }}
          className="w-full max-w-[298px] h-[298px] xl:max-w-[498px] xl:h-[498px] mix-blend-lighten absolute xl:ml-[100px] xl:mt-[px]"
        >
          <Image
            src={minhafoto}
            priority
            quality={100}
            alt="Minha Foto"
            width={300}
            height={300}
            className="object-contain rounded-full"
          />
        </motion.div>

        <motion.svg
          className={
            "w-full max-w-[300px]  xl:max-w-[498px] h-[300px] xl:h-[506px] "
          }
          viewBox={"0 0 300 300"}
          fill={"transparent"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <motion.circle
            cx={150}
            cy={150}
            r={150}
            stroke={"white"}
            strokeLinejoin={"round"}
            strokeLinecap={"round"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            fill={"url(#gradient)"}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4,258 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.circle>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
