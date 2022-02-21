// library
import { Link } from 'react-router-dom';

// hooks
import useObserver from '../hooks/interseciton-observer-hook';
import useFetch from '../hooks/fetch-hook';

// style
import './MainListItem.css';

// factory
import formatTime from '../factories/formatTime';

const MainListItem = ({ itemId }) => {
    const [elemRef, intersecting] = useObserver();

    // url to fetch
    const url = `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`;

    // halt the fetch (don't fetch) if it isn't visible
    const halt = !intersecting;

    const { loading, data, error } = useFetch({ url, halt });

    if (loading) return <div className='main-list-item' ref={elemRef} key={itemId}>[MainListItem loading...]</div>
    if (error) return <div>Error</div>
    if (data) return (
        <div ref={elemRef} className='main-list-item'>
            <h1>
                <a href={data.url} target='_blank' rel="noreferrer">
                    {data.title}
                </a>
            </h1>
            <Link
                to={`/${data.id}`}
                state={data}
            >
                <div className='main-list-item-info'>
                    <div className='info'>{`${data.score} Pts`}</div>
                    <div className='info'>{formatTime(data.time)}</div>
                    <div className='info'>{data.by}</div>
                    <div className='info url'>{data.url?.split('/')[2]}</div>
                </div>
            </Link>
        </div>
    );

}

export default MainListItem;