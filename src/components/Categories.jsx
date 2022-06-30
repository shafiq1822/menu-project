import React from "react";

const Categories = ({ filterCourses, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => filterCourses(category)}
            className="filter-btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
