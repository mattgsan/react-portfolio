import { useState, useRef, useEffect } from "react";
import { CONTACT } from "../constants";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Create refs for the elements to monitor their visibility
  const headerRef = useRef(null);
  const addressRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  // Check if elements are in view
  const headerInView = useInView(headerRef, { once: true });
  const addressInView = useInView(addressRef, { once: true });
  const phoneInView = useInView(phoneRef, { once: true });
  const emailInView = useInView(emailRef, { once: true });

  useEffect(() => {
    if (headerInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [headerInView, hasAnimated]);

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        ref={headerRef}
        animate={{ opacity: hasAnimated ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact Information
      </motion.h1>
      <div className="text-center tracking-lighter">
        <motion.p
          ref={addressRef}
          animate={{ opacity: hasAnimated ? 1 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          ref={phoneRef}
          animate={{ opacity: hasAnimated ? 1 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          ref={emailRef}
          href="#"
          animate={{ opacity: hasAnimated ? 1 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="border-b"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
