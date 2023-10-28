import './index.css'
import Header from './components/Header'
import Tags from './components/Tags'
import TextArea from './components/TextArea'
import TextToSpeech from './components/TextToSpeech'
import Audio from './components/Audio'
import Download from './components/Download'
import data from './data.json';
import React, { useState } from 'react';


function App() {

  const buttons = data;
  const [audioUrl, setAudioUrl] = useState("");
  const [voice, setVoice] = useState("Danielle");
  const [showComponent, setShowComponent] = useState(false);
  const [showAttributes, setShowAttributes] = useState(false);
  const [textToSpeechValue, setTextToSpeechValue] = useState('');
  const [selectedAttributeId, setSelectedAttributeId] = useState(-1);
  

  const handleOnclick = (id) => {
    setSelectedAttributeId(id);
    setShowAttributes(true);
  }

  const getAudioUrl = (url) => {
    setAudioUrl(url);
    setShowComponent(true);
  }

  const getTextToSpeechValue = (text, voice) => {
    setTextToSpeechValue(text);
    setVoice(voice);
  }

  return (
    <>
      <div className='bg-slate-900 min-h-screen w-screen '>
        <div className='flex flex-col justify-center items-center'>
          <Header></Header>
          <Tags buttons={buttons} click={handleOnclick}></Tags>
          <TextArea buttons={buttons.ssmlAttributes} generateButton={buttons.generate} displayAtrributes={showAttributes} selectedAttributeId={selectedAttributeId} textValue={getTextToSpeechValue} />
          {showComponent && <Audio audioUrl={audioUrl} />}
          {showComponent && <Download buttons={buttons} />}
          <TextToSpeech getAudioUrl={getAudioUrl} text={textToSpeechValue} voice={voice}/>
        </div>
      </div>
    </>
  )
}

export default App;
