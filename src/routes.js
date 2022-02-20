import { Routes, Route } from 'react-router-dom';

// components
import Stories from './components/Stories';

const AppRoutes = () =>
    <Routes>
        <Route exact path='/' element={<Stories />} />
    </Routes>

export default AppRoutes;