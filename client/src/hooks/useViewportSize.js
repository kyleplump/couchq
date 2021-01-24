import { useState, useEffect } from 'react';

function getViewportDimensions() {

    const {  innerWidth, innerHeight } = window;

    return {
        width: innerWidth,
        height: innerHeight
    }
}

export default function useViewportSize() {

    const [ viewportSize, setViewportSize ] = useState(getViewportDimensions());

    useEffect(() => {

        function handleWindowResize() {
            setViewportSize(getViewportDimensions());

        }

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return viewportSize;
}
