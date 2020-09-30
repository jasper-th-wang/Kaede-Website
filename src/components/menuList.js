import React from "react";
import { AnimatePresence, motion } from 'framer-motion';

import classes from './menuList.module.scss';
import { Link } from 'gatsby';

const MenuList = ({ toggled, toggleMenuHandler }) => {

  // item that is an array contains the name of the page and the camel case of it for Link
  const menuItems = [['Home', ''], 'Services', 'Projects', ['About us', 'AboutUs'], ['Contact us', 'ContactUs']];

  // const config = { mass: 5, stiffness: 2000, friction: 90 };
  // const listTrail = useTrail(menuItems.length, {
  //   config,
  //   delay: toggled ? 500 : 0,
  //   opacity: toggled ? 1 : 0,
  //   transform: toggled ? 'translateY(-10rem)' : 'translateY(-8rem)',
  //   height: toggled ? '1rem' : '0rem',
  // });
  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        type: 'spring',
        mass: 10,
        stiffness: 1000,
        damping: 300,
        staggerChildren: 0.1,
        delayChildren: 0.5,
      }
    }
  }

  const divVariants = {
    hidden: {
      opacity: 0,
      translateY: '-5rem',
    },
    visible: {
      opacity: 1,
      translateY: '-10rem',
    }
  }

  const liVariants = {
    hidden: {
      height: '0rem',
    },
    visible: {
      height: '1.4rem',
      transition: {
        duration: 0.7,
      }
    }
  }

  return (
    <ul className={ classes.menuList }>
      <motion.div variants={ parentVariants } initial="hidden" animate={ toggled ? "visible" : "hidden" }>
        { menuItems.map((item, index) => (
          <motion.div key={ index } variants={ divVariants }>
            <motion.li variants={ liVariants }
              onClick={ toggleMenuHandler }>
              <Link to={ `/${ Array.isArray(item) ? item[1] : item }` }>
                { Array.isArray(item) ? item[0] : item }
              </Link>
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