import { Outlet, Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <header className='bg-sky-200 dark:bg-slate-700 py-4 text-center border-b'>
                <h1 className='text-4xl font-semibold tracking-wide capitalize'><Link to='/'>Hacker News</Link></h1>
                <Link to='/bookmarks'>bookmarks</Link>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}