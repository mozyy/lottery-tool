'use client';

import { Box, Unstable_Grid2 as Grid } from '@mui/material';
import { useEffect, useRef } from 'react';

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let ended = false;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!video || !canvas || !ctx) {
      return () => {};
    }
    let width = 0;
    let height = 0;
    const canvasScale = () => {
      const { width: clientWidth, height: clientHeight } = canvas.getBoundingClientRect();
      width = clientWidth;
      height = clientHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      ctx.scale(-devicePixelRatio, devicePixelRatio);
    };
    canvasScale();
    window.addEventListener('resize', canvasScale);
    (async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true });
      video.srcObject = stream;
      video.addEventListener('loadedmetadata', video.play);
      const render = () => {
        if (ended) {
          if (stream) {
            stream.getTracks().forEach((track) => track.stop());
          }
          return;
        }
        ctx.clearRect(-width, 0, width, height);
        ctx.drawImage(video, -width, 0, width, height);
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    })();
    return () => {
      ended = true;
      window.removeEventListener('resize', canvasScale);
    };
  }, []);

  return (
    <Box>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video style={{ display: 'none' }} ref={videoRef} />
      <Grid container justifyContent="center">
        <Grid xs={12} sm={8} md={6} xl={4}>
          <Box sx={{ aspectRatio: '1/1' }}>
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} width={300} height={300} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
