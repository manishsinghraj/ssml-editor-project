// import React from 'react';
// import AWS from 'aws-sdk';

// // Import the AWS configuration to ensure it's loaded
// import '../../AWS.config';

// const SpeechSynthesisComponent = () => {
//     // Function to synthesize and play speech
//     const synthesizeSpeech = () => {
//         const polly = new AWS.Polly();
//         const params = {
//             OutputFormat: 'mp3',
//             Text: 'Hello, this is a sample text for speech synthesis.',
//             VoiceId: 'Joanna', // Choose a voice (e.g., Joanna, Matthew, etc.)
//         };

//         polly.synthesizeSpeech(params, (err, data) => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 // Play the generated speech (assumes you have an HTML audio element with an id of 'audioPlayer')
//                 const audioPlayer = document.getElementById('audioPlayer');
//                 audioPlayer.src = `data:audio/mpeg;base64,${data.AudioStream.toString('base64')}`;
//                 audioPlayer.play();
//             }
//         });
//     };

//     return (
//         <div>
//             <button onClick={synthesizeSpeech}>Synthesize Speech</button>
//             <audio id="audioPlayer" controls></audio>
//         </div>
//     );
// };

// export default SpeechSynthesisComponent;




// import React, { useEffect } from 'react';
// import { Amplify } from 'aws-amplify'
// import { Predictions } from 'aws-amplify'; // Import Predictions separately


// import awsconfig from '../aws-exports'; // Import your AWS Amplify config

// Amplify.configure(awsconfig);

// const TextToSpeechComponent = () => {
//   useEffect(() => {
//     const generateSpeech = async () => {
//       try {
//         const result = await Predictions.textToSpeech({
//           text: 'Hello, this is a test.',
//         });

//         const audioData = result.audioStream;
//         // Use the audio data as you need (e.g., to play the audio in your app)
//         const audioBlob = new Blob([audioData], { type: 'audio/mpeg' });
//         const audioUrl = URL.createObjectURL(audioBlob);

//         // Now you can use audioUrl to play the generated speech
//         const audioElement = new Audio(audioUrl);
//         audioElement.play();
//       } catch (error) {
//         console.error('Error: ', error);
//       }
//     };

//     // Call the function to generate speech when the component mounts
//     generateSpeech();
//   }, []); // Empty dependency array ensures the effect runs once after the initial render

//   return <div>Text to Speech Example</div>;
// };

// export default TextToSpeechComponent;





import React, { useEffect } from 'react';
import {Amplify, Predictions } from 'aws-amplify';

import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

const TextToSpeechComponent = () => {
  const generateSpeech = async () => {
    try {
      const result = await Predictions.convert("textToSpeech", {
        source: {
          text: 'Hello, this is a test.',
        },
      });

      const audioData = result.audioStream;
      const audioBlob = new Blob([audioData], { type: 'audio/mpeg' });
      const audioUrl = URL.createObjectURL(audioBlob);

      const audioElement = new Audio(audioUrl);
      audioElement.play();
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  useEffect(() => {
    // Call the function to generate speech when the component mounts
    generateSpeech();
  }, []);

  return (
    <div>
      <button onClick={generateSpeech}>Synthesize Speech</button>
      <audio id="audioPlayer" controls />
    </div>
  );
};

export default TextToSpeechComponent;
