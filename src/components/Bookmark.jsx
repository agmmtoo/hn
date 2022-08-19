import { memo } from 'react';
import { HiBookmark } from 'react-icons/hi';

// hook
import useLocalstorage from '../hooks/localstorage-hook';

// utils
import classNames from '../utils/classNames';

// HOOOLY SHHHHHHIT
// USING MEMO HERE IS FUCKING RIGHT
// render only once on same id
export default memo(function Bookmark({ id }) {
    const [bookmarks, setBookmarks] = useLocalstorage('bookmarks');

    // methods to wrap bookmark hook
    // predicate to check if item is bookmarked
    const bookmarked = (id) => bookmarks.includes(id);
    // spread old items and add new item to bookmark list
    const addToBookmarks = (id) => setBookmarks([...bookmarks, id]);
    // filter out item from bookmark array
    const removeFromBookmarks = (id) => setBookmarks(bookmarks.filter((item) => item !== id));

    // single handler, using methods above
    const handleBookmark = (id) => bookmarked(id) ? removeFromBookmarks(id) : addToBookmarks(id);

    return (
        <div className='float-right'>
            <HiBookmark
                onClick={() => handleBookmark(id)}
                // className={`h-10 w-10 transition ${bookmarked(id)
                //     ? 'text-sky-800 scale-y-125 shadow'
                //     : 'text-slate-500'
                //     }`}
                className={classNames(
                    'h-10 w-10 transition',
                    bookmarked(id)
                        ? 'text-sky-800 dark:text-sky-400 scale-y-125 shadow dark:shadow-sky-800'
                        : 'text-slate-500 dark:text-slate-300'
                )}
            />
        </div>
    );
});