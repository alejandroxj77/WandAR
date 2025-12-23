import React, { createContext, useContext, useRef, useState } from 'react';
import Loader from '../ui/loader';

const LoaderContext = createContext({
    showLoader: ({ text }: { text: string }) => { },
    hideLoader: () => { },
});

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const message = useRef('');

    const showLoader = ({ text }: { text: string }) => {
        message.current = text;
        setVisible(true);
    }
    const hideLoader = () => {
        message.current = '';
        setVisible(false);
    };

    return (
        <LoaderContext.Provider value={{ showLoader, hideLoader }}>
            {children}
            {visible && <Loader message={message.current} />}
        </LoaderContext.Provider>
    );
};