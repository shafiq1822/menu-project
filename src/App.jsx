import React, {useState} from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import courses from './data';

const allCategories = ["All", ...new Set(courses.map((course) => course.category))];
console.log(Categories);

// allCategories.unshift('All');


function App() {
  const [menuCourses, setMenuCourses] = useState(courses);

  const [categories, setCategories] = useState(allCategories)


  const filterCourses = (category) => {
    if(category === "All"){
      setMenuCourses(courses);
      return;
    }
    const newCourses = courses.filter((course) => {
      return course.category === category;
    });
    setMenuCourses(newCourses);
  }
  return (
    <main>
      <section>
        <div className="title">
          <h2>My Course</h2>
          <div className="underline">

          </div>
        </div>
        <Categories categories={categories} filterCourses= {filterCourses}/>
        <Menu menuCourses = {menuCourses}/>
      </section>
    </main>
  );
}

export default App;
