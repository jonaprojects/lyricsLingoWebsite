import React from "react";
import HighlightedText from "./HighlightedText";

export default function Installation() {
  return (
    <section className="flex w-full justify-center">
      <div className="w-[90%] flex justify-center text-center ">
        <div>
          <h3 className="mt-80 sm:mt-32 2xl:mt-48 font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">
            Install <HighlightedText>LyricsLingo</HighlightedText> now on the
            Chrome Web Store
          </h3>
        </div>
      </div>
    </section>
  );
}
