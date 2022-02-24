// lib
import { useState } from 'react';

// style
import './BookmarkIcon.css';

const BookmarkIcon = ({ id }) => {
    const [bookmarks, setBookmarks] = useState(JSON.parse(localStorage.getItem('bookmarks')) || []);

    const addBookmark = () => {
        localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, id]));
        setBookmarks([...bookmarks, id]);
    }

    const removeBookmark = () => {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks.filter(b => b !== id)));
        setBookmarks(bookmarks.filter(b => b !== id));
    }

    if (bookmarks.includes(id)) return <IconBookmarked onClick={removeBookmark} />
    return <IconBookmark onClick={addBookmark} />

}

export default BookmarkIcon;

const IconBookmark = ({ onClick }) =>
    <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 svg-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
    </svg>

const IconBookmarked = ({ onClick }) =>
    <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 svg-icon"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
    </svg>