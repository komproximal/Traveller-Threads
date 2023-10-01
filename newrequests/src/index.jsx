import React from "react";
import ReactDOMClient from "react-dom/client";
import { MessagesRequests } from "./screens/MessagesRequests";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<MessagesRequests />);
