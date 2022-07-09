import React, { useState } from "react";
import EditCourse from "./EditCourse";

function CourseDetail ({courseName, classPeriod, deleteCourse, onUpdateCourse, course}) {
    const{id, name, period } = course;
    const [isEditing, setIsEditing]= useState(false);
    
    function handleDelete () {
        deleteCourse(id);
        fetch(`http://localhost:9292/courses/${id}` , {
            method: "DELETE",
        });
    };
    const handleCourseUpdate = (updatedCourse) => {
        setIsEditing(false);
        onUpdateCourse(updatedCourse);
      };
    return (
        <div>
            { isEditing ? (
                <EditCourse course={course} onUpdateCourse={handleCourseUpdate}/>
                ) :
                (<h3>{name}{period}</h3>)
            }
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}><h5>EDIT</h5></button>
                <button onClick={handleDelete}><h5>DELETE</h5></button>
        </div>
    )
}

export default CourseDetail;