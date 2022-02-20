// style
import './Stories.css';

// components
import useFetch from '../hooks/fetch-hook';
import Story from './Story';

// libraries
import { useState } from 'react';

const Stories = () => {
    const [tab, setTab] = useState('topstories');

    const { loading, data, error } = useFetch({
        url: `https://hacker-news.firebaseio.com/v0/${tab}.json`,
    });

    if (loading) return <div>Stories Loading...</div>;
    if (error) return <div>error: {JSON.stringify(error)}</div>;

    if (data) return (
        <div className='story-container'>
            {data.map(storyIds => {
                return <Story key={storyIds} story={storyIds} />
            })}
        </div>
    );
};

export default Stories;