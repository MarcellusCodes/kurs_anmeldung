import React from "react";

interface GetCourseProps {
  id: string;
}

const GetCourses = (id) => {
  const course_response = fetch(
    `http://localhost:8055/items/Kurse/?filter[id][_eq]=${id}`
  ).then((res) => res.json());
  return course_response;
};

export default GetCourses;
