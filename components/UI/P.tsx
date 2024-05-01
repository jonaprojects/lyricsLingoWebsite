import React from "react";

interface IProps {
  children?: React.ReactNode | string | React.ReactNode[];
  className?: string;
}
export default function P(props: IProps) {
  return (
    <p
      className={`text-slate-400 sm:max-w-lg md:max-w-xl xl:max-w-2xl text-sm md:text-base 2xl:mt-7 2xl:text-xl ${
        props.className ?? ""
      }`}
    >
      {props.children}
    </p>
  );
}
