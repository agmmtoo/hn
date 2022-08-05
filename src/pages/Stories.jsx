import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

// components
import ErrorBoundary from '../components/ErrorBoundary';
import Info from '../components/Info';

// hooks
import useObserver from '../hooks/interseciton-observer-hook';
import { StoryContext } from '../hooks/story-hook';

// api
import { fetchStories, fetchStory } from '../api/hn-apis';

export default function Posts() {
    // consume context
    const { tab, getStories, putStories } = useContext(StoryContext);

    const [error, setError] = useState(null);

    const stories = getStories(tab);

    // effect to fetch top stories
    useEffect(() => {
        // if stories are already fetched, don't refetch
        if (stories.length) return;

        fetchStories(tab)
            .then((data) => putStories(tab, data))
            .catch(setError);
    }, [putStories, stories.length, tab]);


    // render error
    if (error) return <div className='text-center text-red-400'>{error.message}</div>

    return (
        <ul className=''>
            {stories.map((post, idx) =>
                <ErrorBoundary key={post}>
                    <Li item={post} idx={idx} />
                </ErrorBoundary>
            )}
        </ul>
    );
}

export function Li({ item, idx }) {
    // hook to observe the element
    const [elemRef, intersecting] = useObserver();

    // consume context
    const { getStory, putStory } = useContext(StoryContext);
    // get story from context Map
    const story = getStory(item);

    // error state
    const [error, setError] = useState(null);

    // effect to fetch the post detail
    useEffect(() => {
        // if story is in context Map, do nothing
        if (story) return;

        // if story isn't visible yet, do nothing
        if (!intersecting) return;

        // now story isn't in context Map and visible
        fetchStory(item)
            .then((data) => putStory(item, data))
            .catch(setError);
    }, [item, intersecting, story, getStory, putStory]);

    // render error
    if (error) return <div className='min-h-[10vh] my-4 text-center text-red-400'>{error.message}</div>

    // render the post
    return (
        <li
            className='min-h-[10vh] my-4'
            ref={elemRef}
        >
            {story
                ? <Story story={story} idx={idx} />
                : item}
        </li>
    );
}

function Story({ story, idx }) {
    story.idx = idx;

    return (
        <>
            <a
                href={story?.url}
                target='_blank'
                rel='noreferrer'
                className=''
            >
                <h2 className='hover:text-sky-800 transition-colors text-2xl font-medium py-4'>{story.title}</h2>
            </a>
            <Link
                to={`/${story.id}`}
            >
                <Info story={story} />
            </Link>
        </>
    )
}