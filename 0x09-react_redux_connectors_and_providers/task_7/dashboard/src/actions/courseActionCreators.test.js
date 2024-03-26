import { fetchCourses, selectCourse, unSelectCourse } from './courseActionCreators';
import configureStore from "redux-mock-store";
import thunk from "redux-thunk"
import fetchMock from "fetch-mock-jest"

const mockStore = configureStore([thunk])

// Restore fetch mock after each test
afterEach(() => {
  fetchMock.restore();
});

// Test selectCourse action creator
test ('selectCourse func returns the right object', () => {
  const action = selectCourse(1)
  expect(action).toEqual({ type: "SELECT_COURSE", index: 1 })
})

// Test unselectCourse action creator
test ('unselectCourse func returns the right object', () => {
  const action = unSelectCourse(1)
  expect(action).toEqual({ type: "UNSELECT_COURSE", index: 1 })
})

// Test fetchCourses async action creator
test("fetchCourses", () => {
  const store = mockStore({})
  // Mocking the fetch request
  fetchMock.get("/courses.json", [])
  // Dispatch the action and check if the expected action is dispatched
  return store.dispatch(fetchCourses()).then(() => {
    const actions = store.getActions()
    expect(actions).toEqual([{ type: 'FETCH_COURSE_SUCCESS', data: [] }])
  })
})
