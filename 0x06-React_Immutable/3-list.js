import { List } from 'immutable';

/*
  Function: getListObject

  Description:
  This function takes an array of elements as input and creates an Immutable.js List from it.

  Parameters:
  - array (Array): The array of elements to create the List from.

  Returns:
  - Immutable.List: The resulting Immutable.js List.

  Notes:
  - The function utilizes the 'List' function from the Immutable.js library for List creation.
*/
export function getListObject(array) {
  // Use the 'List' function from the Immutable.js library to create a List
  return List(array);
}

/*
  Function: addElementToList

  Description:
  This function takes an existing Immutable.js List and adds a specified element to it.

  Parameters:
  - list (Immutable.List): The Immutable.js List to which the element is added.
  - element (*): The element to be added to the List.

  Returns:
  - Immutable.List: The updated Immutable.js List.

  Notes:
  - The 'push' function is used to add an element to the existing List.
*/
export function addElementToList(list, element) {
  // Use the 'push' function to add an element to the List
  return list.push(element);
}
