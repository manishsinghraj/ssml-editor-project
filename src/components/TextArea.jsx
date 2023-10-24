import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';

const TextArea = ({ buttons, displayAtrributes, id }) => {
    const [showTagAttributes, setShowTagAttributes] = useState(false);

    const ssml = [];
    for (let items in buttons) {
        ssml.push(buttons[items]);
    }

    useEffect(() => {
        if (displayAtrributes) {
            setShowTagAttributes(true);
        }
        else {
            setShowTagAttributes(false);
        }
    }, [displayAtrributes]);

    return (
        <>
            <div id='tagAttributes' className='flex border border-solid border-purple-800 w-3/5 h-15 rounded-lg p-4 mt-4 text-white'>
                {showTagAttributes && <Buttons buttons={ssml[id]} />}
            </div>
            <textarea
                id='ssmlTextarea'
                className="w-3/5 h-80 p-2 border border-purple-800 rounded-lg bg-transparent text-white"
                placeholder="Enter your text here, then Drag and drop the tags between the words..." style={{ outline: 'none' }}
            ></textarea>
            <div className='flex border border-solid border-purple-800 w-3/5 h-15 rounded-lg p-4'></div>
        </>
    );
};

export default TextArea;
