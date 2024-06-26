import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Aboutme from "./components/Aboutme.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Aboutme />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
