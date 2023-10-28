import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';
import Select from "react-dropdown-select"
import voices from '../voices.json/';

const TextArea = ({ buttons, displayAtrributes, selectedAttributeId, generateButton, textValue }) => {
    const [showTagAttributes, setShowTagAttributes] = useState(false);
    const [selectedVoice, setSelectedVoice] = useState("Danielle");
    const [disableSelectingTag, setDisableSelectingTag] = useState(false);

    const ssml = [];
    for (let items in buttons) {
        ssml.push(buttons[items]);
    }

    useEffect(() => {
        if (displayAtrributes) {
            setShowTagAttributes(true);
            setDisableSelectingTag(true)
        }
        else {
            setShowTagAttributes(false);
        }
    }, [displayAtrributes]);


    const generateAudio = () => {
        console.log("generating Audio");

        const textArea = document.getElementById('ssmlTextarea');
        textValue(textArea.value, selectedVoice);
        console.log(textArea.value);

        // const { selectionStart, selectionEnd } = textArea;
        // const currentValue = textArea.value;
        // const updatedValue = `${currentValue.substring(0, selectionStart)} ${ssmlTag} ${currentValue.substring(selectionEnd)}`;
        // textArea.value = updatedValue;
    }



    return (
        <>
            <div id='tagAttributes' className='flex border border-solid border-purple-800 w-3/5 h-15 rounded-lg p-4 mt-4 text-white'>
                {showTagAttributes && <Buttons buttons={ssml[selectedAttributeId]} disableSelectingTag={disableSelectingTag} />}
            </div>
            <textarea
                id='ssmlTextarea'
                className="w-3/5 h-80 p-2 border border-purple-800 rounded-lg bg-transparent text-white"
                placeholder="Enter your text here, then Drag and drop the tags between the words..." style={{ outline: 'none' }}
            >
            </textarea>
            <div className='flex border border-solid border-purple-800 w-3/5 h-15 rounded-lg p-4'>
                <label htmlFor="voices" className='text-white mr-4'>
                    Voices
                </label>
                <div className="flex justify-between w-full">
                    <Select
                        options={voices}
                        labelField="name"
                        valueField="id"
                        dropdownHeight="150px"
                        style={{ borderRadius: "0.5rem", width: "200px" }}
                        className=" bg-white rounded-lg"
                        onChange={(values) => {
                            setSelectedVoice(values[0].name.split(" ")[0].toString());
                        }}
                    />
                    <Buttons buttonColor="bg-cyan-400" buttons={generateButton} generateAudioClick={generateAudio} />
                </div>
            </div>
        </>
    );
};

export default TextArea;
