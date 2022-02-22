import { useState } from 'react';

const useToggle = () => {
    const [open, setOpen] = useState(true);
    const toggle = () => setOpen(toggle => !toggle);
    return [open, toggle];
}

export default useToggle;