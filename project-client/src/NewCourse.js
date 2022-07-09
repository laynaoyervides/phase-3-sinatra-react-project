import React, { useState } from "react";


function NewCourse ({addNewCourse}) {
    const [courseName, setCourseName] = useState("")
    const [classPeriod, setClassPeriod] = useState("")
    const [instructor, setInstructor] = useState("");

    const newCourse = {
        course_name,
        class_period,
        instructor_id: instructor,
        
    }

    const configObj = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:9292/courses`, configObj)
        .then ((resp) => resp.json())
        .then ((course) => addNewCourse(course))
    }
    return(
        <div></div>
    )
}

export default NewCourse;