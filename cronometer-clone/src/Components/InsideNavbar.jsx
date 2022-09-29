import React from "react";
import { Link } from "react-router-dom";
import styles from './Innavbar.module.css';


const InsideNavbar = () => {
  return (
    <div className={styles.navbar}>
        <img className={styles.logo} src="https://cdn1.cronometer.com/logos/cronometer-logo-orange.png" alt="" />
      <div className={styles.links}>
        <Link className={styles.link} to="/dairy"><h4>Diary</h4></Link>
        <Link className={styles.link} to="/trends"><h4>Trends</h4></Link>
        <Link className={styles.link} to="/foods"><h4>Foods</h4></Link>
        <Link className={styles.link} to="/setting"><h4>Settings</h4></Link>
        <Link className={styles.link} to="/plans"><h4>Plans</h4></Link>
        <Link className={styles.link} to="/helps"><h4>Help</h4></Link>
      </div>
      <div>

      </div>
    </div>
  );
};

export default InsideNavbar;
