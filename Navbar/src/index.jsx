import React from "react";
import ReactDOMClient from "react-dom/client";
import { NavbarScreen } from "./screens/NavbarScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<NavbarScreen />);
