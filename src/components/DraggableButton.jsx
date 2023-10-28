import React, { useState } from 'react';
import { calculateButtonWidth } from '../utils/widthCalculations';



const DraggableButton = ({ label, ssmlTag, getTag, id, disableSelectingTag }) => {


    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', ssmlTag);
    };

    const handleOnClick = () => {
        console.log("key" + id);
        if (!disableSelectingTag){
            getTag(id);
        }
        // const textArea = document.getElementById('ssmlTextarea');
        // const { selectionStart, selectionEnd } = textArea;
        // const currentValue = textArea.value;
        // const updatedValue = `${currentValue.substring(0, selectionStart)} ${ssmlTag} ${currentValue.substring(selectionEnd)}`;
        // textArea.value = updatedValue;
    };







    // const tagAttributesArea = document.getElementById('tagAttributes');
    // const { selectionStart, selectionEnd } = tagAttributesArea;
    // const currentValue = tagAttributesArea.value;
    // const updatedValue = `${currentValue.substring(0, selectionStart)} ${ssmlTag} ${currentValue.substring(selectionEnd)}`;
    // tagAttributesArea.value = updatedValue;



    return (
        <button
            draggable="true"
            onDragStart={handleDragStart}
            onClick={handleOnClick}
            className='ml-4 rounded-md border-2 border-solid border-indigo-800 w-20 h-9 t'
            style={{ width: calculateButtonWidth(label) }}
        >
            {label}
        </button>
    );
};

export default DraggableButton;