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
        rootMargin: '0px',
        threshold: 0.5,
    }

    useEffect(() => {
        const observer = new IntersectionObserver(calllback, options);
        const elem = elemRef.current;
        observer.observe(elem);

        // once it got visible, unobserve, and don't refetch
        if (intersecting) observer.unobserve(elem);

        return () => observer.unobserve(elem)
    });

    return [elemRef, intersecting];
}

export default useObserver;