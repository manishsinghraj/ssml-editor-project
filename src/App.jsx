import './index.css'
import Header from './components/Header'
import Tags from './components/Tags'
import TextArea from './components/TextArea'
import { Audio } from './components/Audio'
import Download from './components/Download'
import data from './data.json';
import React, { useState } from 'react';

function App() {

  const buttons = data;
  const [showAttributes, setShowAttributes] = useState(false);
  const [id, getId] = useState(-1);

  const handleOnclick = (id) => {
    getId(id);
    setShowAttributes(true);
  }



  return (
    <>
      <div className='bg-slate-900 min-h-screen w-screen '>
        <div className='flex flex-col justify-center items-center'>
          <Header></Header>
          <Tags buttons={buttons} click={handleOnclick}></Tags>
          <TextArea buttons={buttons.ssmlAttributes} displayAtrributes={showAttributes} id={id} />
          <Audio />
          <Download buttons={buttons} />
        </div>
      </div>
    </>
  )
}

export default App;
