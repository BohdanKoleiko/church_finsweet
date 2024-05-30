import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";

const rootContainer: any = document.getElementById("root");

const root = ReactDOM.createRoot(rootContainer);
root.render(<App />);
