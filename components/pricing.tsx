"use client";

import { pricing, sideward } from "@/lib/constant";
import { instrument, space } from "@/lib/fonts";
import { motion } from "motion/react";
import DottedBackground from "./ui/dotted-bg";
import { Button } from "./ui/button";
import { ChevronRight, CircleCheck, CircleX } from "lucide-react";

export default function Pricing() {
  return (
    <motion.div
      initial={sideward.initial}
      whileInView={sideward.animate}
      viewport={{ once: true }}
      className="w-full px-4 md:w-3/4 mx-auto"
      id="pricing"
    >
      <p className={`${space.className} text-4xl sm:text-5xl text-center`}>
        Our Pricing <span className="text-primary-btn">Plans</span>
      </p>

      <div className="flex flex-col md:flex-row mt-16 md:mt-20 gap-8 md:gap-12 items-center justify-center">
        {pricing.map((e, i) => (
          <DottedBackground key={i}>
            <div className="z-20 p-6 w-full max-w-[400px]">
              <p
                className={`${instrument.className} text-2xl sm:text-3xl font-bold`}
              >
                {e.plan}
              </p>
              <p
                className={`${instrument.className} mt-2 sm:mt-4 text-sm sm:text-md font-bold text-gray-500`}
              >
                {e.BestFor}
              </p>

              <div className="p-6 sm:p-8 rounded-2xl bg-white mt-6 sm:mt-8 w-full">
                <p className={`${space.className} text-xl sm:text-2xl`}>
                  {e.price}
                </p>
                <p className={`${instrument.className} text-gray-500 mt-2`}>
                  Billed monthly. Cancel Anytime
                </p>
                <Button className="w-full bg-primary-btn rounded-full py-6 sm:py-8 flex justify-center gap-4 items-center my-6 sm:my-8">
                  <p className={`${space.className} text-base sm:text-xl`}>
                    Start Subscription
                  </p>
                  <ChevronRight className="size-5 sm:size-6 text-white" />
                </Button>
                <p className={`${space.className} text-xl sm:text-2xl`}>
                  What&apos;s Included
                </p>

                <div className="flex flex-col gap-4 mt-4 sm:mt-6">
                  {e.features.map((each, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-4">
                      {each.applicable ? (
                        <CircleCheck className="fill-green-400 text-white" />
                      ) : (
                        <CircleX className="fill-gray-400 text-white" />
                      )}
                      <p
                        className={`${
                          instrument.className
                        } text-sm sm:text-lg ${
                          each.applicable
                            ? "text-gray-600"
                            : "line-through text-gray-400"
                        }`}
                      >
                        {each.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DottedBackground>
        ))}
      </div>
    </motion.div>
  );
}
