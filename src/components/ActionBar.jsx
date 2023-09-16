export default function ActionBar() {
    // stick on top with 1.25rem h
    // scroll to top on click
    return (
        <div
            className='text-transparent hover:text-white text-center sticky top-0 cursor-pointer hover:bg-sky-400 dark:hover:bg-sky-800 ease-out duration-150 hover:transition-colors hover:ease-in'
            onClick={() => window.scrollTo(0, 0)}
        >Scroll to Top</div>
    );
}