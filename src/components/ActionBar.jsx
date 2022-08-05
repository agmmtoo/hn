export default function ActionBar() {
    // stick on top with 1.25rem h
    // scroll to top on click
    return (
        <div
            className='h-5 sticky top-0 cursor-pointer'
            onClick={() => window.scrollTo(0, 0)}
        />
    );
}