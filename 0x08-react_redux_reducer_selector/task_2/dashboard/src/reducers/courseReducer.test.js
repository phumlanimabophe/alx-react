import { courseReducer } from './courseReducer'; /* Importing course reducer function */
import {
	fetchCourseSuccess, /* Action creator for successful course fetch */
	selectCourse,       /* Action creator for selecting a course */
	unSelectCourse,     /* Action creator for unselecting a course */
} from '../actions/courseActionCreators'; /* Importing action creators related to courses */

describe('tests for course reducer', () => {
	const defaultState = []; /* Default state for courses */
	const data = [
		{
			id: 1,
			name: 'ES6',
			credit: 60,
		},
		{
			id: 2,
			name: 'Webpack',
			credit: 20,
		},
		{
			id: 3,
			name: 'React',
			credit: 40,
		},
	];

	/* Test case to verify empty array returned if no action is passed */
	it('should return empty array if no action passed', () => {
		expect(courseReducer(defaultState, 'null')).toEqual([]);
	});

	/* Test case to verify correct data returned on successful fetch */
	it('should return correct data on successful fetch', () => {
		expect(courseReducer(data, fetchCourseSuccess())).toEqual(
			data.map((course) => ({
				...course,
				isSelected: false,
			}))
		);
	});

	/* Test case to verify data with the right item selected */
	it('should return data with the right item selected', () => {
		const selected = [
			{
				id: 1,
				name: 'ES6',
				isSelected: false,
				credit: 60,
			},
			{
				id: 2,
				name: 'Webpack',
				isSelected: true,
				credit: 20,
			},
			{
				id: 3,
				name: 'React',
				isSelected: false,
				credit: 40,
			},
		];

		expect(courseReducer(data, selectCourse(2))).toEqual(selected);
	});

	/* Test case to verify data with the right item unselected */
	it('should return data with the right item unselected', () => {
		const unSelected = [
			{
				id: 1,
				name: 'ES6',
				isSelected: false,
				credit: 60,
			},
			{
				id: 2,
				name: 'Webpack',
				isSelected: false,
				credit: 20,
			},
			{
				id: 3,
				name: 'React',
				isSelected: false,
				credit: 40,
			},
		];

		expect(courseReducer(data, unSelectCourse(2))).toEqual(unSelected);
	});
});
