import { fromJS } from 'immutable';

/**
 * Accesses a value in an Immutable.js object based on the specified array of keys.
 * @param {Object} object - The JavaScript object to be converted to Immutable.js.
 * @param {Array} array - The array of keys to access the value.
 * @returns {*} - The value found at the specified keys or undefined if not found.
 */
export default function accessImmutableObject(object, array) {
  // Convert the JavaScript object to an Immutable.js Map
  const mappedObj = fromJS(object);

  // Use the 'getIn' function to access the value based on the specified array of keys
  return mappedObj.getIn(array, undefined);
}
