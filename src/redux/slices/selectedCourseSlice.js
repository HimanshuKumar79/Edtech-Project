import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCourse: {},
};

export const SelectedCourseSlice = createSlice({
  name: "selectedCourse",
  initialState,
  reducers: {
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload.selectedCourse;
    },
  },
});

export const { setSelectedCourse } = SelectedCourseSlice.actions;

export default SelectedCourseSlice.reducer;
