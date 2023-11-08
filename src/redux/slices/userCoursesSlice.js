import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCourses: [],
};

export const UserCourses = createSlice({
  name: "userCourses",
  initialState,
  reducers: {
    setUserCourse: (state, action) => {
      state.userCourses = action.payload.userCourse;
    },
    updateUserCourse: (state, action) => {
      state.userCourses = state.userCourses.map((course) => {
        if (course.courseId === action.payload.course?.courseId) {
          return { ...course, compelete: true, progress: 100 };
        } else {
          return course;
        }
      });
    },
  },
});

export const { setUserCourse, updateUserCourse } = UserCourses.actions;

export default UserCourses.reducer;
