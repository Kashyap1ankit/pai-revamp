"use client";

import { upward, whyPuch } from "@/lib/constant";
import { instrument, space } from "@/lib/fonts";
import Image from "next/image";
import { motion } from "motion/react";

export default function WhyPuch() {
  return (
    <div className="flex flex-col gap-20 mx-auto">
      {whyPuch.map((e, i) => {
        return (
          <motion.div
            key={i}
            className={`flex ${
              i % 2 !== 0 ? "flex-row-reverse" : "flex-row"
            }   gap-12 items-center`}
            initial={upward.initial}
            whileInView={upward.animate}
            viewport={{ once: true }}
          >
            <Image
              src={e.image}
              width={500}
              height={500}
              alt="whatsapp"
              className="min-w-[400px] max-h-[400px] rounded-2xl bg-white p-4 border shadow-2xl"
            />

            <div>
              <p className={`${space.className} text-7xl text-primary-btn `}>
                0{i + 1}
              </p>
              <p className={`${space.className} text-4xl font-bold mt-8 w-3/4`}>
                {e.title}
              </p>
              <p className={`${instrument.className} text-gray-500 mt-2 `}>
                {e.des}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

//   <div className=" flex justify-center items-center px-4">
//     <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
//       Build
//       <FlipWords words={texts} /> <br />
//     </div>
//   </div>
