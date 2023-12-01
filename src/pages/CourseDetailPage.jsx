import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BiWorld } from "react-icons/bi";

const CourseDetailPage = () => {
  const [selectedTab, setSelectedTab] = useState("Syllabus");
  const [tabs, setTabs] = useState(["Syllabus", "Instructor", "PreRequisites"]);
  const { courseId } = useParams();
  const selectedCourseData = useSelector(
    (store) => store.selectedCourse.selectedCourse
  );
  return (
    <div className="flex flex-col lg:mt-40 mt-24 justify-center items-center h-fit w-[90vw] mx-auto text-white my-6">
      <div className="flex lg:flex-row flex-col justify-between items-start">
        <div className="flex flex-col justify-center items-center gap-y-3 lg:hidden">
          <img
            src={selectedCourseData?.thumbnail}
            className="w-full h-[200px] rounded-md"
          />
        </div>
        <div className="flex lg:min-w-[50%] min-w-full  flex-col justify-center items-center max-w-[50%] gap-y-9">
          <p className="font-semibold lg:text-[50px] text-[30px] ">
            {selectedCourseData?.name}
          </p>
          <div className="flex flex-col h-fit w-full justify-end items-start gap-y-4">
            <p className="lg:text-[20px] text-[16px] text-gray-300">
              <span className="font-semibold">Summary : </span>{" "}
              {selectedCourseData?.description}
            </p>
            <div className="flex justify-center items-center gap-2 ">
              <p className="font-semibold">Language : </p>
              <BiWorld />
              <p>Hindi , </p>
              <p>English</p>
            </div>
            <p className="text-[16px]">
              <span className="font-semibold">Duration : </span>
              {selectedCourseData?.duration}
            </p>
            <p className="text-[16px]">
              <span className="font-semibold">Timming : </span>
              {selectedCourseData?.schedule}
            </p>
            <p className="text-[16px]">
              <span className="font-semibold">Enrollment Status : </span>
              {selectedCourseData?.enrollmentStatus}
            </p>
            <p className="text-[16px]">
              <span className="font-semibold">Mode : </span>
              {selectedCourseData?.location}
            </p>
            <p className="text-[30px]">
              <span className="font-semibold">Price : </span>
              {selectedCourseData?.price}/-
            </p>
          </div>
          <div className=" flex-col justify-center items-center gap-y-3 lg:hidden flex w-full">
            <button
              type="button"
              className="bg-[#1c9d1cd4] text-white font-semibold rounded-md flex justify-center items-center h-fit w-full px-6 py-5"
            >
              Buy
            </button>
            <button
              type="button"
              className="bg-[white] text-black font-semibold rounded-md flex justify-center items-center h-fit w-full px-6 py-5"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className=" flex-col justify-center items-center gap-y-3 lg:flex hidden">
          <img
            src={selectedCourseData?.thumbnail}
            className="w-[600px] h-[400px] rounded-md"
          />

          <button
            type="button"
            className="bg-[#1c9d1cd4] text-white font-semibold rounded-md flex justify-center items-center h-fit w-full px-6 py-5 "
          >
            Buy
          </button>
          <button
            type="button"
            className="bg-[white] text-black font-semibold rounded-md flex justify-center items-center h-fit w-full px-6 py-5 "
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="flex lg:justify-evenly justify-start lg:px-0 px-9 items-center overflow-auto lg:w-[80%] w-[100%] mx-auto border-2 lg:border-t-[#b09b9b] border-[#b09b9b] lg:border-b-transparent  lg:border-t-solid border-solid rounded-t-md py-3 mt-9">
        {tabs.map((currentTab) => {
          return (
            <SelectedTab
              tab={currentTab}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
        })}
      </div>
      <div className=" lg:w-[80%] w-[100%] border-2 lg:border-b-[#b09b9b] border-b-solid  rounded-b-md py-3 px-3">
        {selectedTab === "Syllabus" ? (
          <Syllabus syllabus={selectedCourseData?.syllabus} />
        ) : selectedTab === "Instructor" ? (
          <Instructor Instructor={selectedCourseData?.instructor} />
        ) : (
          <PreRequisites PreRequisites={selectedCourseData?.prerequisites} />
        )}
      </div>
    </div>
  );
};

export default CourseDetailPage;

export const SelectedTab = ({ tab, selectedTab, setSelectedTab }) => {
  return (
    <div
      onClick={() => {
        setSelectedTab(tab);
      }}
      className={`${
        tab === selectedTab ? "bg-[#f1f1ff] text-black" : "text-white"
      } px-4 py-2 rounded-md transition-colors duration-200`}
    >
      {tab}
    </div>
  );
};

export const Syllabus = ({ syllabus }) => {
  return (
    <div className="w-full pl-6 h-fit  flex flex-col justify-start items-start">
      {syllabus?.map((syllabus, index) => {
        return (
          <ul key={index} style={{ listStyleType: "disc" }}>
            <li className="font-semibold text-[20px] my-2">
              Week {syllabus?.week}
            </li>
            <ul style={{ listStyleType: "decimal" }} className="lg:ml-9 ml-2">
              <li className="my-2">{syllabus.topic}</li>
              <li className="my-2">{syllabus.content}</li>
            </ul>
          </ul>
        );
      })}
    </div>
  );
};
export const Instructor = ({ Instructor }) => {
  return (
    <div className="lg:w-[80%] w-full h-fit pl-6 border-b-[#b09b9b] border-solid rounded-md">
      <ul style={{ listStyleType: "disc" }}>
        <li>{Instructor}</li>
      </ul>
    </div>
  );
};
export const PreRequisites = ({ PreRequisites }) => {
  return (
    <div className="lg:w-[80%] w-full h-fit pl-6 border-b-[#b09b9b] border-solid rounded-md">
      <ul style={{ listStyleType: "decimal" }}>
        {PreRequisites.map((require) => {
          return <li className="my-2">{require}</li>;
        })}
      </ul>
    </div>
  );
};
