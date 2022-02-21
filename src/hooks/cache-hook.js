// initialize cache
const cache = new Map();

const useCache = () => {
    const hasCache = key => cache.has(key);
    const getCache = key => cache.get(key);
    const setCache = (key, value) => cache.set(key, value);

    return [hasCache, getCache, setCache]
}

export default useCache;