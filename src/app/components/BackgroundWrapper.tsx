"use client";

import PixelBlast from "@/components/PixelBlast";
import { ReactNode } from "react";

interface BackgroundWrapperProps {
  children: ReactNode;
}

export default function BackgroundWrapper({ children }: BackgroundWrapperProps) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0f0f13]">
      {/* === PixelBlast Background === */}
      <div className="absolute inset-0 -z-10">
         <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#B19EEF"
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent
        />
      </div>

      {/* === Konten Utama === */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
