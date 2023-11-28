import { AuthJWTPayload, AuthToken as AuthTokenModel } from '@zyy/openapi/src/fetch/user/auth';
import { StateCreator } from 'zustand';
import { decryptBase64url } from '../utils/crypto';

export interface AuthToken {
  jwt: AuthJWTPayload | null,
  authToken: AuthTokenModel | null,
  login:(token: AuthTokenModel) => void,
  logout:() => void,
  logined:() => boolean,
  expired:() => boolean
  shouldRefresh:() => boolean
}

export const useAuthToken:StateCreator<AuthToken> = (set, get) => ({
  jwt: null,
  authToken: null,
  login: (token) => {
    const [payloadStr] = token.accessToken!.split('.');
    const jwt = JSON.parse(decryptBase64url(payloadStr));
    set({ authToken: token, jwt });
  },
  logout: () => set({ authToken: null, jwt: null }),
  logined: () => !!get().authToken && !get().expired(),
  expired: () => {
    const expiresIn = get().authToken?.expiresIn;
    if (!expiresIn) {
      return true;
    }
    if (Date.now() > expiresIn) {
      get().logout();
      return true;
    }
    return false;
  },
  shouldRefresh: () => {
    const jwtExp = get().jwt?.exp;
    return !!jwtExp && Date.now() > jwtExp && get().expired();
  },
});
