// style
import './Main.css';

// components
import useFetch from '../hooks/fetch-hook';
import MainListItem from './MainListItem';

// libraries
import { useState } from 'react';

const Main = () => {
    const [tab, setTab] = useState('topstories');

    const { loading, data, error } = useFetch({
        url: `https://hacker-news.firebaseio.com/v0/${tab}.json`,
    });

    if (loading) return <div>Stories Loading...</div>;
    if (error) return <div>error: {JSON.stringify(error)}</div>;

    if (data) return (
        <div className='main-container'>
            {data.map(itemId => {
                return <MainListItem key={itemId} itemId={itemId} />
            })}
        </div>
    );
};

export default Main;