import React, { FC } from "react";
import { motion } from "framer-motion";

import styles from "@/styles";
import { startingFeatures } from "@/consts";
import { JoinSteps, TypingText } from "@/components";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
function JoinUs() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer(0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/Iste.png"
            alt="get-started"
            className="w-[75%] max-w-sm object-contain md:h-[75%] md:max-w-full"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex flex-[0.75] flex-col justify-center"
        >
          <TypingText title="| Why you should join us?" textStyles={""} />
          <div className="mt-[31px] flex max-w-[370px] flex-col gap-[24px]">
            {/* {startingFeatures.map((feature: string, index: number) => (
            <JoinSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))} */}
            something else to be placeed
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default JoinUs;
