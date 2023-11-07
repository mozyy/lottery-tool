'use client';

import {
  Box, Button, FormControl, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';

const getBlob = (
  text:string,
  voice: SpeechSynthesisVoice,
) => new Promise<Blob>((resolve, reject) => {
  console.log('picking system audio');
  navigator.mediaDevices.getDisplayMedia({ video: true, audio: true }).then((stream) => {
    const track = stream.getAudioTracks()[0];
    if (!track) {
      reject(Error('System audio not available'));
      return;
    }

    stream.getVideoTracks().forEach((t) => t.stop());

    const mediaStream = new MediaStream();
    mediaStream.addTrack(track);

    const chunks:Blob[] = [];
    const mediaRecorder = new MediaRecorder(mediaStream, { bitsPerSecond: 128000 });
    mediaRecorder.addEventListener('dataavailable', (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    });

    mediaRecorder.addEventListener('stop', () => {
      stream.getTracks().forEach((t) => t.stop());
      mediaStream.removeTrack(track);
      resolve(new Blob(chunks));
    });
    mediaRecorder.start();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => mediaRecorder.stop();
    utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
    console.log('speaking...');
  }, (err) => {
    reject(err);
  });
});

function downloadBlob(blob:Blob, name = 'file.mp3') {
  // Convert your blob into a Blob URL (a special
  // url that points to an object in the browser's memory)
  const blobUrl = URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement('a');

  // Set link's href to point to the Blob URL
  link.href = blobUrl;
  link.download = name;

  // Append link to the body
  document.body.appendChild(link);

  // Dispatch click event on the link
  // This is necessary as link.click() does not work on the latest firefox
  link.dispatchEvent(
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    }),
  );

  // Remove link from body
  document.body.removeChild(link);
}

export default function Tts() {
  const [text, setText] = useState('');
  const [voiceIndex, setVoiceIndex] = useState(0);
  const voicesRef = useRef(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  const start = async () => {
    const opener = window.open(`./tts-preview?text=${text}`, 'voice');
    const [voice] = voices;
    const blob = await getBlob(text, voice).finally(() => {
      opener?.close();
    });

    downloadBlob(blob);
  };

  useEffect(() => {
    const getVoices = () => {
      if (voicesRef.current) {
        return;
      }
      const v = speechSynthesis.getVoices().filter((i) => /cn/i.test(i.lang));
      if (v.length === 0) {
        setTimeout(getVoices, 100);
        return;
      }
      voicesRef.current = true;
      setVoices(v);
    };
    setTimeout(getVoices, 100);
    setTimeout(() => {
      voicesRef.current = true;
    }, 1000);
  }, []);

  return (
    <Box>
      <TextField
        id="outlined-multiline-static"
        label="文字"
        multiline
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">voices</InputLabel>
        <Select value={voiceIndex} onChange={(e) => setVoiceIndex(Number(e.target.value))}>
          {voices.map((voice, i) => (
            <MenuItem
              value={i}
              key={voice.voiceURI}
            >
              {voice.name.split('-')[0].trim()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={start}>生成</Button>
    </Box>
  );
}
