import { useState, createContext } from 'react';

export const StoryContext = createContext();

export default function StoryProvider({ children }) {
    // state for stories list
    const [stories, setStories] = useState([]);

    // Map of id:story for caching fetched stories
    const [storyMap, setStoryMap] = useState(new Map());
    // method to retrieve story from Map
    const getStory = (id) => storyMap.get(id);
    // method to set story to Map
    const putStory = (id, story) => setStoryMap(storyMap => new Map(storyMap).set(id, story))

    return (
        <StoryContext.Provider value={{ stories, setStories, getStory, putStory }}>
            {children}
        </StoryContext.Provider>
    );
}