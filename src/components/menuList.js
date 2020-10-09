import React from "react";
import { motion } from 'framer-motion';
// import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import useScrollLock from '../hooks/useScrollLock';

import classes from './menuList.module.scss';
import DelayedLink from '../components/delayedLink';

const MenuList = ({ toggled, toggleMenuHandler }) => {

  // item that is an array contains the name of the page and the camel case of it for Link
  const menuItems = [['Home', ''], ['Services', 'services'], ['Projects', 'projects'], ['About us', 'about-us'], ['Contact us', 'contact-us']];

  const scrollLockTarget = useScrollLock(toggled);

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        // type: 'spring',
        // mass: 10,
        // stiffness: 1000,
        // damping: 300,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  }

  const divVariants = {
    hidden: {
      opacity: 0,
      translateY: '-1rem',
      transition: {
        // duration: 0.7,
        type: 'spring',
        mass: 1,
        stiffness: 1000,
        damping: 200,
      }
    },
    visible: {
      opacity: 1,
      translateY: '-10rem',
      transition: {
        // translateY: { duration: 2 }
        type: 'spring',
        mass: 5,
        stiffness: 1000,
        damping: 300,
      }
    }
  }

  const liVariants = {
    hidden: {
      height: '0rem',
      transition: {
        // duration: 0.7,
        type: 'spring',
        mass: 1,
        stiffness: 1000,
        damping: 200,
      }
    },
    visible: {
      height: '2.2rem',
      transition: {
        // duration: 0.7,
        type: 'spring',
        mass: 5,
        stiffness: 1000,
        damping: 300,
      }
    }
  }

  return (
    <ul className={ classes.menuList } ref={ scrollLockTarget }>
      <motion.div variants={ parentVariants } initial="hidden" animate={ toggled ? "visible" : "hidden" }>
        { menuItems.map((item, index) => (
          <motion.div key={ index } variants={ divVariants }>
            <motion.li variants={ liVariants }
              onClick={ toggleMenuHandler }>
              <DelayedLink to={ `/${ item[1] }` }>
                { item[0] }
              </DelayedLink>
            </motion.li>
          </motion.div>
        )) }
      </motion.div>
    </ul>


    // <ul className={ classes.menuList }>
    //   {
    //     listTrail.map(({ height, ...rest }, index) => (
    //       <animated.div style={ { ...rest } } key={ index }>
    //         <animated.li style={ { height } } key={ index } onClick={ toggleMenuHandler }>
    //           <Link to="/">{ menuItems[index] }</Link>
    //         </animated.li>
    //       </animated.div>
    //     ))
    //   }
    // </ul>
  );
}

export default MenuList;