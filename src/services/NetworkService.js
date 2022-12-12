import {token} from '../utils/storage';
import {BASE_URL} from '../utils/configs';
import axios from 'axios';
import {abortController} from '../utils/helper';

class Network {
  _baseUrl = `${BASE_URL}/api`;

  includeHeaders(options, includeToken) {
    const headers = {};
    if (includeToken) headers['Authorization'] = `Bearer ${token.getStorage()}`;
    options.headers = headers;
  }

  async networkHandler(url, options, includeToken = true) {
    try {
      this.includeHeaders(options, includeToken);

      const result = await axios(url, options);
      return {
        success: true,
        data: result.data,
      };
    } catch (error) {
      let message;

      if (error.code !== 'ERR_CANCELED') {
        if ('response' in error) message = error.response.data;
        else message = error.message;
      }

      return {
        success: false,
        message,
      };
    }
  }

  /**
   * getController
   * @param {AbortController} controller
   * @returns {AbortController} controller
   */
  getController(controller) {
    abortController(controller);

    // eslint-disable-next-line no-undef
    return new AbortController();
  }
}

export default Network;
