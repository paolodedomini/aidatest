import { motion } from "framer-motion";

const aperturaMenu = {
    rotate: { y: ['-100%', '0%'], opacity:1, transition: { duration: 0.5 } },
    // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
    stop: { y: ['0%', '-100%'], opacity:0, transition: { duration: 0.5 }}
  };

  function FadeInWhenVisible({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1,  },
          hidden: { opacity: 0,  }
        }}
      >
        {children}
      </motion.div>
    );
  }

  export {aperturaMenu, FadeInWhenVisible}