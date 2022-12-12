import {token} from '../utils/storage';
import Network from './NetworkService';

class AuthService extends Network {
  baseUrl = `${this._baseUrl}/user/auth`;

  // eslint-disable-next-line no-undef
  loginController = new AbortController();
  async login(data) {
    this.loginController = this.getController(this.loginController);
    const {signal} = this.loginController;

    const result = await this.networkHandler(
      this.baseUrl,
      {method: 'POST', data, signal},
      false,
    );

    if (result.success) token.setStorage(result.data.token);

    return result;
  }

  // eslint-disable-next-line no-undef
  signupController = new AbortController();
  async signup(data) {
    this.signupController = this.getController(this.signupController);
    const {signal} = this.signupController;

    const url = `${this.baseUrl}/signup`;
    const result = await this.networkHandler(
      url,
      {method: 'POST', data, signal},
      false,
    );

    if (result.success) token.setStorage(result.data.token);

    return result;
  }

  // eslint-disable-next-line no-undef
  loggedInController = new AbortController();
  async loggedIn() {
    this.loggedInController = this.getController(this.loggedInController);
    const {signal} = this.loggedInController;

    const result = await this.networkHandler(this.baseUrl, {
      method: 'GET',
      signal,
    });

    return result;
  }
}

const authService = new AuthService();

export default authService;
