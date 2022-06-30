import React, { useState } from "react";

function InstructorDetail ({instructorName, onDeleteClick, instructor, handleEditClick}) {
  const [teacher, setTeacher] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentInstructor, setCurrentInstructor] = useState({});

  function handleDeleteInstructor() {
        fetch(`http://localhost:9292/instructors/${instructor.id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then((deletedInstructor) => onDeleteClick(deletedInstructor));
    }
    function onEditInstructor() {
        fetch (`http://localhost:9292/instructors/${instructor.id}`,{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: teacher,
              }),
            })
              .then((r) => r.json())
              .then((updatedName) => handleEditClick(updatedName));
        }
    
 
    return (
            <div>
                <h3>{instructorName}</h3>
                <button onClick={onEditInstructor}><h5>EDIT</h5></button>
               <button onClick={handleDeleteInstructor}><h5>DELETE</h5></button>
            </div>
            
    );
}

export default InstructorDetail;