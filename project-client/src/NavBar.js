import React from "react";
import styles from "./NavBar.module.css"
import {Link} from "react-router-dom"

function NavBar() {
    
    return (
        <div className={styles.NavBar_Container}>
        <nav>
            <Link to="/" width="33%"><h2>Home</h2></Link>
            <Link to="/classes" width="33%"><h2>Classes</h2></Link>
            <Link to="/activity" width="33%"><h2>Activity</h2></Link>

        </nav>
        </div>
    );
}
export default NavBar;