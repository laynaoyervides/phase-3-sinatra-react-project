import React, { useState } from "react";

function EnrollmentList () {
    const [enrollments, setEnrollments] = useState([]);
    useEffect ( ()  => {
        fetch("http://localhost:9292/enrollments")
        .then ((r) => r.json())
        .then ((enrollments) => setEnrollments(enrollments));
    }, []);   

    return (
        <div>
 {enrollments.map((enrollment)=> (
     <Enrollment
 ))}
        </div>
    )
}

export default EnrollmentList