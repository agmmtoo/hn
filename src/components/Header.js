// lib
import { Link } from 'react-router-dom';

// style
import './Header.css';

const Header = ({ tab, switcher }) => {
    const tabs = ['topstories', 'newstories', 'beststories'];
    return (
        <div className='header'>
            <div className='hacker-news'>Hacker News</div>
            <div className='tab'>{tab}</div>
            <div className='circles'>
                <IconCircle
                    onClick={() => switcher(tabs[0])}
                    fill={tab === tabs[0] ? 'currentColor' : 'none'}
                />
                <IconCircle
                    onClick={() => switcher(tabs[1])}
                    fill={tab === tabs[1] ? 'currentColor' : 'none'}
                />
                <IconCircle
                    onClick={() => switcher(tabs[2])}
                    fill={tab === tabs[2] ? 'currentColor' : 'none'}
                />
            </div>
            <Link to={'bookmarks'}>
                bookmarks
            </Link>
        </div>
    );
}

export default Header;

const IconCircle = _ => {
    return (
        <svg onClick={_.onClick} w="20" h="20" className={_.className}>
            <circle cx="10" cy="10" r="5" stroke="currentColor" strokeWidth="2" fill={_.fill} />
        </svg>
    );
}