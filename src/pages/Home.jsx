import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { HiOutlineFire, HiOutlineTrendingUp, HiOutlineSparkles } from 'react-icons/hi';

import { StoryContext } from '../hooks/story-hook';

export default function Home() {
    const { tab, setTab } = useContext(StoryContext);

    return (
        <>
            <header className='dark:bg-slate-700 py-4 mb-4 text-center'>
                <h1 className='text-4xl font-semibold tracking-wide capitalize'><Link to='.'>Hacker News</Link></h1>
                <Link to='/bookmarks'>bookmarks</Link>
            </header>

            <nav className='flex items-center justify-center gap-4'>
                <abbr title='Top Stories'>
                    <HiOutlineFire
                        className={`w-6 h-6 cursor-pointer hover:text-red-500 hover:scale-110 transition ${tab === 'topstories' && 'text-red-500'}`}
                        role='button'
                        onClick={() => setTab('topstories')}
                    />
                </abbr>

                <abbr title='New Stories'>
                    <HiOutlineSparkles
                        className={`w-6 h-6 cursor-pointer hover:text-yellow-500 hover:scale-110 transition ${tab === 'newstories' && 'text-yellow-500'}`}
                        role='button'
                        onClick={() => setTab('newstories')}
                    />
                </abbr>

                <abbr title='Best Stories'>
                    <HiOutlineTrendingUp
                        className={`w-6 h-6 cursor-pointer hover:text-green-500 hover:scale-110 transition ${tab === 'beststories' && 'text-green-500'}`}
                        role='button'
                        onClick={() => setTab('beststories')}
                    />
                </abbr>
            </nav>

            <main className='m-4 max-w-5xl lg:mx-auto'>
                <Outlet />
            </main>
        </>
    );
}