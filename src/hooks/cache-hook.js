// initialize cache
const cache = sessionStorage.getItem('cache') || {}
const useCache = () => {
    const hasCache = key => Boolean(cache[key])
    const getCache = key => cache[key]
    const setCache = (key, value) => {
        cache[key] = value
        sessionStorage.setItem('cache', JSON.stringify(cache))
    }
    return [hasCache, getCache, setCache]
}

export default useCache;