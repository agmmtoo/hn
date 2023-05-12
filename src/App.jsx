import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Stories from "./pages/Stories";

const Story = React.lazy(() => import("./pages/Story"));
const Bookmarks = React.lazy(() => import("./pages/Bookmarks"));
const Search = React.lazy(() => import("./pages/Search"));

function App() {
  return (
    <Suspense fallback={<div className="w-full h-full bg-emerald-400" />}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":id" element={<Story />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="search" element={<Search />} />
          <Route index element={<Stories />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
