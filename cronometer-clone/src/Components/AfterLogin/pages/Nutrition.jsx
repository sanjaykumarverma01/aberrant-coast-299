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
            cal:(Math.random()*(10-1+1)*1).toFixed(2),
            per:"kcal",
            unit:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:2,
            title:"Alcohol",
            cal:(Math.random()*(10-1+1)*1).toFixed(2),
            per:"g",
            unit:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:3,
            title:"Coffeine",
            cal:(Math.random()*(10-1+1)*1).toFixed(2),
            per:"mg",
            unit:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:4,
            title:"Water",
            cal:(Math.random()*(10-1+1)*1).toFixed(2),
            per:"g",
            unit:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        }
    ],
    vitamins : [
        {
            id:1,
            a:"B1 (Thiamine)",
            cal:0.0,
            c:"mg",
            d:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:2,
            a:"B2 (Riboflavin)",
            cal:(Math.random()*(10-1+1)*1).toFixed(2),
            c:"mg",
            d:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:3,
            a:"B3 (Niacin)",
            cal:(Math.random()*(10-1+1)*1).toFixed(2),
            c:"mg",
            d:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:4,
            a:"B5 (Pantothenic Acid)",
            cal:(Math.random()*(10-1+1)*1).toFixed(2),
            c:"mg",
            d:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:5,
            a:"B6 (Pyridoxine)",
            cal:(Math.random()*(10-1+1)*1).toFixed(2),
            c:"mg",
            d:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:6,
            a:"B12 (Cabalamin)",
            cal:(Math.random()*(10-1+1)*1).toFixed(2),
            c:"ug",
            d:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:7,
            a:"Folate",
            cal:(Math.random()*(10-1+1)*1).toFixed(2),
            c:"ug",
            d:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:8,
            a:"Vitamin A",
            cal:(Math.random()*(10-1+1)*1).toFixed(2),
            c:"ug",
            d:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:9,
            a:"Vitamin C",
            cal:(Math.random()*(10-1+1)*1).toFixed(2),
            c:"mg",
            d:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:10,
            a:"Vitamin D",
            cal:(Math.random()*(10-1+1)*1).toFixed(2),
            c:"IU",
            d:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:11,
            a:"Vitamin E",
            cal:(Math.random()*(10-1+1)*1).toFixed(2),
            c:"mg",
            d:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:12,
            a:"Vitamin K",
            cal:(Math.random()*(10-1+1)*1).toFixed(2),
            c:"ug",
            d:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        }

    ],
    Carbohadrates:[
        {
            id:1,
            T:"Carbs",
            C:(Math.random()*(10-1+1)*1).toFixed(2),
            P:"g",
            U:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:2,
            T:"Fiber",
            C:(Math.random()*(10-1+1)*1).toFixed(2),
            P:"g",
            U:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:3,
            T:"Starch",
            C:(Math.random()*(10-1+1)*1).toFixed(2),
            P:"g",
            U:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:4,
            T:"Sugars",
            C:(Math.random()*(10-1+1)*1).toFixed(2),
            P:"mg",
            U:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        },
        {
            id:5,
            T:"Net Carbs",
            C:(Math.random()*(10-1+1)*1).toFixed(2),
            P:"g",
            U:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
        }
    ],
    lipids:[
    { 
        id:1,
        lipT:"Fat",
        lipC:(Math.random()*(10-1+1)*1).toFixed(2),
        lipU:"g",
        lipP:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
    },
    { 
        id:2,
        lipT:"Monounsaturated",
        lipC:(Math.random()*(10-1+1)*1).toFixed(2),
        lipU:"g",
        lipP:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
    },
    { 
        id:3,
        lipT:"Polyunsaturated",
        lipC:(Math.random()*(10-1+1)*1).toFixed(2),
        lipU:"g",
        lipP:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
    },
    { 
        id:4,
        lipT:"Omega-3",
        lipC:(Math.random()*(10-0.1+1)*0.1).toFixed(2),
        lipU:"g",
        lipP:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
    },
    { 
        id:6,
        lipT:"Omega-6",
        lipC:(Math.random()*(10-1+0.1)*0.1).toFixed(2),
        lipU:"g",
        lipP:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
    },
    { 
        id:7,
        lipT:"Saturated",
        lipC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
        lipU:"g",
        lipP:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
    },
    { 
        id:8,
        lipT:"Trans-Fats",
        lipC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
        lipU:"g",
        lipP:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
    },
    { 
        id:1,
        lipT:"Cholestrol",
        lipC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
        lipU:"mg",
        lipP:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
    },

    ],
    Minerals:[
     {  id:1,
        MinT:"calcium",
        MinC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
        MinU:"mg",
        MinP:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
    },
    {  id:2,
        MinT:"Copper",
        MinC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
        MinU:"mg",
        MinP:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
    },
    {  id:3,
        MinT:"Iron",
        MinC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
        MinU:"mg",
        MinP:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
    },
    {  id:4,
        MinT:"Magnessium",
        MinC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
        MinU:"mg",
        MinP:(Math.random()*(5-1+1)*1).toFixed(2)+"%"
    },
    {  id:5,
        MinT:"Manganese",
        MinC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
        MinU:"mg",
        MinP:"6%"
    },
    {  id:6,
        MinT:"Phosphorus",
        MinC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
        MinU:"mg",
        MinP:"4%"
    },
    {  id:7,
        MinT:"Potassium",
        MinC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
        MinU:"mg",
        MinP:"9%"
    },
    {  id:8,
        MinT:"selenium",
        MinC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
        MinU:"mg",
        MinP:"1%"
    },
    {  id:9,
        MinT:"Zinc",
        MinC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
        MinU:"mg",
        MinP:"1%"
    },

    ],
    Protein:[
        {
            id:1,
            ProT:"Protein",
            ProC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
            ProU:"g",
            ProP:"1%"
        },
        {
            id:2,
            ProT:"Crstine",
            ProC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
            ProU:"g",
            ProP:"1%"
        },
        {
            id:3,
            ProT:"Histodine",
            ProC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
            ProU:"g",
            ProP:"3%"
        },
        {
            id:4,
            ProT:"Isoleucine",
            ProC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
            ProU:"g",
            ProP:"1%"
        },
        {
            id:5,
            ProT:"Leucine",
            ProC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
            ProU:"g",
            ProP:"1%"
        },
        {
            id:6,
            ProT:"Lysine",
            ProC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
            ProU:"g",
            ProP:"1%"
        },
        {
            id:7,
            ProT:"Methionic",
            ProC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
            ProU:"g",
            ProP:"1%"
        },
        {
            id:8,
            ProT:"Phenylalanine",
            ProC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
            ProU:"g",
            ProP:"2%"
        },
        {
            id:9,
            ProT:"Theonine",
            ProC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
            ProU:"g",
            ProP:"1%"
        },
        {
            id:10,
            ProT:"Trytophan",
            ProC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
            ProU:"g",
            ProP:"1%"
        },
        {
            id:11,
            ProT:"Valine",
            ProC:(Math.random()*(10-0.01+0.01)*1).toFixed(2),
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