import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import classes from './revealBox.module.scss';

// accept 2 figures as the children
// and produce a reveal box
const RevealBox = ({ boxIndex, currentIndex, children, clickHandler }) => {

  // 0 is on cover page, 1 is on content page
  const [toggled, setToggled] = useState(0);

  useEffect(() => {
    boxIndex === currentIndex ? setToggled(1) : setToggled(0);

  }, [boxIndex, currentIndex]);

  const boxVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  }

  // if current index => transition
  // transition: if cur === inex then cur[0] show and cur[1] hide
  return (
    <button className={ classes.revealBox } onClick={ toggled === 1 ? () => clickHandler(0) : () => clickHandler(boxIndex) }>
      <AnimatePresence exitBeforeEnter>
        {
          toggled === 1 ?
            <motion.div variants={ boxVariants } initial="hidden" animate="visible" exit={ { opacity: 0 } } key='content-page'>{ children[0] }</motion.div> :
            <motion.div variants={ boxVariants } initial="hidden" animate="visible" exit={ { opacity: 0 } } key='cover-page'>{ children[1] }</motion.div>
        }
      </AnimatePresence>

    </button>
  )

}

export default RevealBox;