import { is } from 'immutable';

/*
  Function: areMapsEqual

  Description:
  This function checks if two Immutable.js Maps are equal using the 'is' function.

  Parameters:
  - map1 (Immutable.Map): The first Immutable.js Map.
  - map2 (Immutable.Map): The second Immutable.js Map.

  Returns:
  - boolean: True if the maps are equal, false otherwise.

  Notes:
  - The 'is' function from Immutable.js is used to perform the equality check.
*/
export default function areMapsEqual(map1, map2) {
  // Use the 'is' function from Immutable.js to check equality
  return is(map1, map2);
}
