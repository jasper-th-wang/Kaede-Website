import React from "react";
import { useTrail, animated } from 'react-spring';
import classes from './menuList.module.scss';
import { Link } from 'gatsby';

const MenuList = ({ toggled, toggleMenuHandler }) => {

  const menuItems = ['Home', 'Services', 'Projects', 'About us', 'Contact us'];
  const config = { mass: 5, tension: 2000, friction: 200 };
  const listTrail = useTrail(menuItems.length, {
    config,
    delay: toggled ? 300 : 0,
    opacity: toggled ? 1 : 0,
    transform: toggled ? 'translateY(-10rem)' : 'translateY(-8rem)',
    height: toggled ? '1rem' : '0rem',

  });

  return (
    <ul className={ classes.menuList }>
      {
        listTrail.map(({ height, ...rest }, index) => (
          <animated.div style={ { ...rest } } key={ index }>
            <animated.li style={ { height } } key={ index } onClick={ toggleMenuHandler }>
              <Link to="/">{ menuItems[index] }</Link>
            </animated.li>
          </animated.div>
        ))
      }
    </ul>
  );
}

export default MenuList;