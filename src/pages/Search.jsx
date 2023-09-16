import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { search } from "../api/algolia-api";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const query = searchParams.get("query");
  const handleSearchChange = (event) => {
    setSearchParams((param) => ({ ...param, query: event.target.value }));
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    search(query, signal).then(console.log).catch(console.error);
    return () => abortController.abort();
  }, [query]);
  return (
    <>
      <input
        onChange={handleSearchChange}
        value={query}
        className="w-full p-2 border-sky-300 bg-slate-100 dark:bg-zinc-800"
      />
    </>
  );
}
