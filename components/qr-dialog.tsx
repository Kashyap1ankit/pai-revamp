"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QrCode, X } from "lucide-react";
import Image from "next/image";
import { space } from "@/lib/fonts";

export default function QrDialog() {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="fixed right-6 md:right-12 bottom-12 flex flex-col items-end z-50">
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative mb-3 bg-white p-4 rounded-xl shadow-xl border"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-0 cursor-pointer right-0 text-gray-500 hover:text-red-500"
            >
              <X size={20} />
            </button>

            <Image
              src="/qr.png"
              width={100}
              height={100}
              alt="whatsapp qr"
              className=""
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        onClick={() => setShowQR(true)}
        className="flex items-center gap-2 py-2 px-4 rounded-full border cursor-pointer bg-white shadow-xl"
      >
        <p className={`${space.className} text-xl text-primary-btn`}>Scan</p>
        <QrCode className="text-primary-btn animate-bounce" />
      </div>
    </div>
  );
}
