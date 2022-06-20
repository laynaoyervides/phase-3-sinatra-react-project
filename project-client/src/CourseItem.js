import React from "react";

function CourseItem ({courseName}) {
 /*   const [course, setCourse] = useState ([]);
    useEffect (()=> {
        fetch(`http://localhost:9292/courses/${courseName}`)
        .then ((r)urn  => r.json())
        .then ((course)=>setCourse(course));
    }, [courseName]);

    if (!course) ret<h2> Loading Enrollment Data ...</h2> */
    return (
            <option value="{courseName}">{courseName}
            </option>
            
    );
}

export default CourseItem;