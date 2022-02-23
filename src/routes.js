import { Routes, Route } from 'react-router-dom';

// components
import Main from './components/Main';
import ItemDetail from './components/ItemDetail';
import Bookmark from './components/Bookmarks';
import NotFound from './components/NotFound';

const AppRoutes = () =>
    <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/bookmarks' element={<Bookmark />} />
        <Route exact path='/:itemId' element={<ItemDetail />} />
        <Route path="*" element={<NotFound />} />
    </Routes>

export default AppRoutes;