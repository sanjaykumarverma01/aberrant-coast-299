import React from 'react'
import InsideNavbar from '../../InsideNavbar';
import InsideFooter from '../../InsideFooter';
import styles from '../css/Helps.module.css';
import { Button, ButtonGroup } from "@chakra-ui/react";
import {MdPlayArrow} from 'react-icons/md'
const Helps = () => {
  return (
    <div>
      <InsideNavbar/>
      <div className={styles.helps}>
               <div className={styles.heading}>
                <h1>Find your answers here</h1>
                <p>We have compiled all of our resources in one place so you can find the help you need.</p>
               </div>
              
            <div className={styles.GridBox} >

                <div className={styles.firstBox}>
                    <h1>Cronometer University</h1>
                    <div className={styles.insidebar}>
                      <img src="https://cdn1.cronometer.com/media/icon-cronometer-university.png" alt="" />
                      <p>Our video tutorial series will teach you everything you need to know about our application,goals and want someone who can work with you using Cronometer one feature at a time.</p>

                    </div>
                    <Button className={styles.but} styles={{marginTop:"20px"}} colorScheme="green" rightIcon={<MdPlayArrow />}>
    WATCH
  </Button>
                </div>

                <div className={styles.firstBox}>
                    <h1>Find a Professional</h1>
                    <div className={styles.insidebar}>
                      <img src="https://cdn1.cronometer.com/media/icon-find-a-professional.png" alt="" />
                      <p>If you'd like to find some professional help with achieving your health and fitness goals and want someone who can work with you using Cronometer, check out our Pro Directory to find a coach</p>
                    </div>
                    <Button className={styles.but} colorScheme="green" rightIcon={<MdPlayArrow />}>
    SEARCH
  </Button>
                </div>

                <div className={styles.firstBox}>
                    <h1>Contact Support</h1>
                    <div className={styles.insidebar}>
                      <img src="https://cdn1.cronometer.com/media/icon-contact-support.png" alt="" />
                      <p>OWe are here to help. If you can't find an answer to your question in our videos or the user manual, click here to drop us a line and we will get back to you with an answer as soon as we can.</p>
                    </div>
                    <Button className={styles.but} colorScheme="green" rightIcon={<MdPlayArrow />}>
    support@cronometer.com
  </Button>
                </div>

                <div className={styles.firstBox}>
                    <h1>User Manual</h1>
                    <div className={styles.insidebar}>
                      <img src="https://cdn1.cronometer.com/media/icon-user-manual.png" alt="" />
                      <p>All the documentation we have on our application, full of screenshots and step by step explanations of all of our features.</p>
                    </div>
                    <Button className={styles.but} colorScheme="green" rightIcon={<MdPlayArrow />}>
    READ
  </Button>
                </div>

                <div className={styles.firstBox}>
                    <h1>Our Blog</h1>
                    <div className={styles.insidebar}>
                      <img src="https://cdn1.cronometer.com/media/icon-blog.png" alt="" />
                      <p>Check out our blog to stay up to date on all the latest news and updates.</p>
                    </div>
                    <Button className={styles.but} colorScheme="green" rightIcon={<MdPlayArrow />}>
    READ
  </Button>
                </div>

                <div className={styles.firstBox}>
                    <h1>Community Forums</h1>
                    <div className={styles.insidebar}>
                      <img src="https://cdn1.cronometer.com/media/icon-community-forum.png" alt="" />
                      <p>Want to see how others are using Cronometer? Join the conversation on our forums.</p>
                    </div>
                    <Button className={styles.but} colorScheme="green" rightIcon={<MdPlayArrow />}>
    SAY HELLO
  </Button>
                </div>

            </div>
      </div>
      <InsideFooter/>
    </div>
  )
}

export default Helps