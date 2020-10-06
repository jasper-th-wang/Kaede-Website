import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      mass: 10,
      damping: 60,
    }
  },
}

const DesktopPageTransition = ({ children }) => {

  return (
    <motion.div
      variants={ sectionVariants }
      initial="hidden"
      animate="visible"
    >
      {children }
    </motion.div>
  );
}

export default DesktopPageTransition;