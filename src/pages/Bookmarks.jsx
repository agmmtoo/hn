
// components
import ErrorBoundary from '../components/ErrorBoundary';
import { Li } from './Stories';

// hook
import useLocalstorage from '../hooks/localstorage-hook';

export default function Bookmarks() {
    const [bookmarks] = useLocalstorage('bookmarks');

    return (
        <ul className=''>
            {bookmarks.map((post, idx) =>
                <ErrorBoundary key={post}>
                    <Li item={post} idx={idx} />
                </ErrorBoundary>
            )}
        </ul>
    );
}