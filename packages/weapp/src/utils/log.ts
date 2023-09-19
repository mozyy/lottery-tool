import { getRealtimeLogManager } from '@tarojs/taro';

export const logManager = getRealtimeLogManager();

export const info = (...args) => {
  console.log(...args);
  logManager.info(...args);
};

export const warn = (...args) => {
  console.warn(...args);
  logManager.warn(...args);
};

export const error = (...args) => {
  console.error(...args);
  logManager.error(...args);
};
