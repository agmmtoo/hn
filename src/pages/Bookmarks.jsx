import { Helmet } from 'react-helmet-async';

// components
import ErrorBoundary from '../components/ErrorBoundary';
import { Li } from './Stories';
import DarkModeSwitch from '../components/DarkModeSwitch';

// hook
import useLocalstorage from '../hooks/localstorage-hook';

export default function Bookmarks() {
    const [bookmarks] = useLocalstorage('bookmarks');

    return (
        <>
            <Helmet>
                <title>Bookmarks</title>
                <meta name="description" content="Remember to check your bookmarks!" />
            </Helmet>

            <div className='p-4 max-w-md mx-auto border rounded-lg border-sky-300 text-sky-800 dark:text-sky-200 shadow bg-gradient-to-tl from-sky-200 to-cyan-100 dark:from-sky-700 dark:to-cyan-700'>
                <div className='font-medium'>Made with love by <a href='https://github.com/agmyintmyatoo'>agmyintmyatoo</a>.</div>
                <ul className='list-disc list-inside'>
                    <li>Dark mode: <DarkModeSwitch /></li>
                    <li>Tap top of screen to scroll to top.</li>
                    <li>Save data by scrolling slowly.</li>
                    <li>Utilize arrow/back button.</li>
                </ul>
            </div>

            <ul className=''>
                {bookmarks?.map((post, idx) =>
                    <ErrorBoundary key={post}>
                        <Li item={post} idx={idx} />
                    </ErrorBoundary>
                )}
            </ul>
        </>
    );
}