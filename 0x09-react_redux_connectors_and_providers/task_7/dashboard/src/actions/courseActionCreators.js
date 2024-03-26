import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes.js";

// Action creator to select a course
export function selectCourse(index) {
  return { type: SELECT_COURSE, index };
}

// Action creator to unselect a course
export function unSelectCourse(index) {
  return { type: UNSELECT_COURSE, index };
}

// Action creator for fetching courses successfully
export function fetchCourseSuccess(data) {
  return {
    type: FETCH_COURSE_SUCCESS,
    data: data
  };
}

// Action creator to set courses
export function setCourses(data) {
  return { type: FETCH_COURSE_SUCCESS, data };
}

// Thunk action creator to fetch courses from a JSON file
export function fetchCourses() {
  return dispatch => {
    return fetch("/courses.json")
      .then(response => response.json())
      .then(data => dispatch(setCourses(data)));
  };
}

// Action creator to handle row selection change
export function onChangeRow(id, checked) {
  return checked === true ? selectCourse(id) : unSelectCourse(id);
}
