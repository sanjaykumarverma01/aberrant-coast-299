import React from 'react'
import InsideNavbar from '../../InsideNavbar';
import InsideFooter from '../../InsideFooter';
import styles from '../css/trends.module.css'
const Trends = () => {
  return (
    <div>
      <InsideNavbar/>
      <div className={styles.trends}>
                working area
      </div>
      <InsideFooter/>
    </div>
  )
}

export default Trends