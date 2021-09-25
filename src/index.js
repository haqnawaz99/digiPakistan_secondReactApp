import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/Home";
import AboutPage from "./components/AboutPage";
import CourseListPage from "./components/CourseList";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/courselist/:courseid" component={CourseListPage} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
