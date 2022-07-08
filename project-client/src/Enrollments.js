import React from "react";
import styles from "./Enrollments.modules.css"
import InstructorsList from "./InstructorsList";


function Enrollments() {
    return (
        <div className={styles.enrollments_container}>
            <h1>Enrollments</h1>
            <div className={styles.crud_container}>   
                <div className={styles.view}> 
                   <h3>Instructors</h3>
                   <p>Add, Edit, or Delete an Instructor</p>
                   <InstructorsList />
                </div>
                <div className={styles.enroll}>
                    <h3>Add or Delete a Course</h3>
                    <p>Add a student to your course.</p>
                </div>
                <div className={styles.delete}>
                     <h3>VIEW, ADD, OR DELETE A COURSE </h3>
                     
                     <p>Find the student and delete their enrollment(...Coming Soon...)</p>
                </div>
            </div>
        </div>
    )
};

export default Enrollments;
