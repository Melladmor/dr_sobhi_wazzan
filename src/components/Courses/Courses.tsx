import Title from "../Title/Title";
import { coursesData } from "../../../localdata/coursesData";
import CourseSlider from "./CourseSlider";

const Courses = () => {
  return (
    <div>
      <Title title={coursesData?.title} description={coursesData?.subTitle} />
      <CourseSlider coursesData={coursesData?.courses} />
    </div>
  );
};

export default Courses;
