import React from 'react'


import styles from '../css/nutrition.module.css';


    
 
const Vitamins = () => {
    const data={
        vit : [
        {
            id:1,
            a:"B1 (Thiamine)",
            b:(Math.random()*(10-1+1)*1).toFixed(2),
            c:"mg",
            d:"5%"
        },
        {
            id:2,
            a:"B2 (Riboflavin)",
            b:0.0,
            c:"mg",
            d:"2%"
        },
        {
            id:3,
            a:"B1 (Thiamine)",
            b:0.0,
            c:"mg",
            d:"1%"
        },
        {
            id:4,
            a:"B1 (Thiamine)",
            b:0.0,
            c:"mg",
            d:"1%"
        },
        {
            id:5,
            a:"B5 (Pantothenic Acid)",
            b:0.0,
            c:"mg",
            d:"2%"
        }
    ],
    bit : [
        {
            id:1,
            a:"B1 (Thiamine)",
            b:0.0,
            c:"mg",
            d:"1%"
        }
    ]
}


  return (
    <div>
        <div className={styles.vitamins}>
            <h4 className={styles.Heading}>Vitamins</h4>
            {data.vit.map((value)=>(
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"5px"}} key={value.id}>
                    <div >
                        <h4>{value.a}</h4>
                    </div>
                    <div >
                        <h4>{value.b}</h4>
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
    </div>
  )
}

export default Vitamins