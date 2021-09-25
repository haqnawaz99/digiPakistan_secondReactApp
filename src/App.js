import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/Home";
import AboutPage from "./components/AboutPage";
import CourseListPage from "./components/CourseList";

function App() {
  return (
    <div className="App">
      <p>Initiall App Structure</p>
      <HomePage applyStyle={false} />
      <AboutPage />
      <CourseListPage />
    </div>
  );
}

export default App;
