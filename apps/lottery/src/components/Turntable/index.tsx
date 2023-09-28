import { Button } from '@nutui/nutui-react-taro';
import {
  CSSProperties, ForwardedRef, forwardRef,
  useImperativeHandle, useMemo,
  useState,
} from 'react';
import TurntableCanvas from '../TurntableCanvas';
import styles from './index.module.scss';
import { TurntableItem, TurntableTurn } from './types';

export interface TurntableProps {
  items: TurntableItem[],
}
export interface TurntableRef {
  turn:(prize: number) =>Promise<void>
}

export default forwardRef((props:TurntableProps, ref:ForwardedRef<TurntableRef>) => {
  const { items } = props;
  const [style, setStyle] = useState<CSSProperties>({});

  const turns:TurntableTurn[] = useMemo(() => {
    const sum = items.reduce((a, b) => a + b.value, 0);
    return items.map((item) => ({ ...item, angle: item.value * ((2 * Math.PI) / sum) }));
  }, [items]);

  useImperativeHandle(ref, () => ({
    turn: (prize: number) => new Promise((resolve) => {
      const turnsNumber = Math.floor(Math.random() * 3) + 5;
      let rotate = 0;
      for (let i = 0; i < prize; i += 1) {
        rotate -= turns[i].angle / 2 + turns[i + 1].angle / 2;
      }
      const turnsTime = Math.floor(Math.random() * 5) + 3;
      rotate -= turnsNumber * 2 * Math.PI;
      setStyle((p) => {
        if (p.transform) {
          return {};
        }
        return {
          transform: `rotate(${rotate}rad)`,
          transition: `transform ${turnsTime}s cubic-bezier(0.250, 0.460, 0.455, 0.995)`,
        };
      });
      setTimeout(resolve, turnsTime * 1000);
    }),
  }), [turns]);

  return (
    <div className="relative h-[700px] w-[700px] mx-auto">
      <div className="h-full w-full" style={style}>
        <TurntableCanvas turns={turns} />
      </div>
      <Button className={styles.pointer} formType="submit">开始</Button>
    </div>
  );
});
