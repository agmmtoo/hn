import { Link } from 'react-router-dom';

// component
import MainListItem from './MainListItem';

// style
import './Bookmarks.css';

const Bookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    return (
        <>
            <div className="about">

                <Link to='/' >
                    <h1>Bookmarks</h1>
                </Link>
                <div className="info">Made with 💙 by <a href='https://github.com/agmyintmyatoo' target='_blank' rel="noreferrer">agmyintmyatoo</a></div>
            </div>
            <div className='bookmarks'>
                {bookmarks
                    ? (bookmarks.length)
                        ? bookmarks.map((itemId, index) => {
                            return <MainListItem key={itemId} itemId={itemId} index={index + 1} />
                        })
                        : <div className='no-bookmarks'>Your bookmarks are emptied</div>
                    : <div className='no-bookmarks'>No bookmarks here tho</div>}
            </div>
        </>
    );
}

export default Bookmark;