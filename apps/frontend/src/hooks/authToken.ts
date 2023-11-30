import { authTokenCreator } from '@zyy/common/src/model/authToken';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useAuthToken = create(persist(authTokenCreator, {
  name: 'authToken',
  storage: createJSONStorage(() => localStorage),
}));
