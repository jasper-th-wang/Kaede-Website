import React from 'react';
import { navigate } from "gatsby"

const DelayedLink = ({ to, children }) => {

  const handleClicked = () => {
    const navigateTimer = setTimeout(() => {
      navigate(to);
    }, 400)
  }
  return (
    <a onClick={ handleClicked }>{ children }</a>
  );
}

export default DelayedLink;