import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedCourse } from "../redux/slices/selectedCourseSlice";
import { NavLink } from "react-router-dom";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { updateCourseFirebase } from "../firebaseData/firebaseFunctions/updateFirebaseData";
import { updateCourse } from "../redux/slices/coursesSlice";

const CourseTile = ({ course }) => {
  const selectedCourse = course;
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  return (
    <div className="lg:w-[400px] w-[350px] z-20 relative shadow-[0_15px_30px_-15px_#6b6b72] lg:min-h-[400px] min-h-[350px] lg:max-h-[400px] max-h-[350px]  rounded-md  flex flex-col justify-start items-start gap-3">
      <NavLink
        className="w-full"
        onClick={() => dispatch(setSelectedCourse({ selectedCourse }))}
        to={`/courses/${course?.courseId}`}
      >
        <img
          src={course?.thumbnail}
          className="w-full h-[200px] rounded-md object-center"
        />
      </NavLink>
      {course?.userLiked === false ||
      course?.userLiked === undefined ||
      course?.userLiked === "false" ? (
        <div
          onClick={() => {
            const like = course?.userLiked;
            updateCourseFirebase(
              course?.courseId,
              course?.likes + 1,
              course?.userLiked
            );
            dispatch(updateCourse({ course, like }));
            setLike(true);
          }}
          className="absolute flex justify-center gap-1 items-center z-50 top-3 right-3 px-3 py-1 rounded-md w-fit h-fit bg-[#eae2e2] text-[23px]"
        >
          <AiOutlineLike />
          <p className="text-[16px] mt-1">{course?.likes}</p>
        </div>
      ) : (
        <div
          onClick={() => {
            const like = course?.userLiked;
            updateCourseFirebase(
              course?.courseId,
              course?.likes - 1,
              course?.userLiked
            );
            dispatch(updateCourse({ course, like }));
            setLike(false);
          }}
          className="absolute flex justify-center gap-1 items-center z-50 top-3 right-3 px-3 py-1 rounded-md w-fit h-fit bg-[#eae2e2] text-[23px]"
        >
          <AiFillLike />
          <p className="text-[16px] mt-1">{course?.likes}</p>
        </div>
      )}
      <NavLink
        onClick={() => dispatch(setSelectedCourse({ selectedCourse }))}
        to={`/courses/${course?.courseId}`}
        className="flex flex-col justify-center items-start gap-2 ml-3 text-white  lg:text-[16px] text-[13px]"
      >
        <div className="flex justify-start items-center gap-2">
          <p>Course : </p>
          <p>{course?.name}</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <p>Duration : </p>
          <p>{course?.duration}</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <p>Instructor : </p>
          <p>{course?.instructor}</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <p>Mode : </p>
          <p>{course?.location}</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <p>Price : </p>
          <p>{course?.price}</p>
        </div>
      </NavLink>
      <div className="w-full absolute bottom-2 right-1 flex justify-end items-center gap-2">
        <button
          type="button"
          className="bg-[#1c9d1cd4] text-white font-semibold rounded-md flex justify-center items-center h-fit w-fit px-6 py-2 z-30"
        >
          Buy
        </button>
        <button
          type="button"
          className="bg-[white] text-black font-semibold rounded-md flex justify-center items-center h-fit w-fit px-6 py-2 z-30"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CourseTile;
