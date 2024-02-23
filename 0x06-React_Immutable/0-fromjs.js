import { fromJS } from 'immutable';

/*
  Function: getImmutableObject

  Description:
  This function takes a JavaScript object as input and converts it into an Immutable.js Map.

  Parameters:
  - object (Object): The JavaScript object to be converted.

  Returns:
  - Immutable.Map: The resulting Immutable.js Map.

  Notes:
  - The function utilizes the 'fromJS' function from the Immutable.js library for the conversion.
*/
export default function getImmutableObject(object) {
  // Utilize the 'fromJS' function for the conversion
  return fromJS(object);
}
