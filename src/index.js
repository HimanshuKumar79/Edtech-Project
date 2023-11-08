import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import CoursePage from "./pages/CoursePage";
import Dashboard from "./pages/Dashboard";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import CourseDetailPage from "./pages/CourseDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CoursePage />,
      },
      {
        path: `courses/:courseId`,
        element: <CourseDetailPage />,
      },
      {
        path: `dashboard`,
        element: <Dashboard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
