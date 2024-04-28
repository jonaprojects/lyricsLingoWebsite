import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/UI/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <main
        className={` ${inter.className} text-white overflow-hidden h-screen`}
      >
        <div className="relative mr-7 ml-7 sm:-mr-10 md:ml-11 xl:ml-[10%] ">
          <div className="flex items-center mt-28 ">
            <div className="sm:max-w-md md:max-w-xl lg:max-w-2xl 2xl:max-w-5xl">
              <h1 className="font-black 2xl:text-8xl xl:text-6xl lg:text-5xl md:text-5xl text-4xl mb-4">
                Learn <span className="text-[#A31BFD]">new languages</span> with
                your favorite songs
              </h1>
              <p className="text-slate-400 max-w-md text-sm md:text-base 2xl:mt-7 2xl:text-2xl 2xl:max-w-2xl">
                Take your language skills to the next level with our free chrome
                extension. It is available at the Chrome Web Store for
                installation.
              </p>
              <div className="flex gap-2 mt-2 2xl:mt-7">
                <button className=" text-white font-bold bg-[#7B02CB] hover:bg-[#6d00b5] rounded-md md:text-base md:px-10 text-sm px-8 2xl:text-2xl">
                  Install
                </button>
                <button className="text-white font-bold border border-[#7B02CB] hover:bg-[#7B02CB] rounded-md py-2 md:px-10 md:text-base text-sm px-8 2xl:text-2xl">
                  Learn More
                </button>
              </div>
            </div>
            <div className="absolute sm:right-1 top-40 -right-40 sm:top-auto -z-10 ">
              <img
                src="/musicNoteHighQuality.jpg" // Source of the image
                alt="Music Note" // Alternate text for accessibility
                className="w-[400px] sm:w-96 md:w-[500px] xl:w-[600px] 2xl:w-[800px]"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
