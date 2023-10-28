
import React from 'react';
import Buttons from './Buttons';

const Download = (props) => {
    const { buttons} = props;
    const downloadButtton = buttons.download;
    return (
        <div className='flex border border-solid border-purple-800 w-3/5 h-15 mt-4 rounded-lg p-4 text-white'>
            <Buttons buttons={downloadButtton} buttonColor="bg-green-600"/>
        </div>
    );
}

export default Download;
