// lib
import { useLayoutEffect } from 'react';
// idk specifically but
// scroll bar moving is seen in useEffect
// but not in useLayoutEffect

const scrollPosition = { position: 0 };

// ref :
// https://stackoverflow.com/questions/59100931/maintaining-state-and-scroll-position-in-react

const useScrollPosition = () => {

    useLayoutEffect(() => {
        // after rendering, scroll to previous position, initially 0
        window.scrollTo(0, scrollPosition.position);
    });

    // method to remember scroll position
    const setScrollPosition = () => {
        scrollPosition.position = window.scrollY;
    };

    return [setScrollPosition];
}

export default useScrollPosition;