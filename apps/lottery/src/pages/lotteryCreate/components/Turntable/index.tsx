import { LotteryNewItem } from '@zyy/openapi/src/axios/lottery/lottery';
import { forwardRef, useMemo } from 'react';
import { TurntableItem, TurntableTurn } from '../../../../components/Turntable/types';
import TurntableCanvas, { TurntableRef } from '../../../../components/TurntableCanvas';

export interface TurntableProps {
  value?: LotteryNewItem[],
}

export default forwardRef<TurntableRef, TurntableProps >(({ value = [] }, ref) => {
  const turns:TurntableTurn[] = useMemo(() => {
    const items = value.filter((i) => i.name && i.value) as TurntableItem[];
    const sum = items.reduce((a, b) => a + b.value, 0);
    return items.map((item) => ({ ...item, angle: item.value * ((2 * Math.PI) / sum) }));
  }, [value]);

  return (
    <div className="w-[368px] h-[294px] mx-auto">
      <TurntableCanvas key={JSON.stringify(turns)} turns={turns} ref={ref} />
    </div>
  );
});
