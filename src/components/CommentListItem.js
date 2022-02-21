// hooks
import useObserver from '../hooks/interseciton-observer-hook';
import useFetch from '../hooks/fetch-hook';

// style
import './CommentListItem.css';

const CommentListItem = ({ commentId }) => {
    const [elemRef, intersecting] = useObserver();

    // url to fetch
    const url = `https://hacker-news.firebaseio.com/v0/item/${commentId}.json`;

    // halt the fetch (don't fetch) if it isn't visible
    const halt = !intersecting;

    const { loading, data, error } = useFetch({ url, halt });
    if (loading) return <div className='comment-list-item' ref={elemRef} key={commentId}>[CommentListItem loading...]</div>
    if (error) return <div>Error</div>
    if (data) return (
        <div ref={elemRef} className='comment-list-item'>
            {data.by}
            {data.parent}
            <div dangerouslySetInnerHTML={{ __html: data.text }} />
        </div>
    )
}

export default CommentListItem;