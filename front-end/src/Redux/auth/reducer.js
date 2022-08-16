

import {SIGNIN_FAIL, SIGNIN_REQ, SIGNIN_SUCC} from "./action";

const initial = {
    auth: false,
    token: "",
    error: false
};

export const authReducer = (state = initial, action) => { 


    const { type, payload } = action
    switch (type) {
      case SIGNIN_REQ:
        return { 
          
          auth: false,
            token: "",
          error: false
        };
      case SIGNIN_SUCC:
        return {
         
          auth: true,
            token: payload,
          error: false
        };
      case SIGNIN_FAIL:
        return {
           
            auth: false,
            token: "",
            error: payload,
            
        };
      default:
        return state;
    }

}