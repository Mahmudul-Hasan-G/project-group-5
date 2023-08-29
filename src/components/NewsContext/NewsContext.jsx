// NewsContext.js

import { createContext, useContext, useState } from 'react';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [selectedNews, setSelectedNews] = useState(null);

    return (
        <NewsContext.Provider value={{ selectedNews, setSelectedNews }}>
            {children}
        </NewsContext.Provider>
    );
};

export const useNewsContext = () => {
    return useContext(NewsContext);
};
