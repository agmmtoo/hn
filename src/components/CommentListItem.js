// hooks
import useObserver from '../hooks/interseciton-observer-hook';
import useFetch from '../hooks/fetch-hook';

// utils
import formatTime from '../utils/formatTime';

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
    if (data) {
        // support deep link
        const replacedText = data.text?.replaceAll('<a href="https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=', '<a href="/');

        return (
            <div ref={elemRef} className='comment-list-item' name={data.id}>
                <div className='commentor'>
                    {data.by}
                    {' • '}
                    {formatTime(data.time)}
                </div>
                {data.deleted ? '[deleted]' : null}
                <div className='dangerous-html-comment' dangerouslySetInnerHTML={{ __html: replacedText }} />
                {data.kids?.filter(Boolean).map(kidId => {
                    return <CommentListItem key={kidId} commentId={kidId} />
                })}
            </div>
        )
    }
}

export default CommentListItem;