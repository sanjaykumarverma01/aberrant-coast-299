import React from 'react'
import { BsApple, BsHeartFill, BsThreeDotsVertical } from 'react-icons/bs';
import { FaRunning } from 'react-icons/fa';
import {BiLeftArrow,BiNote,BiRightArrow} from 'react-icons/bi'
import styles from '../css/dairy.module.css'
import InsideNavbar from '../../InsideNavbar';
import InsideFooter from '../../InsideFooter';
import Nutrition from './Nutrition';

const Dairy = () => {
  return (
    <>
    <InsideNavbar/>
    <div className={styles.dairy}>
      <div className={styles.firstbox}>
        <div className={styles.date}>
           <h5> <BiLeftArrow className={styles.symbol}/> September 28,2022 <BiRightArrow className={styles.symbol}/></h5>
        </div>
       <img src="https://s0.2mdn.net/simgad/9642918159393658806" alt="" />
       <h5>Energy History (kcal)</h5>
      </div>

      {/* /// */}


      <div className={styles.secondBox}>
        <div className={styles.contain}>

          <button style={{display:"flex"}}><span><BsApple/></span>ADD FOOD</button>
          <button style={{display:"flex"}}><span><FaRunning/></span>ADD EXERCISE</button>
          <button style={{display:"flex"}}><span><BsHeartFill/></span>ADD BIOMETRIC</button>
          <button style={{display:"flex"}}><span><BiNote/></span>ADD NOTE</button>
          <BsThreeDotsVertical className={styles.threedots}/>
          {/* <span> <span><BsApple className={styles.logof}/></span>  ADD FOOD</span>
          <h5> <FaRunning className={styles.logoB}/>ADD EXERCISE</h5>
          <h5> <BsHeartFill className={styles.logof}/>ADD BIOMETRIC</h5>
          <h5> <BiNote className={styles.logoL}/>ADD NOTE</h5>
          
          <BsThreeDotsVertical className={styles.threedots}/> */}
        </div>
        <div className={styles.tablemain}>
          <div className={styles.tableinside}>
            <p>Description</p>
            <p className={styles.tableA}>Amount</p>
            <p className={styles.tableU}>Unit</p>
            <p className={styles.tableA}>Energy(kcal)</p>
          </div>
        
         <div className={styles.tableshow}>
         <p style={{display:"flex"}}><span><BsApple className={styles.logof}/></span> ADD FOOD</p>
         <p className={styles.tableA}>215</p>
         <p className={styles.tableU}>L</p>
         <p className={styles.tableAa}>0</p>
         </div> 

       </div>
      </div>
    </div>
    <Nutrition/>
    <InsideFooter/>
    </>
  )
}

export default Dairy