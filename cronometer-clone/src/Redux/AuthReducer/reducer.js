import { Login_Error, Login_Sucess, SIGNUP_SUCCESS } from "./actionType";
import  {loadData}  from "../../Utils/accessLocalStorage";
const token = loadData("key")
const initialState = {
    isAuth: token ? true : false,
    token: token || "",
	loading: false,
	error: false,
    userdata:{}
};


export const authReducer=(state=initialState,action)=>{

    const { type, payload } = action;

    switch(type){
        case SIGNUP_SUCCESS:{
            state.userdata={
              ...state.userdata,
...payload
            }
         
        return state
            
         

        }
        case Login_Sucess:{
           
            state = {
             isAuth: true ,
             token:token ,
             loading: false,
             error: false,
            }    
              return state
     
             }
             case Login_Error:{
                
                 state = {
                  isAuth: false ,
                  token:"" ,
                  loading: false,
                  error: true,
                 }    
                   return state
          
                  }
        default:
            return state;
    }

}