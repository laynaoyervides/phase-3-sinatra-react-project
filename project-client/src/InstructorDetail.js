import React from "react";

function InstructorDetail ({instructorName, onDeleteInstructor,}) {
    function handleDeleteClick() {
        fetch(`http://localhost:9292/instructors/${instructor.id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then((deletedInstructor) => onDeleteInstructor(deletedInstructor));
    }
 
    return (
            <div>
                <h3>{instructorName}</h3>
                <h5>EDIT</h5>
               <button onClick={handleDeleteClick}><h5>DELETE</h5></button>
            </div>
            
    );
}

export default InstructorDetail;