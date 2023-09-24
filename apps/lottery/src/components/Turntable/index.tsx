import { Canvas } from '@tarojs/components';
import { Canvas as CanvasType, createSelectorQuery, getSystemInfoSync, showToast } from '@tarojs/taro';
import { LotteryItem } from '@zyy/openapi/src/axios/lottery/lottery';
import { getRandomString } from '@zyy/utils/src/random';
import { useEffect, useRef, useState } from 'react';
({})

export interface TurntableProps {
  items: Required<Pick<LotteryItem, 'name'|'value'>>[],
}

export default function Turntable(props:TurntableProps) {
  const { items } = props;
  const canvasRef = useRef<any>(null);
  const [id] = useState(() => getRandomString('canvas'))

  const canvasInfoRef = useRef();
  const ctxPromiseRef = useRef<Promise<CanvasRenderingContext2D>>();

  useEffect(()=>{
    ctxPromiseRef.current = new Promise<CanvasRenderingContext2D>((resolve, reject )=>{
      let i = 0
      const handler = () =>
        createSelectorQuery()
        .select(`#${id}`)
        .fields({ node: true, size: true })
        .exec(reses => {
          const res = reses[0]
          if (!res) {
            console.log('没有canvas node '+i)
            if (i++ < 3) {
              setTimeout(handler, 100)
            }else {
              showToast({title: 'no canvas', icon:'error'})
              reject(Error('canvas init error'))
            }
            return
          }
          canvasInfoRef.current = res;
          const canvas:CanvasType = res.node;
          const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
          const dpr = getSystemInfoSync().pixelRatio;
          canvas.width = res.width * dpr;
          canvas.height = res.height * dpr;
          ctx.scale(dpr, dpr);
          resolve(ctx);
        })
        handler();
    });
  }, []);

  useEffect(()=>{
      ctxPromiseRef.current!.then(ctx =>{
        const {width, height} = canvasInfoRef.current!;
          ctx.clearRect(0, 0, width, height);
          ctx.lineWidth = 2;
          ctx.strokeStyle = 'black';
          ctx.beginPath();
          const radius = width/2 - 1;
          const centerX = width / 2;
          const centerY = height / 2;
          const sum = items.reduce((a,b)=>a + b.value, 0)
          const itemAngle = (2 * Math.PI) / sum;
          console.log(2222, items, sum, itemAngle)
          let angle = 0;
          ctx.translate(centerX, centerY);
          for (let i = 0; i<items.length; i++) {
            let item = items[i]
            const angle = item.value * itemAngle;

            ctx.fillStyle = i % 2 === 0 ? 'red' : 'green'; // 奇偶奖项颜色不同
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, radius, 2 * Math.PI - angle, angle);
            console.log(222, 0, angle)
            ctx.lineTo(0, 0);
            ctx.fill();
            ctx.stroke();
            ctx.translate
            // ctx.fillText(item.name, 0, radius - 10);
          }
        })
  }, [])

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) {
  //     return
  //   }
  //   console.log(123, canvas)
  //   const ctx = canvas.getContext('2d');
  //   const numSegments = items.length;
  //   const wheelRadius = 200;
  //   const centerX = canvas.width / 2;
  //   const centerY = canvas.height / 2;
  //   const angle = (2 * Math.PI) / numSegments;

  //   // 绘制转盘
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   ctx.lineWidth = 2;
  //   ctx.strokeStyle = 'black';
  //   ctx.beginPath();

  //   for (let i = 0; i < numSegments; i++) {
  //     const startAngle = i * angle;
  //     const endAngle = (i + 1) * angle;

  //     ctx.fillStyle = i % 2 === 0 ? '#FF5733' : '#FF6347'; // 奇偶奖项颜色不同
  //     ctx.moveTo(centerX, centerY);
  //     ctx.arc(centerX, centerY, wheelRadius, startAngle, endAngle);
  //     ctx.lineTo(centerX, centerY);
  //     ctx.fill();
  //     ctx.stroke();
  //   }

  //   // 绘制奖品名和奖品图片
  //   ctx.fillStyle = 'white';
  //   ctx.font = '16px Arial';
  //   ctx.textAlign = 'center';

  //   for (let i = 0; i < numSegments; i++) {
  //     const text = items[i].name;
  //     const textRadius = wheelRadius + 30;
  //     const textAngle = i * angle + angle / 2;

  //     ctx.save();

  //     // 奖品名
  //     ctx.translate(centerX, centerY);
  //     ctx.rotate(textAngle);
  //     ctx.fillText(text, 0, -textRadius);

  //     // 奖品图片
  //     // const image = new Image();
  //     // image.src = items[i].imageSrc;
  //     // const imageWidth = 50;
  //     // const imageHeight = 50;
  //     // const imageRadius = wheelRadius + 75;
  //     // const imageAngle = i * angle + angle / 2;
  //     // ctx.rotate(-textAngle);
  //     // ctx.translate(0, -imageRadius);
  //     // ctx.drawImage(image, -imageWidth / 2, -imageHeight / 2, imageWidth, imageHeight);

  //     ctx.restore();
  //   }
  // }, [items]);

  const spinWheel = () => {
    // 在这里添加旋转转盘的逻辑
    // 可以使用动画来实现旋转效果
  };

  return (
    <div>
      <Canvas className='h-48 w-48'
       type='2d' id={id}></Canvas>
    </div>
  );
}
