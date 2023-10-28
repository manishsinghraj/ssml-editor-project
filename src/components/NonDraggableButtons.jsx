import React from 'react'
import { calculateButtonWidth } from '../utils/widthCalculations'

export const NonDraggableButtons = ({ label, buttonColor, generateAudioClick }) => {
    // const [bgColor, setBgColor] = useState('');
    const bgColorClass = buttonColor;
    console.log(bgColorClass);

    const handleClick = () => {
        generateAudioClick();
    }

    return (
        <button
            draggable="false"
            className={`ml-4 rounded-md border-2 border-solid border-indigo-800 w-20 h-9 t ${bgColorClass}`}
            style={{ width: calculateButtonWidth(label)}}
            onClick={handleClick}
            >
            {label}
        </button>
    )
}
