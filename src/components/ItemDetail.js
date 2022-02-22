// lib
import { useLocation, useParams } from 'react-router';

// hook
import useFetch from '../hooks/fetch-hook';
import useScrollPosition from '../hooks/scroll-position-hook';

// component
import CommentListItem from './CommentListItem';

// utils
import formatTime from '../utils/formatTime';

// style
import './ItemDetail.css';

const ItemDetail = () => {
    const location = useLocation();
    const item = location.state;
    const { itemId } = useParams();

    return item
        ? <Item item={item} />
        : <FetchItem itemId={itemId} />
}

export default ItemDetail;

const FetchItem = ({ itemId }) => {

    // url to fetch
    const url = `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`;

    const { loading, data, error } = useFetch({ url });
    if (loading) return <div>Story Detail Loading</div>
    if (error) return <div>FetchItem Error: {JSON.stringify(error)}</div>
    if (data) return <Item item={data} />

}

const Item = ({ item }) => {
    // abandon scroll position from main page and go to top
    useScrollPosition();

    return (
        <div className='item'>
            <h1>{item.title}</h1>
            <div className='item-info'>
                {item.by}
                {' • '}
                {Item.score || 0}Pts
                {' • '}
                {formatTime(item.time)}
            </div>
            <div className='dangerous-html' dangerouslySetInnerHTML={{ __html: item.text }} />
            <div className='comment-container'>
                {item.kids?.filter(Boolean).map(kidId => {
                    return <CommentListItem key={kidId} commentId={kidId} />
                })}
            </div>
        </div>
    )
}

