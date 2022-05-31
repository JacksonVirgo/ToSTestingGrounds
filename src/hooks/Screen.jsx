import React, { useContext, createContext, useState } from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const FullscreenContext = createContext();
export const useFullscreen = () => useContext(FullscreenContext);


export default function ScreenContext({children}) {
    const handle = useFullScreenHandle();
    return (
        <FullscreenContext.Provider value={handle}>
            <FullScreen handle={handle}>
                {children}
            </FullScreen>
        </FullscreenContext.Provider>
        )
}