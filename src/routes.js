import { Routes, Route } from 'react-router-dom';

// components
import Main from './components/Main';
import ItemDetail from './components/ItemDetail';

const AppRoutes = () =>
    <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/:itemId' element={<ItemDetail />} />
    </Routes>

export default AppRoutes;