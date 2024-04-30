import React from "react";

interface IProps {
  children: React.ReactNode | string | React.ReactNode[];
  className?: string;
}
export default function HeroContainer(props: IProps) {
  return (
    <div
      className={`relative mr-7 ml-7 sm:-mr-10 md:ml-11 xl:ml-[10%] ${props.className}`}
    >
      {props.children}
    </div>
  );
}
