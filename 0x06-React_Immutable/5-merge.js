import { Map, List } from 'immutable';

/*
  Function: concatElements

  Description:
  This function takes two arrays as input and concatenates them into a single Immutable.js List.

  Parameters:
  - page1 (Array): The first array to be concatenated.
  - page2 (Array): The second array to be concatenated.

  Returns:
  - Immutable.List: The resulting Immutable.js List.

  Notes:
  - The input arrays are first converted to Immutable.js Lists using the 'List' constructor.
  - The 'concat' method is then used to concatenate the two Lists.
*/
export function concatElements(page1, page2) {
  // Convert the input arrays to Immutable.js Lists
  const list1 = List(page1);
  const list2 = List(page2);

  // Use the 'concat' method to concatenate the two Lists
  return list1.concat(list2);
}

/*
  Function: mergeElements

  Description:
  This function takes two objects as input and merges them into a single Immutable.js Map.

  Parameters:
  - page1 (Object): The first object to be merged.
  - page2 (Object): The second object to be merged.

  Returns:
  - Immutable.Map: The resulting Immutable.js Map.

  Notes:
  - The input objects are first converted to Immutable.js Maps using the 'Map' constructor.
  - The 'merge' method is then used to merge the two Maps.
*/
export function mergeElements(page1, page2) {
  // Convert the input objects to Immutable.js Maps
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Use the 'merge' method to merge the two Maps
  return map1.merge(map2);
}
