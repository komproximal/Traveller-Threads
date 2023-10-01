import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Tips } from "./screens/Tips";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Tips />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
