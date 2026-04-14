import { useState, useEffect, useRef } from "react";
import { SiAdobephotoshop, SiAdobepremierepro, SiAdobeillustrator, SiMicrosoftexcel, SiPandas, SiPowerbi } from "react-icons/si";
import { FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { motion, useInView } from "framer-motion";
import { PiFileSql } from "react-icons/pi";

const iconVariants = (duration) => ({
  initial: {},
  animate: {
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div className="border-b border-neutral-800 pb-24" ref={ref}>
      <motion.h1
        animate={hasAnimated ? { opacity: 1 } : {}}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Utilized Softwares
      </motion.h1>
      <motion.div
        animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <PiFileSql style={{ color: '#E06C21' }} className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMicrosoftexcel style={{ color: '#217346' }} className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPowerbi style={{ color: '#F2C811' }} className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython style={{ color: '#FFDE57' }} className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPandas style={{ color: '#FFFFFF' }} className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript style={{ color: '#F7DF1E' }} className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact style={{ color: '#61DBFB' }} className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiAdobephotoshop style={{ color: '#4FCCFE' }} className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiAdobepremierepro style={{ color: '#E298F2' }} className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiAdobeillustrator style={{ color: '#D98825' }} className="text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
