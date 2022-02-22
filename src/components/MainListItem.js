// library
import { Link } from 'react-router-dom';

// hooks
import useObserver from '../hooks/interseciton-observer-hook';
import useFetch from '../hooks/fetch-hook';

// style
import './MainListItem.css';

// utils
import formatTime from '../utils/formatTime';

const MainListItem = ({ itemId, index }) => {
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
                <a href={data.url} target='_blank' rel='noreferrer'>
                    {data.title}
                </a>
            </h1>
            <Link
                to={`/${data.id}`}
                state={data}
            >
                <div className='main-list-item-info'>
                    {`#${index} • `}
                    {data.score}Pts
                    {' • '}
                    {formatTime(data.time)}
                    {' • '}
                    {data.by}
                    {data.descendants
                        ? ` • ${data?.descendants}comment${data.descendants > 1 ? 's' : ''}`
                        : ''}
                    {data.url
                        ? ` • ${data.url.split('/')[2]}`
                        : ''}
                </div>
            </Link>
        </div>
    );

}

export default MainListItem;