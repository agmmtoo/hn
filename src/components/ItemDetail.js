// lib
import { useLocation, useParams } from 'react-router';

// hook
import useFetch from '../hooks/fetch-hook';

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
    return (
        <div>{item.title}</div>
    )
}

