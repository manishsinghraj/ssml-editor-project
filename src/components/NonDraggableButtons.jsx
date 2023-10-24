import React from 'react'
import { calculateButtonWidth } from '../utils/widthCalculations'

export const NonDraggableButtons = ({ label }) => {
    return (
        <button
            draggable="false"
            className='ml-4 rounded-md border-2 border-solid border-indigo-800 w-20 h-9 t' 
            style={{ width: calculateButtonWidth(label) }}
            >
            {label}
        </button>
    )
}
