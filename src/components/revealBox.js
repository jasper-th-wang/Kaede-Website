import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring';

// accept 2 figures as the children
// and produce a reveal box
const RevealBox = ({ boxIndex, currentIndex, children, clickHandler }) => {

  // 0 is on cover page, 1 is on content page
  const [toggled, setToggled] = useState(0);

  useEffect(() => {
    boxIndex === currentIndex ? setToggled(1) : setToggled(0);

  }, [boxIndex, currentIndex]);

  const transition = useTransition(toggled, null, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
  });

  // if current index => transition
  // transition: if cur === inex then cur[0] show and cur[1] hide
  return (
    <div onClick={ toggled === 1 ? () => clickHandler(0) : () => clickHandler(boxIndex) }>
      {
        transition.map(({ props }) =>
          toggled === 1 ?
            props => React.cloneElement(children[0], { style: { props } }) :
            props => React.cloneElement(children[1], { style: { props } })
        )
      }
    </div>
  )

}

export default RevealBox;