import { useSearchParams } from "react-router-dom"

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("query")

    console.log(searchParams)
    const handleSearchChange = (event) => {
        console.log(event.target.value)
        setSearchParams((param) => ({ ...param, query: event.target.value }))
    }
    return (
        <>
            <input onChange={handleSearchChange} value={query} className='w-full p-2 border-sky-300 bg-slate-100 dark:bg-zinc-800' />
        </>
    )
}