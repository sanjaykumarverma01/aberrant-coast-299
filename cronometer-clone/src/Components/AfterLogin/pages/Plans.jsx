import React from 'react'
import InsideNavbar from '../../InsideNavbar';
import InsideFooter from '../../InsideFooter';
import styles from '../css/plans.module.css'
const Plans = () => {
  return (
    <div>
      <InsideNavbar/>
      <div className={styles.plans}>
                working area
      </div>
      <InsideFooter/>
    </div>
  )
}

export default Plans