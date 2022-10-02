import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react'
import styles from '../css/nutrition.module.css';
import Vitamins from './Vitamins';

const Nutrition = () => {

    const data={
    general : [
        {
            id:1,
            title:"Energy Energy",
            cal:119.2,
            per:"kcal",
            unit:"6%"
        },
        {
            id:2,
            title:"Alcohol",
            cal:0.0,
            per:"g",
            unit:"0%"
        },
        {
            id:3,
            title:"Coffeine",
            cal:0.0,
            per:"mg",
            unit:"1%"
        },
        {
            id:4,
            title:"Water",
            cal:177.2,
            per:"g",
            unit:"5%"
        }
    ],
    vitamins : [
        {
            id:1,
            a:"B1 (Thiamine)",
            cal:0.0,
            c:"mg",
            d:"1%"
        },
        {
            id:2,
            a:"B2 (Riboflavin)",
            cal:0.1,
            c:"mg",
            d:"5%"
        },
        {
            id:3,
            a:"B3 (Niacin)",
            cal:0.4,
            c:"mg",
            d:"2%"
        },
        {
            id:4,
            a:"B5 (Pantothenic Acid)",
            cal:0.2,
            c:"mg",
            d:"4%"
        },
        {
            id:5,
            a:"B6 (Pyridoxine)",
            cal:0.2,
            c:"mg",
            d:"14%"
        },
        {
            id:6,
            a:"B12 (Cabalamin)",
            cal:0.0,
            c:"ug",
            d:"0%"
        },
        {
            id:7,
            a:"Folate",
            cal:11.1,
            c:"ug",
            d:"3%"
        },
        {
            id:8,
            a:"Vitamin A",
            cal:5.8,
            c:"ug",
            d:"1%"
        },
        {
            id:9,
            a:"Vitamin C",
            cal:10.8,
            c:"mg",
            d:"12%"
        },
        {
            id:10,
            a:"Vitamin D",
            cal:0.0,
            c:"IU",
            d:"0%"
        },
        {
            id:11,
            a:"Vitamin E",
            cal:0.4,
            c:"mg",
            d:"3%"
        },
        {
            id:12,
            a:"Vitamin K",
            cal:4.1,
            c:"ug",
            d:"3%"
        }

    ],
    Carbohadrates:[
        {
            id:1,
            T:"Carbs",
            C:36.6,
            P:"g",
            U:"13%"
        },
        {
            id:2,
            T:"Fiber",
            C:5.1,
            P:"g",
            U:"13%"
        },
        {
            id:3,
            T:"Starch",
            C:1.6,
            P:"g",
            U:"0%"
        },
        {
            id:4,
            T:"Sugars",
            C:22.4,
            P:"mg",
            U:"1%"
        },
        {
            id:5,
            T:"Net Carbs",
            C:25.0,
            P:"g",
            U:"12%"
        }
    ],
    lipids:[
    { 
        id:1,
        lipT:"Fat",
        lipC:0.5,
        lipU:"g",
        lipP:"1%"
    },
    { 
        id:2,
        lipT:"Monounsaturated",
        lipC:0.0,
        lipU:"g",
        lipP:"0%"
    },
    { 
        id:3,
        lipT:"Polyunsaturated",
        lipC:0.1,
        lipU:"g",
        lipP:"0%"
    },
    { 
        id:4,
        lipT:"Omega-3",
        lipC:0.0,
        lipU:"g",
        lipP:"2%"
    },
    { 
        id:6,
        lipT:"Omega-6",
        lipC:0.1,
        lipU:"g",
        lipP:"1%"
    },
    { 
        id:7,
        lipT:"Saturated",
        lipC:0.1,
        lipU:"g",
        lipP:"0%"
    },
    { 
        id:8,
        lipT:"Trans-Fats",
        lipC:0.0,
        lipU:"g",
        lipP:"0%"
    },
    { 
        id:1,
        lipT:"Cholestrol",
        lipC:0.0,
        lipU:"mg",
        lipP:"0%"
    },

    ],
    Minerals:[
     {  id:1,
        MinT:"calcium",
        MinC:12.5,
        MinU:"mg",
        MinP:"1%"
    },
    {  id:2,
        MinT:"Copper",
        MinC:0.1,
        MinU:"mg",
        MinP:"8%"
    },
    {  id:3,
        MinT:"Iron",
        MinC:0.3,
        MinU:"mg",
        MinP:"4%"
    },
    {  id:4,
        MinT:"Magnessium",
        MinC:16.8,
        MinU:"mg",
        MinP:"4%"
    },
    {  id:5,
        MinT:"Manganese",
        MinC:0.1,
        MinU:"mg",
        MinP:"6%"
    },
    {  id:6,
        MinT:"Phosphorus",
        MinC:26.5,
        MinU:"mg",
        MinP:"4%"
    },
    {  id:7,
        MinT:"Potassium",
        MinC:296.2,
        MinU:"mg",
        MinP:"9%"
    },
    {  id:8,
        MinT:"selenium",
        MinC:0.3,
        MinU:"mg",
        MinP:"1%"
    },
    {  id:9,
        MinT:"Zinc",
        MinC:0.1,
        MinU:"mg",
        MinP:"1%"
    },

    ],
    Protein:[
        {
            id:1,
            ProT:"Protein",
            ProC:0.8,
            ProU:"g",
            ProP:"1%"
        },
        {
            id:2,
            ProT:"Crstine",
            ProC:0.0,
            ProU:"g",
            ProP:"1%"
        },
        {
            id:3,
            ProT:"Histodine",
            ProC:0.0,
            ProU:"g",
            ProP:"3%"
        },
        {
            id:4,
            ProT:"Isoleucine",
            ProC:0.0,
            ProU:"g",
            ProP:"1%"
        },
        {
            id:5,
            ProT:"Leucine",
            ProC:0.0,
            ProU:"g",
            ProP:"1%"
        },
        {
            id:6,
            ProT:"Lysine",
            ProC:0.0,
            ProU:"g",
            ProP:"1%"
        },
        {
            id:7,
            ProT:"Methionic",
            ProC:0.0,
            ProU:"g",
            ProP:"1%"
        },
        {
            id:8,
            ProT:"Phenylalanine",
            ProC:0.0,
            ProU:"g",
            ProP:"2%"
        },
        {
            id:9,
            ProT:"Theonine",
            ProC:0.0,
            ProU:"g",
            ProP:"1%"
        },
        {
            id:10,
            ProT:"Trytophan",
            ProC:0.0,
            ProU:"g",
            ProP:"1%"
        },
        {
            id:11,
            ProT:"Valine",
            ProC:0.0,
            ProU:"g",
            ProP:"2%"
        }


    ]
}

 
  return (
    <div className={styles.str}>
        <div className={styles.border}>
            <div className={styles.values}>
            <h4 className={styles.Heading}>General</h4>



            {data.general.map((value)=>(
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"5px"}} key={value.id}>
                     
                    <div >
                        <h4 >{value.title}</h4>
                    </div>
                    <div >
                        <h4>{value.cal} {value.per}</h4>
                    </div>
                    <div style={{border:"1px solid grey",width:"100px",textAlign:"center",borderRadius:"5px"}}>
                        <button>{value.unit}</button>
                    </div>
                </div>
            ))}
            </div>

         
          {/* <Vitamins/> */}
           
          <div className={styles.vitamins}>
            <h4 className={styles.Heading}>Vitamins</h4>
            {data.vitamins.map((value)=>(
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"5px"}} key={value.id}>
                    <div >
                        <h4>{value.a}</h4>
                    </div>
                    <div >
                        <h4>{value.cal} {value.c}</h4>
                    </div>
                    <div style={{border:"1px solid grey",width:"100px",textAlign:"center",borderRadius:"5px"}}>
                        <button>{value.d}</button>
                    </div>
                </div>
            ))}
            </div>


             {/* <carbohydrates/> */}
            <div>
                 <h4 className={styles.Heading}>Carbohydartes</h4>
                 {data.Carbohadrates.map((value)=>(
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"5px"}} key={value.id}>
                    <div >
                        <h4>{value.T}</h4>
                    </div>
                    <div >
                        <h4>{value.C} {value.P}</h4>
                    </div>
                    <div style={{border:"1px solid grey",width:"100px",textAlign:"center",borderRadius:"5px"}}>
                        <button>{value.U}</button>
                    </div>
                </div>
            ))}
            </div>
         
   {/* <lipids/> */}
            <div>
                 <h4 className={styles.Heading}>Carbohydartes</h4>
                 {data.lipids.map((value)=>(
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"5px"}} key={value.id}>
                    <div >
                        <h4>{value.lipT}</h4>
                    </div>
                    <div >
                        <h4>{value.lipC} {value.lipU}</h4>
                    </div>
                    <div style={{border:"1px solid grey",width:"100px",textAlign:"center",borderRadius:"5px"}}>
                        <button>{value.lipP}</button>
                    </div>
                </div>
            ))}
            </div>
     

       {/* < Minerals/> */}
       <div>
                 <h4 className={styles.Heading}>Minerals</h4>
                 {data.Minerals.map((value)=>(
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"5px"}} key={value.id}>
                    <div >
                        <h4>{value.MinT}</h4>
                    </div>
                    <div >
                        <h4>{value.MinC} {value.MinU}</h4>
                    </div>
                    <div style={{border:"1px solid grey",width:"100px",textAlign:"center",borderRadius:"5px"}}>
                        <button>{value.MinP}</button>
                    </div>
                </div>
            ))}
            </div>
  


        {/* < Protein/> */}
        <div>
                 <h4 className={styles.Heading}>Protein</h4>
                 {data.Protein.map((value)=>(
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"5px"}} key={value.id}>
                    <div >
                        <h4>{value.ProT}</h4>
                    </div>
                    <div >
                        <h4>{value.ProC} {value.ProU}</h4>
                    </div>
                    <div style={{border:"1px solid grey",width:"100px",textAlign:"center",borderRadius:"5px"}}>
                        <button>{value.ProP}</button>
                    </div>
                </div>
            ))}
            </div>


        </div>
    </div>
  )
}

export default Nutrition