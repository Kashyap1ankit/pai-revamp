"use client";

import { motion } from "motion/react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { blurIn, people } from "@/lib/constant";
import { instrument, space } from "@/lib/fonts";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="overflow-hidden">
      {/* Top Bar */}
      <motion.div
        className="flex justify-start gap-6 items-center px-6 py-2 bg-white shadow-xl w-fit rounded-full mx-auto"
        initial={blurIn.initial}
        animate={blurIn.animate}
      >
        <motion.div
          className="flex flex-row items-center justify-center"
          initial={blurIn.initial}
          animate={blurIn.animate}
          transition={{ delay: 0.2, duration: 1 }}
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
            <p className={`${instrument.className}`}>
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
        <p className={`${space.className} text-7xl`}>
          Kuch bhi ho, bas AI se <span className="text-primary-btn">Puch!</span>
        </p>

        <motion.p
          className={`${instrument.className} text-xl mt-8 w-1/2 mx-auto text-gray-600`}
          initial={blurIn.initial}
          animate={blurIn.animate}
          transition={{ delay: 0.8, duration: 1 }}
        >
          India&apos;s first AI assistant jo har samay aapki sewa mein hai Aapka
          dost, aapka assistant, aapka AI
        </motion.p>

        <motion.div
          initial={blurIn.initial}
          animate={blurIn.animate}
          transition={{ delay: 1.0, duration: 1 }}
        >
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=%2B919998881729&text&type=phone_number&app_absent=0"
            }
            target="_blank"
            className="group"
          >
            <Button className="bg-primary-btn rounded-full text-white hover:bg-primary-btn flex gap-2 items-center py-6 cursor-pointer mx-auto mt-12">
              <p className={`${instrument.className} text-lg`}>Talk to Puch</p>

              <Image
                src={"/whatsapp.svg"}
                width={200}
                height={200}
                alt="whatsapp"
                className="size-8 rounded-full bg-white p-2 group-hover:scale-110"
              />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
