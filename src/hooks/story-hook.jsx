import { useState, createContext } from 'react';

export const StoryContext = createContext();

export default function StoryProvider({ children }) {
    // tab
    // 'topstories' | 'newstories' | 'beststories'
    const [tab, setTab] = useState('topstories');

    // stories list
    const [stories, setStories] = useState({
        // initialize each with empty array
        'topstories': [],
        'newstories': [],
        'beststories': []
    });

    // method to get specific tab's stories
    const getStories = (tab) => stories[tab];
    // method to set specific tab's stories
    const putStories = (tab, list) => setStories(storiesState => ({ ...storiesState, [tab]: list }))

    // Map of id:story for caching individual fetched stories
    const [storyMap, setStoryMap] = useState(new Map());
    // method to retrieve story from Map
    const getStory = (id) => storyMap.get(id);
    // method to set story to Map
    const putStory = (id, story) => setStoryMap(storyMap => new Map(storyMap).set(id, story))

    // values to be passed to context consumer children
    const values = {
        tab,
        setTab,
        getStories,
        putStories,
        getStory,
        putStory
    }

    return (
        <StoryContext.Provider value={values}>
            {children}
        </StoryContext.Provider>
    );
}