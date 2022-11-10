import React, { useEffect, useState } from "react";
import { BsApple, BsHeartFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaRunning } from "react-icons/fa";
import { BiLeftArrow, BiNote, BiRightArrow } from "react-icons/bi";
import styles from "../css/dairy.module.css";
import InsideNavbar from "../../InsideNavbar";
import InsideFooter from "../../InsideFooter";
import Nutrition from "./Nutrition";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import graph1st from "../images/graph1st.png";
import graph2 from "../images/graph2.png";
import Calender from "./calender";
import { loadData } from "../../../Utils/accessLocalStorage";
import Modal1 from "./Modal1";
import { Box } from "@chakra-ui/react";
import Modal2 from "./model2";


const Dairy = () => {
  const [open, setOpen] = React.useState(false);
  const [close, setClose] = React.useState(false);
  // const [data,adddata]=useState({})
  const [map, mapdata] = useState([])
  const token = JSON.parse(localStorage.getItem("token"))

  const hadleclick = (elm, id) => {
    // console.log(elm)

    fetch(`https://cronologyback.herokuapp.com/food/getFood/${elm.name}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `breaer ${token}`
      },

    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        mapdata(
          [
            ...map, ...res
          ]
        )
      });



  }
  const handleclick2=(elm,id)=>{
    // console.log(elm)

    fetch(`https://cronologyback.herokuapp.com/crono/getExercise/${elm.name}`, {
      method: "GET",
      headers:{"Content-type":"application/json",
      authorization:`breaer ${token}`
    },

    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        mapdata(
       [
        ...map,...res
       ]
        )
      });



}
const handleArrow = () => {
  let status = !close;
  setClose(status);
};

console.log(map)
useEffect(() => {



}, [])
const day = new Date()
var value = (Math.random() * (100 - 1 + 1) * 1).toFixed(2)
// const { isOpen, onOpen, onClose } = ()
return (
  <>
    <InsideNavbar />
    <div className={styles.dairy}>
      <div className={styles.firstbox}>
        <div className={styles.date}>
          <h4 onClick={() => setOpen((prev) => !prev)}>
            {" "}
            <BiLeftArrow className={styles.symbol} /> October {new Date().toLocaleString("en-US", { day: '2-digit' })},2022{" "}
            <BiRightArrow className={styles.symbol} />
          </h4>
          {open && (
            <h3>
              <Calender />
            </h3>
          )}
        </div>
        <img src="https://s0.2mdn.net/simgad/9642918159393658806" alt="" />

        <div className={styles.h5}>
          <h5>Energy History (kcal)</h5>
        </div>
      </div>

      {/* /// */}

      <div className={styles.secondBox}>
        <div className={styles.contain}>
          <button style={{ display: "flex" }} onClick={handleArrow}>
            <span>
              <BsApple />
            </span>
            <Box mt={-2}><Modal1 hadleclick={hadleclick} /></Box>

          </button>

          <button style={{ display: "flex" }}>
            <span>
              <FaRunning />
            </span>
            <Box mt={-2} ><Modal2   handleclick2={handleclick2}/></Box>
          </button>
          <button style={{ display: "flex", width: "200px", color: "gray", fontWeight: "600" }}>
            <span>
              <BsHeartFill />
            </span>

            <Box display={"flex"}>  Add Biomatric</Box>
          </button>
          <button style={{ display: "flex", width: "200px", color: "gray", fontWeight: "600" }}>
            <span>
              <BsHeartFill />
            </span>

            <Box display={"flex"}>  Add Notes</Box>
          </button>
          <BsThreeDotsVertical className={styles.threedots} />


        </div>
        <div className={styles.tablemain}>
          <div className={styles.tableinside}>
            <p>Description</p>
            <p className={styles.tableA}>Amount</p>
            <p className={styles.tableU}>Unit</p>
            <p className={styles.tableA}>Energy(kcal)</p>
          </div>
          {map.map((elm) => {
            return <div className={styles.tableshow} >
              <p style={{ display: "flex", flexDirection: "row" }}>
                <span>
                  <BsApple className={styles.logof} />
                </span>
                <text style={{ display: "flex",overflow:"hidden",flexDirection:"row",width:"50px"}}>
                  {elm.name}
                </text>

              </p>
                <p className={styles.tableA}>{elm.duration_minutes}   {elm.amount}</p>   
             
             
              <p className={styles.tableU}>oz</p>
              <p className={styles.tableAa}>{elm.energy}{elm.calories_per_hour
}kcal</p>
            </div>




          })}


          <div className={styles.tableshow}>
              <p style={{ display: "flex" }}>
                <span>
                  <BsApple className={styles.logof} />
                </span>{" "}
                Apple,Fresh,With,Skin
              </p>
              <p className={styles.table2A}>1</p>
              <p className={styles.tableU}>oz</p>
              <p className={styles.tableAa}>94.64kcal</p>
            </div>

        </div>
      </div>
    </div>

    <div style={{ width: "1200px", margin: "auto" }}>
      <div className={styles.nutBox}>
        <div className={styles.imggraph}>
          <img src={graph1st} alt="" />
        </div>

        <div className={styles.pia}>
          <h1 className={styles.h1border}>Energy Summary</h1>

          <div className={styles.piaFirst}>
            <div>
              <CircularProgress value={value} size="120px" color="green.400">
                <CircularProgressLabel fontSize="lg">{value} kcal</CircularProgressLabel>
              </CircularProgress>
              <h1>CONSUMED</h1>
            </div>

            <div>
              <CircularProgress value={value + 20} size="120px" color="red.600">
                <CircularProgressLabel fontSize="lg">{(value * 0.1).toFixed(2)} kcal</CircularProgressLabel>
              </CircularProgress>
              <h1>BURNED</h1>
            </div>

            <div>
              <CircularProgress value={value + 40} size="120px" color="blue.600">
                <CircularProgressLabel fontSize="lg">{(value * value * 0.1).toFixed(2)} kcal</CircularProgressLabel>
              </CircularProgress>
              <h1>BUDGET</h1>
            </div>
          </div>
        </div>

        <div className={styles.piasecond}>
          <h1 className={styles.h1border}>Macronutrient Targets</h1>

          <div className={styles.nuttable}>
            <div style={{ width: "150px" }}>
              <h1>Energy</h1>
              <h1>Protein</h1>
              <h1>Net Carbs</h1>
              <h1>Fat</h1>
            </div>

            <div>
              <h1>{value}kcal({Math.floor((value / 117) * 100)}%)</h1>
              <h1>{(value * 0.1).toFixed(2)}g/117.8({Math.floor((value / 117) * 100)}%)</h1>
              <h1>{(3 * value * 0.1).toFixed(2)}g/212.0g(12%)</h1>
              <h1>{(value * value * 0.1).toFixed(2)}g/62.8g(1%)</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.con}>
        <div>
          <img src={graph2} alt="" />
        </div>

        <div className={styles.consecond}>
          <h1 style={{ borderBottom: "1px solid grey", paddingTop: "10px" }}>
            Nutrient Targets
          </h1>
          <div>
            <h1
              style={{
                borderBottom: "1px solid grey",
                paddingLeft: "20px",
                paddingTop: "10px",
              }}
            >
              Nutrition Scores
            </h1>
            <div>
              <img
                src="https://cdn1.cronometer.com/2020/scores/NutritionScores_BannerGoldA.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <h1>Highlighted Nutrients</h1>
            <div className={styles.circles}>
              <div className={styles.circleNut}>
                <h2 className={styles.a}> </h2>
                <h1 className={styles.A}> </h1>
              </div>

              <div className={styles.circleNut}>
                <h2 className={styles.b}> </h2>
                <h1 className={styles.B}> </h1>
              </div>

              <div className={styles.circleNut}>
                <h2 className={styles.c}> </h2>
                <h1 className={styles.C}> </h1>
              </div>

              <div className={styles.circleNut}>
                <h2 className={styles.d}> </h2>
                <h1 className={styles.D}> </h1>
              </div>

              <div className={styles.circleNut}>
                <h2 className={styles.e}> </h2>
                <h1 className={styles.E}> </h1>
              </div>

              <div className={styles.circleNut}>
                <h2 className={styles.f}> </h2>
                <h1 className={styles.F}> </h1>
              </div>

              <div className={styles.circleNut}>
                <h2 className={styles.g}> </h2>
                <h1 className={styles.G}> </h1>
              </div>

              <div className={styles.circleNut}>
                <h2 className={styles.h}> </h2>
                <h1 className={styles.H}> </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Nutrition />
    <InsideFooter />
  </>
);
};

export default Dairy;
