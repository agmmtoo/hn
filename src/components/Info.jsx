import InfoComment from './InfoComment';

import { HiOutlineLink, HiOutlineTrendingUp, HiOutlineChat, HiOutlineHashtag } from 'react-icons/hi';

export default function Info({ story }) {
    // if 'type' is 'story' construct from 'item.url'
    // if 'job/ask', from 'location'
    const url = new URL(story.url || window.location.href + String(story.id));

    return (
        <div
            className='flex items-center flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-500 py-4'>
            {typeof (story.idx) == 'number'
                && <div className='inline-flex items-center'>
                    <HiOutlineHashtag className='inline mr-1' />
                    {story.idx++}
                </div>}

            <div className='inline-flex items-center'>
                <HiOutlineTrendingUp className='inline mr-1' />
                {story.score}
            </div>

            <div className='inline-flex items-center'>
                <HiOutlineLink className='inline mr-1' />
                {url.hostname}
            </div>

            <div className='inline-flex items-center'>
                <HiOutlineChat className='inline mr-1' />
                {story.descendants}
            </div>

            <InfoComment story={story} />
        </div>
    );
}