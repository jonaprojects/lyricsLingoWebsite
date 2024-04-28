import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center text-white p-2 justify-between md:ml-[5%] mr-[10%]">
      <div>
        <p className="font-extrabold text-lg">
          <span className="text-[#A31BFD]">Lyrics</span>
          <span>Lingo</span>
        </p>
      </div>
      <ul className="flex gap-5 text-sm md:text-base xl:text-md items-center mt-1">
        <li>
          <ul className="flex items-center gap-2">
            <li>
              <Link href="" className="hover:text-slate-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-slate-200">
                About Us
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <button className="border border-white rounded-lg py-1 px-3 bg-white hover:text-slate-300 hover:bg-black text-black">
            <div className="flex items-center gap-1">
              <img src="star.svg" />
              <span className=" color-[#c9d1d9]">Star</span>
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
}
