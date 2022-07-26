import React from "react";
import styles from "./Activity.module.css"

function Activity() {
 return (
     <div className={styles.activity_container}>
         <h1>Activity Summary</h1>
         <h3>This page will be dedicated to the student activity in real time. You will be able to see which students are out of class and view the time they have been out. </h3>
     </div>
 )
}
export default Activity