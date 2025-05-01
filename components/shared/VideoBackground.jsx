
"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";



export default function VideoBackground({fallbackImageSrc,videoSrc}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch((err) => {
      console.error("Video autoplay failed:", err);
    });
  }, []);

  return (
    <div
      className={
        "absolute inset-0 w-full h-full overflow-hidden -z-10"
        
      }
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="object-cover w-full h-full saturate-200 contrast-150 brightness-125"
        poster={fallbackImageSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div
        className={
          "absolute inset-0  saturate-150 hue-rotate-30 blur-sm"
          
        }
      />
    </div>
  );
}