import { LotterylotteryType } from 'openapi/axios/lottery/lottery';

const typeDescMap = {
  [LotterylotteryType.Number]: '个数',
  [LotterylotteryType.Percent]: '几率',
};

export const getLotteryTypeDesc = (type:LotterylotteryType
= LotterylotteryType.Number) => (typeDescMap[type]);

const typeUnitMap = {
  [LotterylotteryType.Number]: '个',
  [LotterylotteryType.Percent]: '%',
};
export const getLotteryTypeUnit = (type:LotterylotteryType
= LotterylotteryType.Number) => (typeUnitMap[type]);
