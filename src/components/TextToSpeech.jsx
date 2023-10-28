import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import awsConfig from '../aws.config'

const Polly = new AWS.Polly(awsConfig);

function TextToSpeech({ getAudioUrl, text, voice }) {
    const [response, setResponse] = useState('...');
    // const [textToGenerateSpeech, setTextToGenerateSpeech] = useState(text);

    let selectedVoice = voice;  // <speak>This is sample <break time="500ms" />  test</speak>



    useEffect(() => {
        if (text!== "") {
            generateTextToSpeech();
        }
    }, [text, selectedVoice]);


    function generateTextToSpeech() {
        setResponse('Generating audio...');
        console.log("final " + text);

        const params = {
            OutputFormat: 'mp3',
            Text: text,
            TextType: 'ssml',
            VoiceId: selectedVoice, // Replace with your desired voice
            Engine: 'neural',
        };

        Polly.synthesizeSpeech(params, (err, data) => {
            if (err) {
                console.error('Error:', err);
                setResponse('Error generating audio');
            } else {
                const audioBlob = new Blob([data.AudioStream], { type: 'audio/mpeg' });
                const audioUrl = URL.createObjectURL(audioBlob);
                getAudioUrl(audioUrl);
                setResponse('Generation completed, press play');
            }
        });
    }

    function playAudio(audioUrl) {
        const audio = new Audio(audioUrl);
        audio.play();
    }

    function setText(event) {
        setTextToGenerateSpeech(event.target.value);
    }

    return (
        // <div className="Text text-white">
        //     <h3>Text To Speech </h3>
        //     <input className="text-black" value={text} onChange={setText} />
        //     <button onClick={generateTextToSpeech}> Text to Speech </button>
        //     <h3 > {response} </h3>
        // </div>
        <></>
    );
}

export default TextToSpeech;