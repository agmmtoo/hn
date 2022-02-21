// style
import './Main.css';

// components
import useFetch from '../hooks/fetch-hook';
import MainListItem from './MainListItem';

// libraries
import { useState } from 'react';

// hook
import useScrollPosition from '../hooks/scroll-position-hook';

const Main = () => {
    const [tab, setTab] = useState('topstories');

    // set scroll position with hook
    const [setScrollPosition] = useScrollPosition();

    const { loading, data, error } = useFetch({
        url: `https://hacker-news.firebaseio.com/v0/${tab}.json`,
    });

    if (loading) return <div>Stories Loading...</div>;
    if (error) return <div>error: {JSON.stringify(error)}</div>;

    if (data) return (
        <div className='main-container' onClick={setScrollPosition}>
            {data.map(itemId => {
                return <MainListItem key={itemId} itemId={itemId} />
            })}
        </div>
    );
};

export default Main;