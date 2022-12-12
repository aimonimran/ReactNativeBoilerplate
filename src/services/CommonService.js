import NetworkService from './NetworkService';

class CommonService extends NetworkService {
  // eslint-disable-next-line no-undef
  uploadController = new AbortController();
  async upload(data) {
    this.uploadController = this.getController(this.uploadController);
    const {signal} = this.uploadController;

    const url = `${this._baseUrl}/common/image`;
    const result = await this.networkHandler(
      url,
      {method: 'POST', data, signal},
      false,
    );
    return result;
  }
  // eslint-disable-next-line no-undef
  getGenderController = new AbortController();
  async getGender() {
    this.getGenderController = this.getController(this.getGenderController);
    const {signal} = this.getGenderController;

    const url = `${this._baseUrl}/common/gender`;
    const result = await this.networkHandler(
      url,
      {method: 'GET', signal},
      false,
    );
    return result;
  }
}

const commonService = new CommonService();

export default commonService;
