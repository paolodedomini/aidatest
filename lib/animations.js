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

  const SVGLazy = (w, h) => `
  <svg xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="256px" height="64px" viewBox="0 0 128 32" xml:space="preserve">
    <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" />
    <circle fill="#000000" cx="0" cy="0" r="11" transform="translate(16 16)">
        <animateTransform attributeName="transform" type="scale" additive="sum" values="1;1.42;1;1;1;1;1;1;1;1" dur="1350ms" repeatCount="indefinite"></animateTransform>
    </circle>
    <circle fill="#000000" cx="0" cy="0" r="11" transform="translate(64 16)">
        <animateTransform attributeName="transform" type="scale" additive="sum" values="1;1;1;1;1.42;1;1;1;1;1" dur="1350ms" repeatCount="indefinite"></animateTransform>
    </circle>
    <circle fill="#000000" cx="0" cy="0" r="11" transform="translate(112 16)">
        <animateTransform attributeName="transform" type="scale" additive="sum" values="1;1;1;1;1;1;1;1.42;1;1" dur="1350ms" repeatCount="indefinite"></animateTransform>
    </circle>
</svg>`


  export {aperturaMenu, FadeInWhenVisible, SVGLazy}