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
      className=" w-3/4  mx-auto"
      id="pricing"
    >
      <p className={`${space.className} text-5xl text-center`}>
        Our Pricing <span className="text-primary-btn">Plans</span>
      </p>

      <div className="flex  mt-20 gap-12">
        {pricing.map((e, i) => {
          return (
            <DottedBackground>
              <div className="z-20 p-6 w-[400px] " key={i}>
                <p className={`${instrument.className} text-3xl font-bold`}>
                  {e.plan}
                </p>
                <p
                  className={`${instrument.className} mt-4 text-md font-bold text-gray-500`}
                >
                  {e.BestFor}
                </p>

                <div className="p-8 rounded-2xl bg-white mt-8 w-full">
                  <p className={`${space.className} text-2xl`}>{e.price}</p>
                  <p className={`${instrument.className} text-gray-500 mt-2`}>
                    Billed monthly. Cancel Anytime
                  </p>
                  <Button className="w-full bg-primary-btn rounded-full py-8 flex justify-center gap-4 items-center my-8">
                    <p className={`${space.className} text-xl`}>
                      Start Subscription
                    </p>
                    <ChevronRight className="size-6 text-white" />
                  </Button>
                  <p className={`${space.className} text-2xl `}>
                    What&apos;s Included
                  </p>

                  <div className="flex flex-col gap-4 mt-6">
                    {e.features.map((each, i) => {
                      return (
                        <>
                          {each.applicable ? (
                            <div className="flex gap-2 items-center gap-4">
                              <CircleCheck className="fill-green-400 text-white" />
                              <p
                                className={`${instrument.className} text-lg text-gray-600`}
                              >
                                {each.title}
                              </p>
                            </div>
                          ) : (
                            <div className="flex gap-2 items-center gap-4">
                              <CircleX className="fill-gray-400 text-white" />
                              <p
                                className={`${instrument.className} line-through text-lg text-gray-400`}
                              >
                                {each.title}
                              </p>
                            </div>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </DottedBackground>
          );
        })}
      </div>
    </motion.div>
  );
}
