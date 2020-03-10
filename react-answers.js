/**
 * React
 */

// 1) React test step1:

import React, { useLayoutEffect, useState } from 'react';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function ShowWindowDimensions(props) {
    const [width, height] = useWindowSize();
    return (
        <div>
             <span>Window size: {width} x {height}</span>
        </div>
    );
}


// 2) React test step2:

import React, { useLayoutEffect, useState } from 'react';

function ShowWindowDimensions(props) {

    const [height, setHeight] = useState([0, 0]);

    handlePress(e) {
        setHeight(e.target.value)
    }

    return (
        <div style={{height}}>
            <input type=number onKeyPress={handlePress} />
         </div>
    );
}

// 3) React test step2:
