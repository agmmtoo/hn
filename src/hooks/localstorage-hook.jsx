import { useState } from 'react';

export default function useLocalstorage(key, initialValue) {
    // get initial item from provided key
    const initem = JSON.parse(localStorage.getItem(key)) || initialValue;

    // state to update the hook
    const [item, setItem] = useState(initem);

    // put data into localstorage with given key,
    // update state tell React changes
    const putItem = (data) => {
        const value = JSON.stringify(data);
        localStorage.setItem(key, value)
        setItem(data);
    }

    return [item, putItem]
}