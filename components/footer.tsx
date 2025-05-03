import { instrument } from "@/lib/fonts";
import { Instagram, Linkedin, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-12 px-4 sm:px-6 lg:px-8">
      <hr className="border" />
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
    </footer>
  );
}
