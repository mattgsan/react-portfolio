import { useState, useRef, useEffect } from "react";
import { LICENSES } from "../constants";
import { motion, useInView } from "framer-motion";

const Licenses = () => {
  const [animatedIndices, setAnimatedIndices] = useState([]);
  const [headerHasAnimated, setHeaderHasAnimated] = useState(false);

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  useEffect(() => {
    if (headerInView && !headerHasAnimated) {
      setHeaderHasAnimated(true);
    }
  }, [headerInView, headerHasAnimated]);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        ref={headerRef}
        animate={{ opacity: headerHasAnimated ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Licenses and Certifications
      </motion.h1>
      <div>
        {LICENSES.map((license, index) => (
          <InViewElement
            key={index}
            index={index}
            animatedIndices={animatedIndices}
            handleInView={(index) => {
              if (!animatedIndices.includes(index)) {
                setAnimatedIndices((prev) => [...prev, index]);
              }
            }}
          >
            <div className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                animate={
                  animatedIndices.includes(index) ? { opacity: 1, x: 0 } : {}
                }
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={license.image}
                  width={150}
                  height={150}
                  alt={license.title}
                  className="mb-6 rounded"
                />
              </motion.div>
              <motion.div
                animate={
                  animatedIndices.includes(index) ? { opacity: 1, x: 0 } : {}
                }
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {license.title} -{" "}
                  <span className="text-sm text-purple-100">
                    {license.organization}
                  </span>
                </h6>
                <p
                  className="mb-4 text-neutral-400"
                  dangerouslySetInnerHTML={{ __html: license.description }}
                ></p>
                {license.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </InViewElement>
        ))}
      </div>
    </div>
  );
};

const InViewElement = ({ children, index, animatedIndices, handleInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !animatedIndices.includes(index)) {
      handleInView(index);
    }
  }, [isInView, index, animatedIndices, handleInView]);

  return <div ref={ref}>{children}</div>;
};

export default Licenses;
