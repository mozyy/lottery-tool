import { LotteryItem } from '@zyy/openapi/src/axios/lottery/lottery';

export interface TurntableItem extends Required<Pick<LotteryItem, 'name' | 'value'>> {

}
export interface TurntableTurn extends TurntableItem {
  /** 角度 */
  angle: number,
}
