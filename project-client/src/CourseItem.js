import React from "react";

function CourseItem ({courseName, course}) {
 /*   const [course, setCourse] = useState ([]);
    useEffect (()=> {
        fetch(`http://localhost:9292/courses/${courseName}`)
        .then ((r) => r.json())
        .then ((course)=>setCourse(course));
    }, [courseName]);

    if (!course) return <h2> Loading Enrollment Data ...</h2> */
    return (
        <div className="enrollment_item_container">
            <h2>Course: {courseName}</h2>{/* 
            <h2>Learners: {course.enrollment.map((enrollment)=> (
                <div>
                    <h3>Name:{enrollment.learner.learner_name}</h3>
                </div>
            ))}</h2> */}
        </div>
    )
}

export default CourseItem;