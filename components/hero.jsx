"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import VideoBackground from "./shared/VideoBackground";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 90;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pb-10 pt-36 md:pt-48">
      <div className="space-y-6 text-center">
      <VideoBackground
        videoSrc="/videos/bg-video.mp4"
        fallbackImageSrc="/herobg.jpg"
        
      />
        <div className="mx-auto space-y-6">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/#">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
         
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0 shadow-[0px_30px_50px_20px_rgba(250,250,256,0.2)">
          <div ref={imageRef} className="hero-image bg-black/80 z-10 ax-w-[50vw] shadow-[0px_-10px_80px_10px_rgba(250,250,256,0.2)] ] ">
            <Image
              src="/banner2.jpeg"
              width={1080}
              height={1920}
              alt="Dashboard Preview"
              className="w-full mx-auto border rounded-lg shadow-2xl brightness-75 saturate-150 "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
