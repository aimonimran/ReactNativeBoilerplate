import {AsyncStorage} from '@react-native-async-storage/async-storage';

class LocalStorage {
  /**@param {string} property */
  constructor(property) {
    this.property = property;
  }

  /**
   * getStorage
   * @param {boolean=} toJSON
   * @returns {string} storageValue
   */
  getStorage = async (toJSON = false) => {
    try {
      const value = await AsyncStorage.getItem(this.property);
      if (toJSON) return JSON.parse(value);

      return value;
    } catch (err) {
      return err;
    }
  };

  /**
   * setStorage
   * @param {object|object[]|string[]|number[]} data
   * @param {boolean=} toJSON
   */
  setStorage = async (data, toJSON = false) => {
    try {
      let value = data;
      if (toJSON) value = JSON.stringify(data);

      await AsyncStorage.setItem(this.property, value);
    } catch (err) {
      return err;
    }
  };

  removeStorage = async () => {
    await AsyncStorage.removeItem(this.property);
  };
}

export default LocalStorage;
