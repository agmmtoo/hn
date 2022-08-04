import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// hook
import { StoryContext } from '../hooks/story-hook';

// api
import { getStory as fetchStory } from '../api/hn-apis';

export default function Post() {
    const { id } = useParams();

    // consume context
    const { getStory, putStory } = useContext(StoryContext);
    // get story from context Map
    const story = getStory(id);

    // error state
    const [error, setError] = useState(null);

    // effect to fetch the post detail
    useEffect(() => {
        // if story is in context Map, do nothing
        if (story) return;

        // now story isn't in context Map and visible
        fetchStory(id)
            .then((data) => putStory(id, data))
            .catch(setError);
    }, [story, getStory, putStory, id]);
    // render error
    if (error) return <div className='min-h-[10vh] my-4 text-center text-red-400'>{error.message}</div>

    // render the post
    if (story) return (
        <div className='mx-4 max-w-5xl xl:mx-auto'>
            <a href={story.url}
                target='_blank'
                rel='noreferrer'
            >
                <h1 className='hover:text-sky-800 transition-colors text-3xl py-4 font-medium'>
                    {story.title}
                </h1>
            </a>

            {story.text && <p className='py-4 leading-7 tracking-wide' dangerouslySetInnerHTML={{ __html: story.text }} />}
        </div>
    );
}