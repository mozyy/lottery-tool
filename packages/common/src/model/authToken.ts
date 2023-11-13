import { AuthauthUser, AuthToken as AuthTokenModel } from '@zyy/openapi/src/axios/wx/user';

export class AuthToken {
  private expires: number;

  private refreshDate: number;

  constructor(public model: AuthTokenModel, public user: AuthauthUser) {
    this.expires = Date.now() + this.model.expiresIn! * 1000;
    this.refreshDate = Date.now() + (this.model.expiresIn! * 1000) / 2;
  }

  expired() {
    return Date.now() > this.expires;
  }

  shouldRefresh() {
    return Date.now() > this.refreshDate;
  }

  static restore(token: AuthToken) {
    const newToken = new AuthToken(token.model, token.user);
    newToken.expires = token.expires;
    return newToken;
  }

  get userId() {
    return this.user?.id;
  }
}
