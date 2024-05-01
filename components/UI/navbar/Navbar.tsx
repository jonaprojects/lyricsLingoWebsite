import Link from "next/link";
import React from "react";
import Image from "next/image";
import starIcon from "../../../public/star.svg";
import HighlightedText from "../HighlightedText";

export default function Navbar() {
  return (
    <nav className="flex items-center text-white p-2 justify-between sm:ml-[5%] sm:mr-[10%]">
      <div>
        <Link className="font-extrabold text-lg" href="/">
          <HighlightedText>Lyrics</HighlightedText>
          <span>Lingo</span>
        </Link>
      </div>
      <ul className="flex gap-5 text-sm md:text-base xl:text-md items-center mt-1">
        <li>
          <ul className="flex items-center gap-2 text-sm sm:text-base">
            <li>
              <Link href="/ " className="hover:text-slate-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-slate-200">
                About
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <button className="border border-white rounded-lg py-1 px-3 bg-white hover:text-slate-300 hover:bg-black text-black text-sm sm:text-base">
            <div className="flex items-center gap-1">
              <Image src={starIcon} alt="" width={16} height={16} />
              <span className=" color-[#c9d1d9]">Rate Us</span>
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
}
