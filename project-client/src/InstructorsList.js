import React, { useState, useEffect } from "react";
import InstructorDetail from "./InstructorDetail";

function InstructorsList () {
    const [instructors, setInstructors] = useState([]);
    useEffect ( ()  => {
        fetch("http://localhost:9292/instructors")
        .then ((r) => r.json())
        .then ((instructors) => setInstructors(instructors));
    }, []);   

    return (
        <div>
            
 {instructors.map((instructor)=> (
     <InstructorDetail key={instructor.id} instructorName={instructor.name} instructor={instructor}/>
 ))}

            

        </div>
    )
}

export default InstructorsList