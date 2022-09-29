import React from 'react'
import InsideNavbar from '../../InsideNavbar';
import InsideFooter from '../../InsideFooter';
import styles from '../css/setting.module.css'
const Settings = () => {
  return (
    <div>
      <InsideNavbar/>
      <div className={styles.setting}>
                working area
      </div>
      <InsideFooter/>
    </div>
  )
}

export default Settings