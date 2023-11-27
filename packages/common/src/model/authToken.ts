import { AuthJWTPayload, AuthToken as AuthTokenModel } from '@zyy/openapi/src/fetch/user/auth';
import { decryptBase64url } from '../utils/crypto';

export class AuthToken {
  private jwt: AuthJWTPayload;

  constructor(public model: AuthTokenModel) {
    const [payloadStr] = model.accessToken!.split('.');
    this.jwt = JSON.parse(decryptBase64url(payloadStr));
  }

  get expired() {
    return Date.now() > this.model.expiresIn!;
  }

  get shouldRefresh() {
    return Date.now() > this.jwt.exp! && !this.expired;
  }

  static restore(token: AuthToken) {
    const newToken = new AuthToken(token.model);
    return newToken;
  }

  get userId() {
    return this.jwt.sub;
  }
}
