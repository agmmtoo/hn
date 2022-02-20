// library
import { Link } from 'react-router-dom';

// hooks
import useObserver from '../hooks/interseciton-observer-hook';
import useFetch from '../hooks/fetch-hook';

// style
import './Story.css';

// factory
import formatTime from '../factories/formatTime';

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
            {/* {data.score} */}
            <Link to={'/data.id'}><h1>{data.title}</h1></Link>
            <p>{data.by}</p>
            <p>{formatTime(data.time)}</p>
            {/* {data.url} */}
            {/* {data.type} */}
        </div>
    );

}

export default Story;