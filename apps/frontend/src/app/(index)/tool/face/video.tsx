'use client';

import { useEffect, useRef } from 'react';
import { Box } from '@/mui/material';

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    (async () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!video || !canvas || !ctx) {
        return;
      }
      const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true });
      video.srcObject = stream;
      video.addEventListener('loadedmetadata', video.play);
      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    })();
  }, []);

  return (
    <Box>
      <video ref={videoRef} hidden />
      <canvas ref={canvasRef} width={300} height={300} />
    </Box>
  );
}
