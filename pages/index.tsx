import { Inter } from "next/font/google";
import Navbar from "@/components/UI/navbar/Navbar";
import Hero from "@/components/UI/Hero";
import Installation from "@/components/UI/Installation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Navbar />
      <main
        className={` ${inter.className} text-white overflow-hidden h-screen`}
      >
        <Hero />
        <Installation />
      </main>
    </div>
  );
}
