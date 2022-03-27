import React from "react";

const GetCourses = () => {
  const courses_response = fetch(
    `http://localhost:8055/items/Kurse/?fields=*.*.*`,
  ).then((res) => res.json());
  return courses_response;
};

export default GetCourses;
