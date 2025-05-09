"use client";

import { motion } from "motion/react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { blurIn, people } from "@/lib/constant";
import { instrument, samarank, space } from "@/lib/fonts";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="overflow-hidden px-4 sm:px-6">
      {/* Top Bar */}
      <motion.div
        className="flex justify-center gap-4 sm:gap-6 items-center  bg-white shadow-xl w-full sm:w-fit rounded-full mx-auto px-2 md:px-6 py-2 md:py-4"
        initial={blurIn.initial}
        animate={blurIn.animate}
      >
        <motion.div
          className="flex items-center justify-center"
          initial={blurIn.initial}
          animate={blurIn.animate}
          transition={{ delay: 0.2, duration: 1.2 }}
        >
          <AnimatedTooltip items={people} />
        </motion.div>

        <motion.div
          initial={blurIn.initial}
          animate={blurIn.animate}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <Link
            href="https://api.whatsapp.com/send/?phone=%2B919998881729&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <p className={`${instrument.className} text-sm sm:text-base`}>
              Chat in 22 Indian Language
            </p>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        initial={blurIn.initial}
        animate={blurIn.animate}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <p className={`${space.className} text-4xl sm:text-5xl lg:text-7xl`}>
          Kuch bhi ho, bas AI se{" "}
          <span className={`text-primary-btn ${samarank.className}`}>
            Puch!
          </span>
        </p>

        <motion.p
          className={`${instrument.className} text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 max-w-xl sm:max-w-2xl mx-auto text-gray-600`}
          initial={blurIn.initial}
          animate={blurIn.animate}
          transition={{ delay: 0.8, duration: 1 }}
        >
          India&apos;s first AI assistant jo har samay aapki sewa mein hai –
          Aapka dost, aapka assistant, aapka AI.
        </motion.p>

        <motion.div
          initial={blurIn.initial}
          animate={blurIn.animate}
          transition={{ delay: 1.0, duration: 1 }}
          className="w-full sm:w-fit mx-auto"
        >
          <Link
            href="https://api.whatsapp.com/send/?phone=%2B919998881729&text&type=phone_number&app_absent=0"
            target="_blank"
            className="group inline-block"
          >
            <Button className="bg-primary-btn rounded-full text-white hover:bg-primary-btn flex gap-2 items-center py-6 px-8 mt-10">
              <p className={`${instrument.className} text-base sm:text-lg`}>
                Talk to Puch
              </p>
              <Image
                src="/whatsapp.svg"
                width={200}
                height={200}
                alt="whatsapp"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white p-1 sm:p-2 group-hover:scale-110"
              />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
