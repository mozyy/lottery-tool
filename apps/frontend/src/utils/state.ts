export enum SexEnum {
  UNKNOW,
  MAN,
  WOMAN,
}

const sexEnumMap = ['unknow', '男', '女'];

export const sexEnumDesc = (value:SexEnum) => sexEnumMap[value];
