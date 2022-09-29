import React from 'react'
import styles from '../css/nutrition.module.css';
import Vitamins from './Vitamins';

const Nutrition = () => {

    const data={
        general : [
        {
            id:1,
            title:"B1 (Thiamine)",
            cal:0.0,
            per:"mg",
            unit:"1%"
        },
        {
            id:2,
            title:"B1 (Thiamine)",
            cal:0.0,
            per:"mg",
            unit:"1%"
        },
        {
            id:3,
            title:"B1 (Thiamine)",
            cal:0.0,
            per:"mg",
            unit:"1%"
        },
        {
            id:4,
            title:"B1 (Thiamine)",
            cal:0.0,
            per:"mg",
            unit:"1%"
        },
        {
            id:5,
            title:"B1 (Thiamine)",
            cal:0.0,
            per:"mg",
            unit:"1%"
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
            a:"B1 (Thiamine)",
            cal:0.0,
            c:"mg",
            d:"1%"
        },
        {
            id:3,
            a:"B1 (Thiamine)",
            cal:0.0,
            c:"mg",
            d:"1%"
        },
        {
            id:1,
            a:"B1 (Thiamine)",
            cal:0.0,
            c:"mg",
            d:"1%"
        },
        {
            id:2,
            a:"B1 (Thiamine)",
            cal:0.0,
            c:"mg",
            d:"1%"
        },
        {
            id:3,
            a:"B1 (Thiamine)",
            cal:0.0,
            c:"mg",
            d:"1%"
        },
        {
            id:1,
            a:"B1 (Thiamine)",
            cal:0.0,
            c:"mg",
            d:"1%"
        },
        {
            id:2,
            a:"B1 (Thiamine)",
            cal:0.0,
            c:"mg",
            d:"1%"
        },
        {
            id:3,
            a:"B1 (Thiamine)",
            cal:0.0,
            c:"mg",
            d:"1%"
        },
        {
            id:1,
            a:"B1 (Thiamine)",
            cal:0.0,
            c:"mg",
            d:"1%"
        }

    ],
    Carbohadrates:[
        {
            id:1,
            T:"B1 (Thiamine)",
            C:0.0,
            P:"mg",
            U:"1%"
        },
        {
            id:2,
            T:"B1 (Thiamine)",
            C:0.0,
            P:"mg",
            U:"1%"
        },
        {
            id:3,
            T:"B1 (Thiamine)",
            C:0.0,
            P:"mg",
            U:"1%"
        },
        {
            id:4,
            T:"B1 (Thiamine)",
            C:0.0,
            P:"mg",
            U:"1%"
        },
        {
            id:5,
            T:"B1 (Thiamine)",
            C:0.0,
            P:"mg",
            U:"1%"
        }
    ],
    lipids:[
    { 
        id:2,
        lipT:"Fat",
        lipC:6.5,
        lipU:"g",
        lipP:"1%"
    },
    { 
        id:3,
        lipT:"Fat",
        lipC:6.5,
        lipU:"g",
        lipP:"1%"
    },
    { 
        id:4,
        lipT:"Fat",
        lipC:6.5,
        lipU:"g",
        lipP:"1%"
    },
    { 
        id:5,
        lipT:"Fat",
        lipC:6.5,
        lipU:"g",
        lipP:"1%"
    },
    { 
        id:6,
        lipT:"Fat",
        lipC:6.5,
        lipU:"g",
        lipP:"1%"
    },
    { 
        id:7,
        lipT:"Fat",
        lipC:6.5,
        lipU:"g",
        lipP:"1%"
    },
    { 
        id:8,
        lipT:"Fat",
        lipC:6.5,
        lipU:"g",
        lipP:"1%"
    },
    { 
        id:1,
        lipT:"Fat",
        lipC:6.5,
        lipU:"g",
        lipP:"1%"
    },

    ],
    Minerals:[
     {  id:1,
        MinT:"calcium",
        MinC:1.5,
        MinU:"mg",
        MinP:"0%"
    },
    {  id:2,
        MinT:"calcium",
        MinC:1.5,
        MinU:"mg",
        MinP:"0%"
    },
    {  id:3,
        MinT:"calcium",
        MinC:1.5,
        MinU:"mg",
        MinP:"0%"
    },
    {  id:4,
        MinT:"calcium",
        MinC:1.5,
        MinU:"mg",
        MinP:"0%"
    },
    {  id:5,
        MinT:"calcium",
        MinC:1.5,
        MinU:"mg",
        MinP:"0%"
    },
    {  id:6,
        MinT:"calcium",
        MinC:1.5,
        MinU:"mg",
        MinP:"0%"
    },
    {  id:7,
        MinT:"calcium",
        MinC:1.5,
        MinU:"mg",
        MinP:"0%"
    },
    {  id:8,
        MinT:"calcium",
        MinC:1.5,
        MinU:"mg",
        MinP:"0%"
    },
    {  id:9,
        MinT:"calcium",
        MinC:1.5,
        MinU:"mg",
        MinP:"0%"
    },

    ],
    Protein:[
        {
            id:1,
            ProT:"Protein",
            ProC:0.3,
            ProU:"g",
            ProP:"0%"
        },
        {
            id:2,
            ProT:"Protein",
            ProC:0.3,
            ProU:"g",
            ProP:"0%"
        },
        {
            id:3,
            ProT:"Protein",
            ProC:0.3,
            ProU:"g",
            ProP:"0%"
        },
        {
            id:4,
            ProT:"Protein",
            ProC:0.3,
            ProU:"g",
            ProP:"0%"
        },
        {
            id:5,
            ProT:"Protein",
            ProC:0.3,
            ProU:"g",
            ProP:"0%"
        },
        {
            id:6,
            ProT:"Protein",
            ProC:0.3,
            ProU:"g",
            ProP:"0%"
        },
        {
            id:7,
            ProT:"Protein",
            ProC:0.3,
            ProU:"g",
            ProP:"0%"
        },
        {
            id:8,
            ProT:"Protein",
            ProC:0.3,
            ProU:"g",
            ProP:"0%"
        },
        {
            id:9,
            ProT:"Protein",
            ProC:0.3,
            ProU:"g",
            ProP:"0%"
        },
        {
            id:10,
            ProT:"Protein",
            ProC:0.3,
            ProU:"g",
            ProP:"0%"
        },


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
                        <h4>{value.title}</h4>
                    </div>
                    <div >
                        <h4>{value.cal}</h4>
                    </div>
                    <div>
                        <h4>{value.per}</h4>
                    </div>
                    <div style={{border:"1px solid grey",width:"100px",textAlign:"center",borderRadius:"20px"}}>
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
                        <h4>{value.cal}</h4>
                    </div>
                    <div>
                        <h4>{value.c}</h4>
                    </div>
                    <div style={{border:"1px solid grey",width:"100px",textAlign:"center",borderRadius:"20px"}}>
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
                        <h4>{value.C}</h4>
                    </div>
                    <div>
                        <h4>{value.P}</h4>
                    </div>
                    <div style={{border:"1px solid grey",width:"100px",textAlign:"center",borderRadius:"20px"}}>
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
                        <h4>{value.lipC}</h4>
                    </div>
                    <div>
                        <h4>{value.lipU}</h4>
                    </div>
                    <div style={{border:"1px solid grey",width:"100px",textAlign:"center",borderRadius:"20px"}}>
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
                        <h4>{value.MinC}</h4>
                    </div>
                    <div>
                        <h4>{value.MinU}</h4>
                    </div>
                    <div style={{border:"1px solid grey",width:"100px",textAlign:"center",borderRadius:"20px"}}>
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
                        <h4>{value.ProC}</h4>
                    </div>
                    <div>
                        <h4>{value.ProU}</h4>
                    </div>
                    <div style={{border:"1px solid grey",width:"100px",textAlign:"center",borderRadius:"20px"}}>
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

// {data.map((value)=>(
//     <div  key={value.id}>
//         <div >
//             <div >
//          <h1>{value.title} {value.unit}{value.cal}{value.per}</h1>
//          <h1></h1>
//          <p></p>
//          <button></button>
//             </div>
//          <br />
//         </div>
//     </div>
// ))}