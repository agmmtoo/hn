import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// hook
import { StoryContext } from '../hooks/story-hook';

// api
import { fetchStory } from '../api/hn-apis';

// components
import Info from '../components/Info';
import Comment from '../components/Comment';
import Bookmark from '../components/Bookmark';

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
        // something story is there, it's jus 'null'
        if (story !== null) fetchStory(id)
            .then((data) => putStory(id, data))
            .catch(setError);
    }, [story, getStory, putStory, id]);

    // render error
    if (error) return <div className='min-h-[10vh] my-4 text-center text-red-400'>{error.message}</div>

    // render the post
    if (story) return (
        <>
            <Helmet>
                <title>{story.title}</title>
                <meta
                    name="description"
                    content={story?.text ?? `Comments on ${story.title}`} />
            </Helmet>

            <div className=''>
                <a href={story.url}
                    target='_blank'
                    rel='noreferrer'
                >
                    <h1 className='hover:text-sky-800 dark:hover:text-sky-400 transition-colors text-3xl py-4 font-medium'>
                        {story.title}
                    </h1>
                </a>
                <Bookmark id={id} />

            </div>
            <Info story={story} />

            {story.text && <p className='prose prose-stone dark:prose-invert md:prose-lg py-4 leading-7 tracking-wide' dangerouslySetInnerHTML={{ __html: story.text }} />}

            {story.kids?.map((kid, idx) => <Comment key={kid} id={kid} idx={idx} />)}
        </>
    );
}