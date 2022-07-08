import React from "react";
import styles from "./Home.module.css"

function Home() {
 return (
     <div className={styles.home_container}>
         <h1>Home</h1>
        <img src="images/tracker_banner.png" alt="tracker banner"/>

     </div>
 )
}
export default Home