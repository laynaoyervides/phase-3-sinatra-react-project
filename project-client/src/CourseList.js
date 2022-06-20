import React, { useState, useEffect } from "react";
import CourseItem from "./CourseItem";

function CourseList () {
    const [courses, setCourses] = useState([]);
    useEffect ( ()  => {
        fetch("http://localhost:9292/courses")
        .then ((r) => r.json())
        .then ((courses) => setCourses(courses));
    }, []);   

    return (
        <div>
 {courses.map((course)=> (
     <CourseItem key={course.id} courseName={course.course_name} course={course}/>
 ))}
        </div>
    )
}

export default CourseList