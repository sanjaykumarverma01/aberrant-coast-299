import React from 'react'
import InsideNavbar from '../../InsideNavbar';
import InsideFooter from '../../InsideFooter';
import styles from '../css/food.module.css'
const Foods = () => {
  return (
    <div>
      <InsideNavbar/>
      <div className={styles.food}>
                working area 
      </div>
      <InsideFooter/>
    </div>
  )
}

export default Foods