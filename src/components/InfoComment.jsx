import moment from 'moment';

import { HiOutlineAtSymbol, HiOutlineClock } from 'react-icons/hi';

export default function InfoComment({ story }) {
    return (
        <>

            <div className='inline-flex items-center'>
                <HiOutlineAtSymbol className='inline mr-1' />
                {story.by}
            </div>

            <div className='inline-flex items-center'>
                <HiOutlineClock className='inline mr-1' />
                {moment(story.time * 1000).fromNow()}
            </div>
        </>
    );
}