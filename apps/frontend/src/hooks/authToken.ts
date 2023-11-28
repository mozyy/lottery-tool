import { AuthToken, useAuthToken as useAuthTokenC } from '@zyy/common/src/hooks/authToken';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useAuthToken = create(persist<AuthToken>(useAuthTokenC, {
  name: 'authToken',
  storage: createJSONStorage(() => localStorage),
}));
