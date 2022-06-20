import React from "react";

function InstructorDetail ({instructorName}) {
 
    return (
            <div>
                <h3>{instructorName}</h3>
                <h5>EDIT</h5>
                <h5>DELETE</h5>
            </div>
            
    );
}

export default InstructorDetail;