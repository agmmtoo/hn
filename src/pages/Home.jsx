import { Outlet, Link } from 'react-router-dom';

import Tabs from '../components/Tabs';
import ActionBar from '../components/ActionBar';

export default function Home() {

    return (
        <>
            <header className='dark:bg-slate-700 py-4 text-center'>
                <h1 className='text-4xl font-semibold tracking-wide capitalize'><Link to='.'>Hacker News</Link></h1>
                <Link to='/bookmarks'>bookmarks</Link>
            </header>

            <Tabs />

            <ActionBar />

            <main className='mx-4 max-w-5xl lg:mx-auto'>
                <Outlet />
            </main>
        </>
    );
}