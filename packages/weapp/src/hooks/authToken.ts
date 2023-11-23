import { AuthToken } from '@zyy/common/src/model/authToken';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { getStorage, removeStorage, setStorage } from '../utils/storage';

interface Auth {
  authToken: AuthToken | null,
  login:(token: AuthToken) => void,
  logout:() => void,
}

export const useAuthToken = create(persist<Auth>((set) => ({
  authToken: null as AuthToken | null,
  login: (token: AuthToken) => set({ authToken: token }),
  logout: () => set({ authToken: null }),
}), {
  name: 'AUTH_INFO',
  storage: createJSONStorage(() => ({
    getItem: getStorage,
    setItem: setStorage,
    removeItem: removeStorage,
  })),
}));
