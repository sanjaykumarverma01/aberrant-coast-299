 import React from 'react'
import { BsDot } from 'react-icons/bs';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import styles from './AfterLogin/css/footer.module.css';
import coronameter from './AfterLogin/images/coronameter.png'
 const InsideFooter =  () => {

   return (
     <div className={styles.center}>
      <div className={styles.footer}>
        <h4>Blog</h4>
        <BsDot className={styles.Dot}/>
        <h4>Forums</h4>
        <BsDot className={styles.Dot}/>
        <h4>Privacy</h4>
        <BsDot className={styles.Dot}/>
        <h4>Terms</h4>
        <BsDot className={styles.Dot}/>
        <h4>Affiliates</h4>
        <BsDot className={styles.Dot}/>
        <h4>Jobs</h4>
      </div>

      <div className={styles.bottomFotter}>
        <div>
        <img src="https://cdn1.cronometer.com/logos/app-store.png" alt="" />
        <img src="https://cdn1.cronometer.com/logos/google-play.png" alt="" />
        </div>

        <div >
          <img className={styles.logosimp} src={coronameter} alt="" />
        </div>

        <div className={styles.socialmedia}>
             <div  className={styles.socialicon}>
                <FiFacebook className={styles.logos}/>
             </div>
             <div className={styles.socialicon}>
                <FiTwitter className={styles.logos}/>
             </div>
             <div className={styles.socialicon}>
                <FiInstagram className={styles.logos}/>
             </div>
             <div className={styles.socialicon}>
                <FiYoutube className={styles.logos}/>
             </div>
        </div>

      </div>
     </div>
   )
 }
 
 export default InsideFooter;