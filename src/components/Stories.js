// style
import './Stories.css';

// hooks
import useObserver from '../hooks/interseciton-observer-hook';
import useFetch from '../hooks/fetch-hook';

const Stories = ({ stories }) => {

    return (
        <div className='story-container'>
            {stories.map(story => {
                return <Story key={story} story={story} />
            })}
        </div>
    );
}

const Story = ({ story }) => {
    const [storyRef, intersecting] = useObserver()

    const { loading, data, error } = useFetch({
        url: `https://hacker-news.firebaseio.com/v0/item/${story}.json`,
        halt: intersecting,
    })

    if (!intersecting) return <div className='story' ref={storyRef} key={story}>{intersecting && story}</div>

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error</div>
    if (data) return (
        <div ref={storyRef} className='story' key={story}>
            {JSON.stringify(data)}
        </div>
    );
    return null;
}

export default Stories;