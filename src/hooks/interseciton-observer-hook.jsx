import { useState, useEffect, useRef } from 'react';

const useObserver = () => {
    const [intersecting, setIntersecting] = useState(false);

    const elemRef = useRef(null);

    const calllback = (entries, observer) => {
        entries.forEach(entry => {
            setIntersecting(entry.isIntersecting);
        });

    };

    const options = {
        root: null,
        rootMargin: '20%',
        threshold: 0.5,
    }

    useEffect(() => {
        const observer = new IntersectionObserver(calllback, options);
        const elem = elemRef.current;

        // in case there's no element due to some error, do nothing so actual error can be thrown
        if (!elem) return;

        observer.observe(elem);

        // once it got visible, unobserve, and don't refetch
        if (intersecting) observer.unobserve(elem);

        return () => observer.unobserve(elem)
    });

    return [elemRef, intersecting];
}

export default useObserver;