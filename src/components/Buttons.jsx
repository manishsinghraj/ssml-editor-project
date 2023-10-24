// Buttons.js
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import DraggableButton from './DraggableButton';
import { NonDraggableButtons } from './NonDraggableButtons';

const Buttons = (props) => {
    const { buttons, selectedTag } = props; 
    console.log(JSON.stringify(buttons) + "buttons");

    const handleTag = (id) => {
        selectedTag(id);
    }

    let tags = (buttons).map((item, index) => {
        return (
            item.draggable ?
                <DraggableButton getTag={handleTag} key={uuidv4()} id={index} label={item.label} ssmlTag={item.ssmlTag}>{item.label}</DraggableButton>
                :
                <NonDraggableButtons key={uuidv4()} label={item.label}>
                    {item.label}</NonDraggableButtons>
        );
    });

    return <>{tags}</>;
}

export default Buttons;
