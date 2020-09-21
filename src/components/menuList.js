import React from "react"
import { useSpring, animated } from 'react-spring';
import classes from './menuList.module.scss';
import { Link } from 'gatsby';

const menuList = ({ toggled }) => {

  const items = ['Home', 'Services', 'Projects', 'About us', 'Contact us'];
  // const listTrail = useTrail(items.length, {

  // })

  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/">Services</Link></li>
      <li><Link to="/">Projects</Link></li>
      <li><Link to="/">About Us</Link></li>
      <li><Link to="/">Contact Us</Link></li>
    </ul>
  );
}

export default menuList;