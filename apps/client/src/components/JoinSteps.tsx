import React, { FC } from "react";
import styles from "@/styles";

interface JoinStepsProps {
  number: number;
  text: string;
}
export default function JoinSteps({ number, text }: JoinStepsProps) {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} h-[70px] w-[70px] rounded-full bg-[#323F5D] hover:bg-lime-400`}
      >
        <p className="text-[20px] font-bold text-white">{number}</p>
      </div>
      <p className="ml-[30px] flex-1 text-[18px] font-normal leading-[32.4px] text-[#B0B0B0]">
        {text}
      </p>
    </div>
  );
}
