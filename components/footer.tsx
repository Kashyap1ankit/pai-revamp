import { instrument, space } from "@/lib/fonts";
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
    <footer className="mb-12 px-4 sm:px-6 lg:px-8">
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-6">
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
              <TwitterIcon className="" />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/puch-ai/"}
              aria-label="LinkedIn"
            >
              <Linkedin className="" />
            </Link>
            <Link
              href={"https://www.instagram.com/officialpuch.ai/"}
              aria-label="LinkedIn"
            >
              <Instagram className="" />
            </Link>
          </div>
        </div>
      </div>
      <hr className="border mt-2 border-zinc-300" />

      <div className="flex justify-between mt-6">
        <Link href={"mailto:hello@puch.ai"}>
          <div className="flex items-center justify-between p-4 rounded-full w-fit gap-4 bg-primary-btn text-white">
            <Mail />
            <p className={`${space.className}`}>hello@puch.ai</p>
            <ChevronRight className=" size-4" />
          </div>
        </Link>

        <div
          className={`${space.className} flex items-center gap-8 text-gray-500`}
        >
          <Link href={"/"}>Terms & Condition</Link>
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
    </footer>
  );
}
