"use client";

import { upward, whyPuch } from "@/lib/constant";
import { instrument, space } from "@/lib/fonts";
import Image from "next/image";
import { motion } from "motion/react";

export default function WhyPuch() {
  return (
    <div className="flex flex-col gap-20 mx-auto px-4">
      {whyPuch.map((e, i) => {
        const isReversed = i % 2 !== 0;

        return (
          <motion.div
            key={i}
            className={`flex flex-col ${
              isReversed ? "md:flex-row-reverse" : "md:flex-row"
            } gap-8 md:gap-12 items-center`}
            initial={upward.initial}
            whileInView={upward.animate}
            viewport={{ once: true }}
          >
            <Image
              src={e.image}
              width={500}
              height={500}
              alt="why-puch-image"
              className="w-full max-w-[400px] rounded-2xl bg-white p-4 border shadow-2xl"
            />

            <div className="text-center md:text-left max-w-xl">
              <p
                className={`${space.className} text-4xl sm:text-5xl text-primary-btn`}
              >
                0{i + 1}
              </p>
              <p
                className={`${space.className} text-2xl sm:text-3xl md:text-4xl font-bold mt-4`}
              >
                {e.title}
              </p>
              <p
                className={`${instrument.className} text-gray-500 mt-2 text-sm sm:text-base`}
              >
                {e.des}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
