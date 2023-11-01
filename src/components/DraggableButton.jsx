import React from 'react';
import { calculateButtonWidth } from '../utils/widthCalculations';



const DraggableButton = (props) => {
    const { label, ssmlTag, getTag, id, disableSelectingTag } = props;

    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', ssmlTag);
    };

    const handleOnClick = () => {
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
            className='ml-4 rounded-md border border-solid border-yellow-200 w-20 h-9'
            style={{ width: calculateButtonWidth(label) }}
        >
            {label}
        </button>
    );
};

export default DraggableButton;