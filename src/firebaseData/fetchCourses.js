import { getDocs, collection } from "firebase/firestore";
import { database } from "../config/firebase";
import { setSelectedCourses } from "../redux/slices/coursesSlice";
import { setUserCourse } from "../redux/slices/userCoursesSlice";

export const getAllCourses = async (dispatch) => {
  const query = collection(database, "courses");
  const docs = await getDocs(query);
  const courses = docs.docs.map((doc) => {
    return { ...doc.data(), courseId: doc?.id };
  });
  dispatch(setSelectedCourses({ courses }));
};

export const getUserCourses = async (dispatch) => {
  const query = collection(database, "purchasedCourse");
  const docs = await getDocs(query);
  const userCourse = docs.docs.map((doc) => {
    return { ...doc.data(), courseId: doc?.id };
  });
  dispatch(setUserCourse({ userCourse }));
};
