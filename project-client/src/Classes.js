import React from "react";
import styles from "./Classes.module.css"
import CourseList from "./CourseList";


function Classes() {
 return (
     <div className={styles.classes_container}>
         <h1>Track Student Out-Of-Class Activity</h1>
         <h3>
             Teachers, choose your course from this list to see the students in  your courses.
            
             <CourseList />

         </h3>
     </div>
 )
}
export default Classes