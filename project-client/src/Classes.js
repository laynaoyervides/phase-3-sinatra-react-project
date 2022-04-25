import React from "react";
import styles from "./Classes.module.css"
import StudentsList from "./StudentsList";

function Classes() {
 return (
     <div className={styles.classes_container}>
         <h1>Classes</h1>
         <h3>
             Teachers, choose your name from this list to see the students in  your courses.
            <form>
             <select name="teachers" id="teachers">
                 <option value="replace from list teacher name 1">Teacher name</option>
                 <option value="replace from list">Teacher name 2</option>
             </select>
             <br></br>
             <input type="submit" value="submit"></input>
             </form>
         </h3>
         < StudentsList />
     </div>
 )
}
export default Classes