import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QrCode } from "lucide-react";
import Image from "next/image";

export default function QrDialog() {
  return (
    <div className="fixed right-12 bottom-12">
      <Dialog>
        <DialogTrigger>
          <QrCode className="size-12 p-1 rounded-full border cursor-pointer text-primary-btn" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <Image
                src={"/qr.png"}
                width={300}
                height={200}
                alt="whatsapp"
                className="w-full"
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
