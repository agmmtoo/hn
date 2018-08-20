import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Stories from './pages/Stories';
import Story from './pages/Story';
import Bookmarks from './pages/Bookmarks';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path=':id' element={<Story />} />
        <Route path='bookmarks' element={<Bookmarks />} />
        <Route index element={<Stories />} />
      </Route>
    </Routes>
  );
}

export default App;
