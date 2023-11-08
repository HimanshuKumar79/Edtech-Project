import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Timestamp } from "firebase/firestore";
import moment from "moment";
import { useDispatch } from "react-redux";
import { updateUserCourse } from "../redux/slices/userCoursesSlice";
import toast from "react-hot-toast";

const DashboardCard = ({ course }) => {
  const [dueDate, setDueDate] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    let date = new Timestamp(
      course.dueDate?.seconds,
      course.dueDate?.nanoseconds
    ).toDate();
    date = moment(date).format("YYYY-MM-DD");
    setDueDate(date);
  }, []);
  return (
    <div className="lg:w-[400px] w-[350px] z-20 relative shadow-[0_15px_30px_-15px_#6b6b72] lg:min-h-[410px] min-h-[385px] lg:max-h-[410px] max-h-[385px]  rounded-md  flex flex-col justify-start items-start gap-3">
      <div className="relative w-full">
        <img
          src={course?.thumbnail}
          className="w-full h-[200px] rounded-md object-center"
        />
        <button
          onClick={() => {
            dispatch(updateUserCourse({ course }));
            !course?.compelete && toast.success("Completed mark successfully");
          }}
          type="button"
          className="absolute bottom-1 right-1 bg-white px-3 py-2 rounded-md"
        >
          {course?.compelete ? "Completed" : "MarkComplete"}
        </button>
      </div>

      <div className="flex flex-col lg:text-[16px] w-[90%] text-[13px] justify-center items-start gap-2 ml-3 text-white">
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
          <p>Due Date : </p>
          <p>{dueDate}</p>
        </div>
        <ProgressBar
          className="min-w-full"
          bgColor="#8bb48b"
          height="25px"
          completed={course?.progress}
        />
      </div>
    </div>
  );
};

export default DashboardCard;
