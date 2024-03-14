import {
	FETCH_COURSE_SUCCESS,   // Action type for successful course fetch
	SELECT_COURSE,          // Action type for selecting a course
	UNSELECT_COURSE,        // Action type for unselecting a course
} from '../actions/courseActionTypes'; // Importing action types related to courses

const defaultState = []; // Default state for courses

// Reducer function for handling course-related actions
export function courseReducer(state = defaultState, action) {
	switch (action.type) {
		// Case for successful course fetch
		case FETCH_COURSE_SUCCESS:
			// Map over the fetched courses and set isSelected to false for each
			return action.data.map((course) => ({
				...course,
				isSelected: false,
			}));
		// Case for selecting a course
		case SELECT_COURSE:
			// Map over the state and if the course id matches, set isSelected to true
			return state.map((course) => {
				if (course.id === action.index) {
					return {
						...course,
						isSelected: true,
					};
				}
				// Otherwise, return the course without modification
				return { ...course };
			});
		// Case for unselecting a course
		case UNSELECT_COURSE:
			// Map over the state and if the course id matches, set isSelected to false
			return state.map((course) => {
				if (course.id === action.index) {
					return {
						...course,
						isSelected: false,
					};
				}
				// Otherwise, return the course without modification
				return { ...course };
			});
		// Default case returns the current state
		default:
			return state;
	}
}
