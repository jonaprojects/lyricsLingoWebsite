import React from "react";

import HeroContainer from "@/components/UI/HeroContainer";
import Navbar from "@/components/UI/navbar/Navbar";
import P from "@/components/UI/P";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div className="overflow-hidden max-h-screen">
      <Navbar />
      <div className="pl-[10%] mt-10 p-2">
        <div className="relative lg:flex items-center text-white w-full max-h-screen overflow-hidden">
          <div className="">
            <h1 className="text-white font-black 2xl:text-8xl xl:text-6xl lg:text-5xl md:text-5xl text-4xl mb-4">
              About
            </h1>
            <P>
              I always liked learning new languages, and one of the most
              fulfilling and effective ways is through music. However, I noticed
              that in platforms such as YouTube there aren’t any lyrics, and it
              is difficult to understand the songs. I wanted to not only view
              the lyrics, but also translate the song and phrases in it, save
              them for later and practice them in different ways. That’s why I
              created LyricsLingo.
            </P>
            <P>
              I hope that this extension will help fellow learners such as I in
              their journey. I want to pay special thanks to [Insert API name]
            </P>
            <p className="text-white text-lg sm:text-xl lg:text-2xl mt-5">
              Like the app? Support my work.
            </p>

            <button className="text-white font-bold bg-[#7B02CB] hover:bg-[#6d00b5] rounded-md md:text-base md:px-10 text-sm px-8 2xl:text-2xl p-2 mt-2">
              Buy Me A coffee
            </button>
          </div>
          <img
            src="/musicLadderDarker.png" // Source of the image
            alt="Music Note" // Alternate text for accessibility
            className="w-[300px] sm:w-[350px] md:w-[500px] xl:w-[500px] 2xl:w-[600px]  "
          />
        </div>
      </div>
    </div>
  );
}
