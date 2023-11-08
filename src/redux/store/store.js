import { configureStore } from "@reduxjs/toolkit";
import SelectedCourseSlice from "../slices/selectedCourseSlice";
import Courses from "../slices/coursesSlice";
import UserCourses from "../slices/userCoursesSlice";

export const store = configureStore({
  reducer: {
    selectedCourse: SelectedCourseSlice,
    courses: Courses,
    userCourses: UserCourses,
  },
});
