import { cn } from "@/lib/utils";

export default function DottedBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-fit items-center py-6 px-4 rounded-lg bg-linear-to-t from-primary-bg to-secondary-bg rounded-2xl border-2 border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div
        className={cn(
          "absolute inset-0 -z-1",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      <p className="">{children}</p>
    </div>
  );
}
