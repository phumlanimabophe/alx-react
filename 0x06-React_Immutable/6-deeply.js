import { Map } from 'immutable';

/**
 * Merges two objects deeply into a single Immutable.js Map.
 * @param {Object} page1 - The first object to be merged deeply.
 * @param {Object} page2 - The second object to be merged deeply.
 * @returns {Immutable.Map} - The resulting Immutable.js Map.
 */
export default function mergeDeeplyElements(page1, page2) {
  // Convert the input objects to Immutable.js Maps
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Use the 'mergeDeep' method to merge the two Maps deeply
  return map1.mergeDeep(map2);
}
