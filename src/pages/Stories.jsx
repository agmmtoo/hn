import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { HiOutlineLink, HiOutlineAtSymbol, HiOutlineClock, HiOutlineTrendingUp, HiOutlineChat, HiOutlineHashtag } from 'react-icons/hi';

// hooks
import useObserver from '../hooks/interseciton-observer-hook';
import { StoryContext } from '../hooks/story-hook';

// api
import { getTopStories, getStory } from '../api/hn-apis';

export default function Posts() {
    // consume context
    const { stories, setStories } = useContext(StoryContext);

    const [error, setError] = useState(null);

    // effect to fetch top stories
    useEffect(() => {
        getTopStories()
            .then(setStories)
            .catch(setError);
    }, [setStories]);


    // render error
    if (error) return <div className='text-center text-red-400'>{error.message}</div>

    return (
        <ul className='m-4 max-w-3xl md:mx-auto'>
            {stories.map((post, idx) => <Li key={post} item={post} idx={idx} />)}
        </ul>
    );
}

function Li({ item, idx }) {
    // hook to observe the element
    const [elemRef, intersecting] = useObserver();

    // state to store the story
    const [story, setStory] = useState(null);
    const [error, setError] = useState(null);

    // effect to fetch the post detail
    useEffect(() => {
        if (intersecting) getStory(item)
            .then(setStory)
            .catch(setError);
    }, [item, intersecting]);

    // render error
    if (error) return <div className='text-center text-red-400'>{error.message}</div>

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
    // if 'type' is 'story' construct from 'item.url'
    // if 'job/ask', from 'location'
    const url = new URL(story.url || window.location.href + String(story.id));

    return (
        <>
            <a
                href={url.href}
                target='_blank'
                rel='noreferrer'
                className='hover:text-sky-800 visited:text-sky-900 transition-colors'
            >
                <h2 className='text-2xl font-medium py-4'>{story.title}</h2>
            </a>
            <Link
                to={`${story.id}`}
                className='flex items-center flex-wrap gap-2 text-sm text-gray-600 py-4 transition-colors hover:text-sky-800'
            >
                <div className='inline-flex items-center'>
                    <HiOutlineHashtag className='inline mr-1' />
                    {++idx}
                </div>

                <div className='inline-flex items-center'>
                    <HiOutlineTrendingUp className='inline mr-1' />
                    {story.score}
                </div>

                <div className='inline-flex items-center'>
                    <HiOutlineLink className='inline mr-1' />
                    {url.hostname}
                </div>

                <div className='inline-flex items-center'>
                    <HiOutlineChat className='inline mr-1' />
                    {story.descendants}
                </div>
                <div className='inline-flex items-center'>
                    <HiOutlineAtSymbol className='inline mr-1' />
                    {story.by}
                </div>

                <div className='inline-flex items-center'>
                    <HiOutlineClock className='inline mr-1' />
                    {moment(story.time * 1000).fromNow()}
                </div>

            </Link>
        </>
    )
}