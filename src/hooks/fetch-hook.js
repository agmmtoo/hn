import { useState, useEffect } from 'react';


const useFetch = ({ url, halt = false }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (halt) return;

        fetch(url)
            .then(response => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(e => {
                setLoading(false)
                setError(e)
            })


    }, [url, halt]);

    return { loading, data, error }
}

export default useFetch;