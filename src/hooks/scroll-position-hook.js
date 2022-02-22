// lib
import { useLayoutEffect } from 'react';
// idk specifically but
// scroll bar moving is seen in useEffect
// but not in useLayoutEffect

const scrollPosition = new Map();

// ref :
// https://stackoverflow.com/questions/59100931/maintaining-state-and-scroll-position-in-react

const useScrollPosition = (key) => {

    useLayoutEffect(() => {
        // after rendering, scroll to previous position, initially 0
        window.scrollTo(0, scrollPosition.get(key) || 0);
    });

    // method to remember scroll position
    const setScrollPosition = () => {
        scrollPosition.set(key, window.scrollY);
    };

    return [setScrollPosition];
}

export default useScrollPosition;