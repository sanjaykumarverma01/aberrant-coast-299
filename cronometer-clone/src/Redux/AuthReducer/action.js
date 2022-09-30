import { Login_Error, Login_Request, Login_Sucess, SIGNUP_SUCCESS } from "./actionType"

export const SignUps=(payload)=>{
    return {type:SIGNUP_SUCCESS,payload}
}

export const loginrequest=()=>({
    type:Login_Request,

})

 export const loginsucess=(token)=>({
type: Login_Sucess,
payload:token
})


export const loginerror=(err)=>({
    type:Login_Error,
    payload:err
})
