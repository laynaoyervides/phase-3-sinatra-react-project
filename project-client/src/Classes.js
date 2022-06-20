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
            <form>
             <select name="teachers" id="teachers">
                 <option value="replace from list teacher name 1">Teacher name</option>
                 <option value="replace from list">Teacher name 2</option>
             </select>
             <br></br>
             <input type="submit" value="submit"></input>
             </form>
         </h3>
     </div>
 )
}
export default Classes