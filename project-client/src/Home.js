import React from "react";
import styles from "./Home.module.css"

function Home() {
 return (
     <div className={styles.home_container}>
         <h1>Home</h1>
        <img src="images/tracker_banner.png" alt="tracker banner"/>
        <h3>Use this Hall Pass Tracker app to track students' out of class activity.</h3>
     </div>
 )
}
export default Home