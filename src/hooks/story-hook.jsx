import { useState, createContext } from 'react';

export const StoryContext = createContext();

export default function StoryProvider({ children }) {
    const [stories, setStories] = useState([]);

    return (
        <StoryContext.Provider value={{ stories, setStories }}>
            {children}
        </StoryContext.Provider>
    );
}