import { useEffect } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';

import Tabs from '../components/Tabs';
import ActionBar from '../components/ActionBar';

// hooks
import useLocalstorage from '../hooks/localstorage-hook';

export default function Home() {
    // check dark mode
    const [mode,] = useLocalstorage('mode');

    // switch mode according to user's preference
    useEffect(() => {
        if (mode === 'dark') document.documentElement.classList.add('dark');
    }, [mode])

    return (
        <>
            <header className='py-4 text-center'>
                <h1 className='text-4xl font-semibold tracking-wide capitalize'>
                    <Link to='.'>
                        Hacker News
                    </Link>
                </h1>
                <NavLink
                    to='/bookmarks'
                    className={({ isActive }) => isActive ? 'tracking-wider underline font-medium text-sky-800 dark:text-sky-400' : 'text-current'}
                >
                    bookmarks
                </NavLink>
            </header>

            <Tabs />

            <ActionBar />

            <main className='mx-4 max-w-5xl lg:mx-auto'>
                <Outlet />
            </main>
        </>
    );
}