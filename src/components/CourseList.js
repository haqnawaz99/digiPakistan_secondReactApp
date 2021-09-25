import { useLocation, useParams } from "react-router";

const CourseListPage = () => {
  const { courseid } = useParams();
  const location = useLocation();
  return (
    <>
      <p>Course list</p>
    </>
  );
};
export default CourseListPage;

/*Class base
import react, { Component } from "react";
import style from "./cssStyleModule.module.css";

class CourseListPage extends Component {
  render() {
    return <p className={style.textFont}>Course List Page</p>;
  }
}

export default CourseListPage;
*/
