import { Canvas } from '@tarojs/components';
import {
  Canvas as CanvasType,
  canvasToTempFilePath,
  createSelectorQuery, getSystemInfoSync, showToast,
} from '@tarojs/taro';
import { getRandomString } from '@zyy/common/src/utils/random';
import {
  ForwardedRef, forwardRef, useEffect,
  useImperativeHandle,
  useRef, useState,
} from 'react';
import { TurntableTurn } from '../Turntable/types';

export interface TurntableProps {
  turns: TurntableTurn[],
}
export interface TurntableRef {
  getImagePath:() =>Promise<string>
}

export default forwardRef((props:TurntableProps, ref:ForwardedRef<TurntableRef>) => {
  const { turns } = props;
  const [id] = useState(() => getRandomString('canvas'));

  const canvasInfoRef = useRef<{ node: CanvasType, width: number, height:number }>();
  const ctxPromiseRef = useRef<Promise<CanvasRenderingContext2D>>();

  useEffect(() => {
    ctxPromiseRef.current = new Promise<CanvasRenderingContext2D>((resolve, reject) => {
      let i = 0;
      const handler = () => createSelectorQuery()
        .select(`#${id}`)
        .fields({ node: true, size: true })
        .exec((reses) => {
          const res = reses[0];
          if (!res) {
            console.warn(`没有canvas node ${i}`);
            if (i < 3) {
              i += 1;
              setTimeout(handler, 100);
            } else {
              showToast({ title: 'no canvas', icon: 'error' });
              reject(Error('canvas init error'));
            }
            return;
          }
          canvasInfoRef.current = res;
          const canvas = res.node;
          const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
          const dpr = getSystemInfoSync().pixelRatio;
          canvas.width = res.width * dpr;
          canvas.height = res.height * dpr;
          ctx.scale(dpr, dpr);
          resolve(ctx);
        });
      handler();
    });
  }, [id]);

  useEffect(() => {
    ctxPromiseRef.current!.then((ctx) => {
      const { width, height } = canvasInfoRef.current!;

      const radius = Math.min(width, height) / 2 - 1;
      const centerX = width / 2;
      const centerY = height / 2;
      const prizeBgColors = [
        'rgb(255, 231, 149)',
        'rgb(255, 247, 223)',
        'rgb(251, 219, 216)',
        'rgba(246, 142, 46, 0.5)',
      ];
      ctx.clearRect(0, 0, width, height);
      ctx.translate(centerX, centerY);
      // ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = '#ff9800';
      ctx.lineWidth = 1;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      for (let i = 0; i < turns.length; i += 1) {
        const item = turns[i];
        const angle = item.angle / 2;
        if (i > 0) {
          ctx.rotate(angle);
        }

        ctx.fillStyle = prizeBgColors[i % prizeBgColors.length]; // 奇偶奖项颜色不同
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, 1.5 * Math.PI - angle, angle - 0.5 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = 'black';

        ctx.fillText(item.name, 0, -radius + 10, 2 * Math.sin(angle) * radius - 15);
        // 奖品图片
        // const image = new Image();
        // image.src = items[i].imageSrc;
        // const imageWidth = 50;
        // const imageHeight = 50;
        // const imageRadius = wheelRadius + 75;
        // const imageAngle = i * angle + angle / 2;
        // ctx.rotate(-textAngle);
        // ctx.translate(0, -imageRadius);
        // ctx.drawImage(image, -imageWidth / 2, -imageHeight / 2, imageWidth, imageHeight);
        ctx.rotate(angle);
      }
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.translate(-centerX, -centerY);
    });
  }, [turns]);

  useImperativeHandle(ref, () => ({
    getImagePath: async () => {
      await ctxPromiseRef.current!;
      const canvas = canvasInfoRef.current!.node;
      const res = await canvasToTempFilePath({ canvas });
      return res.tempFilePath;
    },
  }), []);

  return (
    <Canvas className="h-full w-full" type="2d" id={id} />
  );
});
