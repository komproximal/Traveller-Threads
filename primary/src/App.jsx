import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MessagesPrimary } from "./screens/MessagesPrimary";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <MessagesPrimary />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
