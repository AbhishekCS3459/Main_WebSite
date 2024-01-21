import React, { FC } from "react";
import { motion, Variants } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";
interface TypingTextProps {
  title: string;
  textStyles: string;
}
export default function CustomTexts({ title, textStyles }: TypingTextProps) {
  return (
    <motion.p
      variants={textContainer}
      className={`text-3xl font-bold text-white ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
  return (
    <motion.p
      variants={textContainer}
      className={`text-3xl font-bold text-white ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
}
