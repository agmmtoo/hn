// lib
import { useState, useEffect } from 'react';

// hook
import useCache from './cache-hook';

const useFetch = ({ url, halt = false }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // cache hook
    const [hasCache, getCache, setCache] = useCache();

    useEffect(() => {
        if (halt) return;

        // if there is cache, use it
        if (hasCache(url)) {
            setData(getCache(url));
            setLoading(false);
        } else {
            fetch(url)
                .then(response => response.json())
                .then(res => {
                    setData(res);
                    // first time, so cache it
                    setCache(url, res);
                })
                .then(() => setLoading(false))
                .catch(e => {
                    setLoading(false)
                    setError(e)
                })
        }


    }, [url, halt]);

    return { loading, data, error }
}

export default useFetch;