// lib
import { useState } from 'react';

// components
import MainListItem from './MainListItem';
import Header from './Header';

// hook
import useFetch from '../hooks/fetch-hook';
import useScrollPosition from '../hooks/scroll-position-hook';

// style
import './Main.css';

const Main = () => {
    const [tab, setTab] = useState('topstories');

    // set scroll position with hook
    // const { key } = useLocation();
    const [setScrollPosition] = useScrollPosition(tab);

    const { loading, data, error } = useFetch({
        url: `https://hacker-news.firebaseio.com/v0/${tab}.json`,
    });

    if (loading) return <div>Stories Loading...</div>;
    if (error) return <div>error: {JSON.stringify(error)}</div>;

    if (data) return (
        <>
            <header>
                <Header tab={tab} switcher={setTab} />
            </header>
            <main>
                <div className='main-container' onClick={setScrollPosition}>
                    {data.map((itemId, index) => {
                        return <MainListItem key={itemId} itemId={itemId} index={index + 1} />
                    })}
                </div>
            </main>
        </>
    );
};

export default Main;