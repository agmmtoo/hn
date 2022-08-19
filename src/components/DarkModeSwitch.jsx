// hook
import useLocalstorage from '../hooks/localstorage-hook';

export default function DarkModeSwitch() {
    const [mode, setMode] = useLocalstorage('mode');

    const switchMode = (mode) => {
        if (mode === 'dark') {
            document.documentElement.classList.remove('dark');
            setMode('light');
        }
        else {
            document.documentElement.classList.add('dark');
            setMode('dark');
        }
    }

    return (
        <input
            type='checkbox'
            checked={mode === 'dark'}
            onChange={() => switchMode(mode)}
            className='accent-green-400'
        />
    )
}