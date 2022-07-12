import React, { useState } from "react";

function EditCourse (course, onUpdateCourse) {
    const {id, course_name, class_period}=course;
    const[updatedName, setUpdatedName]=useState(course_name);
    const[updatedPeriod, setUpdatedPeriod]= useState(class_period);

    function handleEditForm(e) {
    e.preventDefault();

    // Make a PATCH fetch request to update a single donation
    fetch(`http://localhost:9292/courses/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ course_name: updatedName, class_period: updatedPeriod }),
    })
      .then((resp) => resp.json())
      .then((updatedCourse) => onUpdateCourse(updatedCourse));
  }
    return (
        <form onSubmit={handleEditForm}>
          <label htmlFor="coursename">Course Name:</label>
            <input
            id="classname"
            type="text"
            name="classname"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            />
            <label htmlFor="period">Class Period</label>
            <input
                id="period"
                type="period"
                name="period"
                value={updatedPeriod}
                onChange={(e)=>setUpdatedPeriod(e.target.value)}
            />
            <input type="submit" value="Save" />
        </form>
    )
}
export default EditCourse;