import React from "react";
import styles from "./Enrollments.modules.css"


function Enrollments() {
    return (
        <div className={styles.enrollments_container}>
            <h1>Enrollments</h1>
            <div className={styles.crud_container}>   
                <div className={styles.view}> 
                   <h3>View Course Enrollments</h3>
                   <p>click on your course to view students in the course or choose all to see all enrollments</p>
                   
                </div>
                <div className={styles.enroll}>
                    <h3>Enroll a student</h3>
                    <p>Add a student to your course.</p>
                </div>
                <div className={styles.delete}>
                     <h3>Delete an enrollment </h3>
                     <p>Find the student and delete their enrollment</p>
                </div>
                <div className={styles.edit}>
                    <h3>Edit an enrollment</h3>
                    <p>Change an enrollment using this form.</p>
                </div>
            </div>
        </div>
    )
};

export default Enrollments;
