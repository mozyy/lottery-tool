import { AuthToken, authTokenCreator } from '@zyy/common/src/model/authToken';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { getStorage, removeStorage, setStorage } from '../utils/storage';

export const useAuthToken = create(persist<AuthToken>(authTokenCreator, {
  name: 'AUTH_INFO',
  storage: createJSONStorage(() => ({
    getItem: getStorage,
    setItem: setStorage,
    removeItem: removeStorage,
  })),
}));
