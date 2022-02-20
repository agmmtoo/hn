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
    const [storyRef, intersecting] = useObserver();

    // url to fetch
    const url = `https://hacker-news.firebaseio.com/v0/item/${story}.json`;

    // halt the fetch (don't fetch) if it isn't visible
    const halt = !intersecting;

    const { loading, data, error } = useFetch({ url, halt });

    if (loading) return <div className='story' ref={storyRef} key={story}>[Loading...]</div>
    if (error) return <div>Error</div>
    if (data) return (
        <div ref={storyRef} className='story' key={story}>
            {/* {data.id} */}
            {data.score}
            {data.title}
            {/* {data.by} */}
            {new Date(data.time * 1000).toString()}
            {/* {data.url} */}
            {/* {data.type} */}
        </div>
    );

}

export default Stories;