import { space } from "@/lib/fonts";
import {
  ChevronRight,
  Instagram,
  Linkedin,
  Mail,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" px-4 sm:px-6 lg:px-8">
      <div className=" flex flex-col sm:flex-row justify-between items-center gap-6">
        <Image
          src={"/logo.png"}
          width={100}
          height={100}
          alt="logo"
          className="rounded-md mb-4"
        />

        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-8">
          <div className="flex gap-6">
            <Link href={"https://x.com/puch_ai"} aria-label="Twitter">
              <TwitterIcon />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/puch-ai/"}
              aria-label="LinkedIn"
            >
              <Linkedin />
            </Link>
            <Link
              href={"https://www.instagram.com/officialpuch.ai/"}
              aria-label="Instagram"
            >
              <Instagram />
            </Link>
          </div>
        </div>
      </div>

      <hr className="border mt-6 border-zinc-300" />

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-6">
        <Link href={"mailto:hello@puch.ai"}>
          <div className="flex items-center justify-center p-4 rounded-full w-fit gap-4 bg-primary-btn text-white">
            <Mail />
            <p className={`${space.className}`}>hello@puch.ai</p>
            <ChevronRight className="size-4" />
          </div>
        </Link>

        <div
          className={`${space.className} flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-gray-500 text-center`}
        >
          <Link href={"/"}>Terms & Conditions</Link>
          <Link href={"/"}>Privacy Policy</Link>
          <Link
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSc4XPjHJ3EZDaiDgs5ze1xyVWHnlxpF4fSnHdkzAYxuMl4ABw/viewform"
            }
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
