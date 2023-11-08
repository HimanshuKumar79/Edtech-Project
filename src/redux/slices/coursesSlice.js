import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

export const CoursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setSelectedCourses: (state, action) => {
      state.courses = action.payload.courses;
    },
    updateCourse: (state, action) => {
      console.log(action.payload.course);
      state.courses = state.courses.map((course) => {
        if (course.courseId === action.payload.course?.courseId) {
          const likeCount =
            action.payload.like === "false"
              ? course.likes + 1
              : course.likes - 1;
          const userLiked = action.payload.like === "false" ? "true" : "false";
          return {
            ...course,
            likes: likeCount,
            userLiked,
          };
        } else {
          return course;
        }
      });
    },
  },
});

export const { setSelectedCourses, updateCourse } = CoursesSlice.actions;

export default CoursesSlice.reducer;
