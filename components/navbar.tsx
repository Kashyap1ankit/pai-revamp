"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Contact } from "lucide-react";
import { instrument } from "@/lib/fonts";
import { navItems } from "@/lib/constant";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrollable, setScrollable] = useState(false);

  useEffect(() => {
    function handleScrolling() {
      if (window.scrollY > 10) {
        return setScrollable(true);
      }
      setScrollable(false);
    }

    window.addEventListener("scroll", handleScrolling);
  }, []);

  return (
    <div
      className={`flex justify-between items-center fixed top-8 left-1/2 -translate-x-1/2 w-3/4  py-4 duration-300 z-50 ${
        isScrollable
          ? "backdrop-blur-lg bg-white/30 p-2 rounded-md border "
          : ""
      }`}
    >
      <Link href={"/"} className="w-1/3">
        <Image
          src={"/logo.png"}
          width={200}
          height={200}
          alt="logo"
          className="w-24 "
        />
      </Link>

      <div className="flex justify-start items-center gap-12  w-1/3">
        {navItems.map((e, i) => {
          return (
            <Link
              key={i}
              href={e.link}
              className={`${instrument.className} text-gray-500 `}
            >
              {e.name}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-12 w-1/3">
        <Link
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSc4XPjHJ3EZDaiDgs5ze1xyVWHnlxpF4fSnHdkzAYxuMl4ABw/viewform"
          }
        >
          <Button className="bg-white rounded-full text-black border hover:bg-white py-6 cursor-pointer">
            <p className={`${instrument.className} text-lg`}>Contact Us</p>
          </Button>
        </Link>

        <Link
          href={
            "https://api.whatsapp.com/send/?phone=%2B919998881729&text&type=phone_number&app_absent=0"
          }
          target="_blank"
          className="group"
        >
          <Button className="bg-primary-btn rounded-full  text-white hover:bg-primary-btn flex gap-2 items-center py-6 cursor-pointer">
            <p className={`${instrument.className} text-lg`}>Talk to Puch</p>
            <ArrowRight className=" size-8  text-black rounded-full bg-white p-2 group-hover:translate-x-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
