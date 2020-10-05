import React from 'react';
import { navigate } from "gatsby"

const DelayedLink = ({ to, children }) => {

  const handleClicked = (e) => {
    e.preventDefault();

    setTimeout(() => {
      navigate(to);
    }, 400)
  }
  return (
    <a href={ to } onClick={ handleClicked }>{ children }</a>
  );
}

export default DelayedLink;