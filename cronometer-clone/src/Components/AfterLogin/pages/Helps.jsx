import React from 'react'
import InsideNavbar from '../../InsideNavbar';
import InsideFooter from '../../InsideFooter';
import styles from '../css/Helps.module.css'
const Helps = () => {
  return (
    <div>
      <InsideNavbar/>
      <div className={styles.helps}>
                working area
      </div>
      <InsideFooter/>
    </div>
  )
}

export default Helps