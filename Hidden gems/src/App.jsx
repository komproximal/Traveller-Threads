import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HiddenGems } from "./screens/HiddenGems";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HiddenGems />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
