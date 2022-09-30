import React from 'react'
import { BsApple, BsHeartFill, BsThreeDotsVertical,} from 'react-icons/bs';
import { FaRunning } from 'react-icons/fa';
import {BiLeftArrow,BiNote,BiRightArrow} from 'react-icons/bi'
import styles from '../css/dairy.module.css'
import InsideNavbar from '../../InsideNavbar';
import InsideFooter from '../../InsideFooter';
import Nutrition from './Nutrition';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import graph1st from '../images/graph1st.png'
import graph2 from '../images/graph2.png'
const Dairy = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
    <InsideNavbar/>
    <div className={styles.dairy}>
      <div className={styles.firstbox}>
        <div className={styles.date} >
           <h4 onClick={() => setOpen(prev => !prev)}> <BiLeftArrow className={styles.symbol}/> September 28,2022 <BiRightArrow className={styles.symbol}/></h4>{open && <h3>show dates here</h3>}
        </div>
       <img src="https://s0.2mdn.net/simgad/9642918159393658806" alt="" />



       <div>
         <h5>Energy History (kcal)</h5>
        
      
       </div>


      </div>

      {/* /// */}


      <div className={styles.secondBox}>
        
        <div className={styles.contain}>

          <button style={{display:"flex"}}><span><BsApple/></span>ADD FOOD</button>
          <button style={{display:"flex"}}><span><FaRunning/></span>ADD EXERCISE</button>
          <button style={{display:"flex"}}><span><BsHeartFill/></span>ADD BIOMETRIC</button>
          <button style={{display:"flex"}}><span><BiNote/></span>ADD NOTE</button>
          <BsThreeDotsVertical className={styles.threedots}/>
          
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



    <div style={{width:"1200px",margin:"auto"}}>



      <div className={styles.nutBox}>
        <div className={styles.imggraph}>
          <img src={graph1st} alt=""  />
           
        </div>
       
        <div className={styles.pia}>
           <h1 className={styles.h1border}>Energy Summary</h1>

        <div className={styles.piaFirst}>

            <div>
            <CircularProgress value={40} size='120px' color='green.400'>
            <CircularProgressLabel>40 kcal</CircularProgressLabel>
            </CircularProgress>
            <h1>CONSUMED</h1>
            </div>

            <div>
              <CircularProgress value={80} size='120px' color='red.600'>
                <CircularProgressLabel>80 kcal</CircularProgressLabel>
              </CircularProgress> 
              <h1>BURNED</h1>
            </div>

            <div>
              <CircularProgress value={60} size='120px' color='blue.600'>
                  <CircularProgressLabel>60 kcal</CircularProgressLabel>
                </CircularProgress> 
                <h1>BUDGET</h1>
                 
            </div>
        </div>
      

        </div>

        <div className={styles.piasecond}>
           <h1 className={styles.h1border}>Macronutrient Targets</h1>

        <div className={styles.nuttable}>
            <div style={{width:"150px" }}>
            <h1>Energy</h1>
            <h1>Protein</h1>
            <h1>Net Carbs</h1>
            <h1>Fat</h1>
            </div>

            <div>
              <h1>0.0kcal/1884kcal(0%)</h1>
              <h1>0.0g/117.8(0%)</h1>
              <h1>0.0g/212.0g(0%)</h1>
              <h1>0.0g/62.8g(0%)</h1>
            </div>
 
        </div>

        </div>


      </div>
      

      <div className={styles.con}>
        <div>
        <img src={graph2} alt="" />
           
        </div>

        <div className={styles.consecond}>
            <h1 style={{borderBottom:"1px solid grey" ,paddingTop:"10px"}}>Nutrient Targets</h1>
            <div>
              <h1 style={{borderBottom:"1px solid grey" ,paddingLeft:"20px" ,paddingTop:"10px"}}>Nutrition Scores</h1>
              <div>
                <img src="https://cdn1.cronometer.com/2020/scores/NutritionScores_BannerGoldA.png" alt="" />
              </div>
            </div>
            <div>
              <h1>Highlighted Nutrients</h1>
               <div className={styles.circles}>

                <div className={styles.circleNut}>
                  <h2 className={styles.h2}> </h2>
                  <h1 className={styles.label}> </h1>
                </div>

                <div className={styles.circleNut}>
                <h2 className={styles.h2}> </h2>
                  <h1 className={styles.label}> </h1>
                </div>
                
                <div className={styles.circleNut}>
                <h2 className={styles.h2}> </h2>
                  <h1 className={styles.label}> </h1>
                </div>

                <div className={styles.circleNut}>
                <h2 className={styles.h2}> </h2>
                  <h1 className={styles.label}> </h1>
                </div>

                <div className={styles.circleNut}>
                <h2 className={styles.h2}> </h2>
                  <h1 className={styles.label}> </h1>
                </div>

                <div className={styles.circleNut}>
                <h2 className={styles.h2}> </h2>
                  <h1 className={styles.label}> </h1>
                </div>

                <div className={styles.circleNut}>
                <h2 className={styles.h2}> </h2>
                  <h1 className={styles.label}> </h1>
                </div>

                <div className={styles.circleNut}>
                <h2 className={styles.h2}> </h2>
                  <h1 className={styles.label}> </h1>
                </div>

               </div>
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