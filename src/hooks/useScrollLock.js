import React, { useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default function useScrollLock(toggled) {
  const scrollLockTarget = useRef(null);

  useEffect(() => {
    console.log(scrollLockTarget.current);
    toggled ? disableBodyScroll(scrollLockTarget.current) : enableBodyScroll(scrollLockTarget.current);

    return () => {
      clearAllBodyScrollLocks();
    }
  }, [toggled, scrollLockTarget]);

  return scrollLockTarget;
}