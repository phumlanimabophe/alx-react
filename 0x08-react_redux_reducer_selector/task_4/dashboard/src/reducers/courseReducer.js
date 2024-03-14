import {
	FETCH_COURSE_SUCCESS, /* Action type for successful course fetch */
	SELECT_COURSE,        /* Action type for selecting a course */
	UNSELECT_COURSE,      /* Action type for unselecting a course */
  } from '../actions/courseActionTypes'; /* Importing action types related to courses */
  
  /* Reducer function for handling course state */
  const courseReducer = (state = [], action) => {
	switch (action.type) {
	  /* Case for successful course fetch */
	  case FETCH_COURSE_SUCCESS:
		return action.data.map((course) => {
		  return {
			...course,
			isSelected: false,
		  };
		});
  
	  /* Case for selecting a course */
	  case SELECT_COURSE:
		return state.map((course, index) => {
		  const current = {
			...course,
		  };
		  if (course.id == action.index) current.isSelected = true;
  
		  return current;
		});
  
	  /* Case for unselecting a course */
	  case UNSELECT_COURSE:
		return state.map((course) => {
		  const current = {
			...course,
		  };
		  if (course.id == action.index) current.isSelected = false;
  
		  return current;
		});
  
	  /* Default case returns the current state */
	  default:
		break;
	}
	return state;
  };
  
  /* Exporting the courseReducer function as default */
  export default courseReducer;
  