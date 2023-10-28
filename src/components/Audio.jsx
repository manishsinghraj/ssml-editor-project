import React from 'react';
import ReactPlayer from 'react-player';

const Audio = ({audioUrl}) => {


  console.log("audio " + audioUrl); //blob:http://localhost:3000/fff5926d-d604-4712-b9d2-fafb31da40b5
  return (
    <div className='flex border border-solid border-purple-800 w-3/5 h-15 mt-4 rounded-lg p-4 text-white' >
      {/* <audio controls>
        <source src={audioUrl} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio> */}
      < ReactPlayer
        url={audioUrl}
        controls={true}
        height="50px"
        width="100%"
      />
    </div>
  )
}

export default Audio;