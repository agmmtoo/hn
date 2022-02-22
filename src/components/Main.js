// style
import './Main.css';

// components
import useFetch from '../hooks/fetch-hook';
import MainListItem from './MainListItem';

// libraries
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

// hook
import useScrollPosition from '../hooks/scroll-position-hook';

const Main = () => {
    const [tab, setTab] = useState('topstories');

    // set scroll position with hook
    const { key } = useLocation();
    const [setScrollPosition] = useScrollPosition(key);

    const { loading, data, error } = useFetch({
        url: `https://hacker-news.firebaseio.com/v0/${tab}.json`,
    });

    if (loading) return <div>Stories Loading...</div>;
    if (error) return <div>error: {JSON.stringify(error)}</div>;

    if (data) return (
        <div className='main-container' onClick={setScrollPosition}>
            {data.map((itemId, index) => {
                return <MainListItem key={itemId} itemId={itemId} index={index + 1} />
            })}
        </div>
    );
};

export default Main;