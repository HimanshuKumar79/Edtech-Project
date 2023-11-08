import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  const userAllCourses = useSelector((store) => store.userCourses.userCourses);
  const [input, setInput] = useState("");
  const [userCourses, setUserCourses] = useState(userAllCourses);
  useEffect(() => {
    setUserCourses(userAllCourses);
  }, [userAllCourses]);
  const inputHandler = (search) => {
    if (input === "" || input === undefined || input === null) {
      setUserCourses(userAllCourses);
    } else {
      const filteredCourses = userAllCourses.filter((course) => {
        const name = course?.name?.toLowerCase();
        const instructor = course?.instructor.toLowerCase();
        if (
          name.includes(search.toLowerCase()) ||
          instructor.includes(search.toLowerCase())
        ) {
          return course;
        }
      });
      setUserCourses(filteredCourses);
    }
  };
  useEffect(() => {
    inputHandler(input);
  }, [input]);
  return (
    <div className=" bg-[#2c2c2f] flex flex-col justify-start items-start w-[90vw] min-h-[100vh] mx-auto gap-6 max-h-fit lg:mt-32 mt-24">
      <div className="w-full flex lg:justify-start justify-center items-start lg:mx-0 mx-auto">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Search..."
          className="outline-none text-white bg-[#2c2c2f] border border-solid border-white rounded-3xl py-2 pl-3 ml-6"
        />
      </div>
      <div className=" w-full mb-3 bg-[#2c2c2f] max-h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-6">
        {userCourses.length > 0 ? (
          userCourses.map((userCourse) => {
            return <DashboardCard course={userCourse} />;
          })
        ) : (
          <div className="text-white minw-full h-full flex justify-center items-center">
            No Course Found
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
