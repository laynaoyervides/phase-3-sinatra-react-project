import React, { useState, useEffect } from "react";
import styles from "./Enrollments.modules.css"
import InstructorsList from "./InstructorsList";
import CourseEnrollment from "./CourseEnrollment";

function Enrollments() {

    const [instructors, setInstructors]=useState([]);
   
    useEffect (
        () => {
            fetch(`http://localhost:9292/instructors`)
            .then((resp) => resp.json())
            .then((instructor)=> setInstructors(instructor));
        }, []);


    return (
        <div className={styles.enrollments_container}>
            <h1>Enrollments</h1>
            <div className={ styles.crud_container } > 
                <div className={ styles.instructors }> 
                   <h2>Instructors</h2>
                   <p>View, Add, Edit, or Delete an Instructor</p>
                   <InstructorsList />
                </div>
                <div className={ styles.courses }>
                     <h2 className={ styles.coursetitle }>
                        VIEW, ADD, EDIT OR DELETE A COURSE </h2>
                        <CourseEnrollment instructors={instructors}/>
                     <p>Find the student and delete their enrollment(...Coming Soon...)</p>
                </div>
            </div>
        </div>
    )
};

export default Enrollments;
