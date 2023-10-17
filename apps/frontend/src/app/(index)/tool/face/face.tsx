'use client';

import { Box } from '@/mui/material';
import cv from '@techstark/opencv-js';
import Script from 'next/script';
import { InferenceSessionFactory, TensorConstructor } from 'onnxruntime-web';
import { useRef } from 'react';

/**
 * Preprocessing image
 * @param {HTMLImageElement} source image source
 * @param {Number} modelWidth model input width
 * @param {Number} modelHeight model input height
 * @return preprocessed image and configs
 */
const preprocessing = (source, modelWidth, modelHeight) => {
  // const mat = cv.imread(source); // read from img tag
  const mat = cv.matFromImageData(source);
  const matC3 = new cv.Mat(mat.rows, mat.cols, cv.CV_8UC3); // new image matrix
  cv.cvtColor(mat, matC3, cv.COLOR_RGBA2BGR); // RGBA to BGR

  // padding image to [n x n] dim
  const maxSize = Math.max(matC3.rows, matC3.cols); // get max size from width and height
  const xPad = maxSize - matC3.cols; // set xPadding
  const xRatio = maxSize / matC3.cols; // set xRatio
  const yPad = maxSize - matC3.rows; // set yPadding
  const yRatio = maxSize / matC3.rows; // set yRatio
  const matPad = new cv.Mat(); // new mat for padded image
  cv.copyMakeBorder(matC3, matPad, 0, yPad, 0, xPad, cv.BORDER_CONSTANT); // padding black

  const input = cv.blobFromImage(
    matPad,
    1 / 255.0, // normalize
    new cv.Size(modelWidth, modelHeight), // resize to model input size
    new cv.Scalar(0, 0, 0),
    true, // swapRB
    false, // crop
  ); // preprocessing image matrix

  // release mat opencv
  mat.delete();
  matC3.delete();
  matPad.delete();

  return [input, xRatio, yRatio];
};

const start = Date.now();
export default function Face() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statusRef = useRef(true);

  const handler = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!video || !canvas || !ctx) {
      return;
    }
    // ctx.scale(2, 2);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true });
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', video.play);

    const modelInputShape = [1, 3, 320, 240];
    const topk = 100;
    const iouThreshold = 0.45;
    const scoreThreshold = 0.25;

    const InferenceSession = (window as any).ort.InferenceSession as InferenceSessionFactory;
    const Tensor = (window as any).ort.Tensor as TensorConstructor;
    const yolov8 = await InferenceSession.create('/yolov8n-face.onnx');
    const face = await InferenceSession.create('/version-RFB-320-int8.onnx');
    console.log(yolov8, face);
    const tensor = new Tensor(
      'float32',
      new Float32Array(modelInputShape.reduce((a, b) => a * b)),
      modelInputShape,
    );
    await face.run({ images: tensor });

    const [modelWidth, modelHeight] = modelInputShape.slice(2);

    const config = new Tensor(
      'float32',
      new Float32Array([
        topk, // topk per class
        iouThreshold, // iou threshold
        scoreThreshold, // score threshold
      ]),
    );
    ctx.lineWidth = 2;

    const render = async () => {
      if (!statusRef.current) {
        return;
      }
      const time1 = Date.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      if (statusRef.current) {
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const [input, xRatio, yRatio] = preprocessing(imgData, modelWidth, modelHeight);
        const time2 = Date.now();
        const images = new Tensor('float32', input.data32F, modelInputShape); // to ort.Tensor
        const result = await face.run({ input: images }); // run session and get output layer
        input.delete();
        console.log(result);
        //   if (result) {
        //   console.log(result)
        // }
        // const time3 = Date.now();
        // const time4 = Date.now();
        // for (let idx = 0; idx < selected.dims[1]; idx += 1) {
        //   const data = selected.data.slice(idx * selected.dims[2], (idx + 1) * selected.dims[2]);
        //   const scores = data.slice(4) as unknown as number[];
        //   const score = Math.max(...scores);
        //   const label = scores.indexOf(score);
        //   const [xx, yy, ww, hh] = data.slice(0, 4) as unknown as number[];
        //   const [x, y, w, h] = [
        //     (xx - 0.5 * ww) * xRatio,
        //     (yy - 0.5 * hh) * yRatio,
        //     ww * xRatio,
        //     hh * yRatio];
        //   ctx.strokeRect(x, y, w, h);
        //   ctx.fillText(`${label} - ${(score * 100).toFixed(1)}%`, x + 1, y + 1);
        // }
        // const time5 = Date.now();
        // console.log(`preprocessImage: ${time2 - time1} yolo: ${time3 - time2} nms: ${time4 - time3} box: ${time5 - time4} all: ${Date.now() - time1}
        // `, selected);
      }
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  };

  return (
    <Box>
      <Script src="https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/ort.min.js" onLoad={handler} />
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video ref={videoRef} hidden />
      <canvas ref={canvasRef} style={{ width: 320, height: 320 }} width={640} height={640} />
      <button onClick={() => statusRef.current = !statusRef.current}>切换</button>
    </Box>
  );
}
