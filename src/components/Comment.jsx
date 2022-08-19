import { useContext, useState, useEffect } from 'react';

import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

// hook
import { StoryContext } from '../hooks/story-hook';
import useObserver from '../hooks/interseciton-observer-hook';

// api
import { fetchStory } from '../api/hn-apis';

// component
import InfoComment from './InfoComment';

// utils
import classNames from '../utils/classNames';

export default function Comment({ id }) {
    // hook to observe the element
    const [elemRef, intersecting] = useObserver();

    // consume context
    const { getStory, putStory } = useContext(StoryContext);
    // get story from context Map
    const story = getStory(id);

    // error state
    const [error, setError] = useState(null);

    // comment body toggle state
    const [open, setOpen] = useState(true);

    // effect to fetch the post detail
    useEffect(() => {
        // if story is in context Map, do nothing
        if (story) return;

        // if story isn't visible yet, do nothing
        if (!intersecting) return;

        // now story isn't in context Map and visible
        // something story is there, it's jus 'null'
        if (story !== null) fetchStory(id)
            .then((data) => putStory(id, data))
            .catch(setError);
    }, [story, getStory, putStory, id, intersecting]);

    // render error
    if (error) return <div className='min-h-[10vh] my-4 text-center text-red-400'>{error.message}</div>

    // render the post
    if (Boolean(story)) return (
        <div className='mt-4 border-l-2 border-slate-400 pl-2'>
            <div
                onClick={() => setOpen(open => !open)}
                className={classNames(
                    'py-2 px-1 flex justify-between text-sm text-gray-600 dark:text-gray-400',
                    open
                        ? ''
                        : 'rounded shadow shadow-sky-800 dark:shadow-sky-400'
                )}
            >
                <div className='flex items-center flex-wrap gap-2 cursor-pointer'>
                    <InfoComment story={story} className='hover:bg-emerald-400' />
                </div>
                {
                    open
                        ? <HiOutlineEye />
                        : <HiOutlineEyeOff />
                }
            </div>
            {
                open && (
                    <>
                        <p className='prose dark:prose-invert md:prose-lg  py-4 leading-7 tracking-wide' dangerouslySetInnerHTML={{ __html: story.text }} />

                        {/* render replies */}
                        {story.kids?.map((kid) => <Comment key={kid} id={kid} />)}
                    </>
                )
            }
        </div>
    );

    // if not story, render placeholder for intersection observer ref
    return (
        <div
            ref={elemRef}
            className='min-h-[20vh] my-4'
        >
            {id}
        </div>
    )
}