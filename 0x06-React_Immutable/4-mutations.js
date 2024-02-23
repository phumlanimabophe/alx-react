import { Map } from 'immutable';

/**
 * Immutable.js Map representing a mapping of numbers to names.
 * @type {Immutable.Map}
 */
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

/**
 * Updates the 'map' by changing the value associated with key 2 to 'Benjamin'
 * and the value associated with key 4 to 'Oliver'.
 * @type {Immutable.Map}
 */
export const map2 = map.withMutations((mapItem) => {
  mapItem.set(2, 'Benjamin').set(4, 'Oliver');
});
