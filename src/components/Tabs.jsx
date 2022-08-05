import { useContext } from 'react';
import { HiOutlineFire, HiOutlineTrendingUp, HiOutlineSparkles } from 'react-icons/hi';

import { StoryContext } from '../hooks/story-hook';

export default function Tabs() {

    const { tab, setTab } = useContext(StoryContext);
    return (
        <nav className='flex items-center justify-center gap-4'>
            <abbr title='Top Stories'>
                <button onClick={() => setTab('topstories')}>
                    <HiOutlineFire
                        className={`w-6 h-6 cursor-pointer hover:text-red-500 hover:scale-110 transition ${tab === 'topstories' && 'text-red-500'}`}
                    />
                </button>
            </abbr>

            <abbr title='New Stories'>
                <button onClick={() => setTab('newstories')}>
                    <HiOutlineSparkles
                        className={`w-6 h-6 cursor-pointer hover:text-yellow-500 hover:scale-110 transition ${tab === 'newstories' && 'text-yellow-500'}`}
                    />
                </button>
            </abbr>

            <abbr title='Best Stories'>
                <button onClick={() => setTab('beststories')}>
                    <HiOutlineTrendingUp
                        className={`w-6 h-6 cursor-pointer hover:text-green-500 hover:scale-110 transition ${tab === 'beststories' && 'text-green-500'}`}
                    />
                </button>
            </abbr>
        </nav>
    );
}