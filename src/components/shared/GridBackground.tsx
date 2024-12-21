import { ReactNode } from "react";

export function GridBackground({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`h-[calc(100vh-100px)] w-full dark:bg-[#010101] bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center ${className}`}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
      {children}
    </div>
  );
}
