import { useState, useEffect, useRef } from 'react';

const useObserver = () => {
    const [intersecting, setIntersecting] = useState(false);

    const storyRef = useRef(null);

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
        const elem = storyRef.current;
        observer.observe(elem);

        return () => observer.unobserve(elem)
    });

    return [storyRef, intersecting];
}

export default useObserver;