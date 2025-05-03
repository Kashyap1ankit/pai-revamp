"use client";

import { faq, sideward } from "@/lib/constant";
import { instrument, space } from "@/lib/fonts";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <motion.div
      initial={sideward.initial}
      whileInView={sideward.animate}
      viewport={{ once: true }}
      className=" w-3/4  mx-auto"
    >
      <p className={`${space.className} text-5xl text-center`}>
        Explore Our Core <span className="text-primary-btn">Features</span>
      </p>

      <Accordion type="single" collapsible className="w-full mt-20 ">
        {faq &&
          faq.map((e, i) => {
            return (
              <AccordionItem value={`item-${i + 1}`} key={i}>
                <AccordionTrigger className={`${space.className} text-xl`}>
                  {e.question}
                </AccordionTrigger>
                <AccordionContent
                  className={`${instrument.className} text-gray-500`}
                >
                  {e.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
      </Accordion>
    </motion.div>
  );
}
