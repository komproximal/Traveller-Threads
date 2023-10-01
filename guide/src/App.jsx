import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LocalGuide } from "./screens/LocalGuide";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <LocalGuide />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
