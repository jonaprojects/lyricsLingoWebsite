import React from "react";

interface IProps {
  children: React.ReactNode | string;
  className?: string;
}

export default function HighlightedText(props: IProps) {
  return (
    <span className={`text-[#A31BFD] ${props.className ?? ""}`}>
      {props.children}
    </span>
  );
}
