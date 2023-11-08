import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CourseTile from "../components/CourseTile";

const CoursePage = () => {
  const allCourses = useSelector((store) => store.courses.courses);
  const [userCourses, setUserCourses] = useState(allCourses);
  useEffect(() => {
    setUserCourses(allCourses);
  }, [allCourses]);
  const inputHandler = (input) => {
    if (input === "" || input === undefined || input === null) {
      setUserCourses(allCourses);
    } else {
      const filteredCourses = allCourses.filter((course) => {
        const name = course?.name?.toLowerCase();
        const instructor = course?.instructor.toLowerCase();
        if (name.includes(input.toLowerCase()) || instructor.includes(input)) {
          return course;
        }
      });
      setUserCourses(filteredCourses);
    }
  };

  return (
    <div className=" bg-[#2c2c2f] flex flex-col justify-start items-start w-[100vw] min-h-[100vh] mx-auto gap-6 max-h-fit lg:mt-32 mt-24">
      <div className="w-full flex lg:justify-start justify-center items-start lg:mx-0 mx-auto">
        <input
          onChange={(e) => {
            inputHandler(e.target.value);
          }}
          placeholder="Search..."
          className="outline-none text-white bg-[#2c2c2f] border border-solid border-white rounded-3xl py-2 pl-3 lg:ml-14"
        />
      </div>
      <div className=" mb-3 bg-[#2c2c2f] max-h-fit w-[100vw] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-6">
        {userCourses.length > 0 ? (
          userCourses.map((course) => {
            return <CourseTile key={course?.courseId} course={course} />;
          })
        ) : (
          <div className="text-white minw-full h-full flex justify-center items-center">
            No course found
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
