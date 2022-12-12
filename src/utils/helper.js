import {capitalize, isArray, omit, pick, shake, sleep} from 'radash';
import {FILE_SIZE, FILE_SIZE_LIMIT, IMAGE_TYPES} from '../constants/vars';

/**
 * randomNumberBetween
 * @param {number} max
 * @param {number} min
 * @returns {number}
 */
export const randomNumberBetween = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);

/**
 * mockPromise
 * @param {number} milliseconds
 * @returns {Promise<void>}
 */
export const mockPromise = milliseconds => sleep(milliseconds);

export const valueOfKeys = (array, key) => array.map(element => element[key]);

/**
 * extractTruthyProps
 * @param {object} payload
 * @returns {object} Object
 */
export const extractTruthyProps = payload => shake(payload, value => !value);

/**
 * omitProps
 * @param {object} payload
 * @param {string|string[]} props
 * @returns {object} Object
 */
export const omitProps = (payload, props) =>
  omit(payload, isArray(props) ? props : [props]);

/**
 * pickProps
 * @param {object} payload
 * @param {string|string[]} props
 * @returns {object} Object
 */
export const pickProps = (payload, props) =>
  pick(payload, isArray(props) ? props : [props]);

/**
 * properCase
 * @param {string|string[]} str
 * @returns {string|string[]} string or array of string
 */
export const properCase = str => {
  if (typeof str === 'string') return capitalize(str.replace(/_/g, ' '));
  return str.map(_str => capitalize(str.replace(/_/g, ' ')));
};

/**
 * isValidImage
 * @param {File} file
 * @returns {string} string
 */
export const validateImage = file => {
  let errors = [];

  const isValid = IMAGE_TYPES.includes(file.type);
  if (!isValid) errors.push('you can only upload JPG/PNG file');

  const isLessThan = FILE_SIZE_LIMIT < file.size;
  if (isLessThan) errors.push('image must smaller than ' + FILE_SIZE + 'MB!');

  return errors.join(', and ');
};

/**
 * abortController
 * @param {AbortController|AbortController[]} controller
 */

export const abortController = controller => {
  // eslint-disable-next-line no-undef
  if (controller instanceof AbortController) {
    if (!controller.signal.aborted) controller.abort();
    return;
  }

  controller.forEach(_controller => {
    if (!_controller.signal.aborted) _controller.abort();
  });
};
