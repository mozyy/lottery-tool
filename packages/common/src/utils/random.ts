let index = 0;
// eslint-disable-next-line no-plusplus
export const getRandomString = (prefix: string) => `${prefix}_${Math.random().toString(36).slice(2)}_${Date.now()}_${index++}`;
