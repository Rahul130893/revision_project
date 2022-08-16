import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import  signIn  from "../Redux/auth/action"
import { store } from "../Redux/store"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


export const Signin = () => {

  const token= useSelector((store)=> store.authReducer.token)
  const dispatch = useDispatch()
  let navigate= useNavigate()
  

  const [userEmail, setUserEmail]= useState("")
  const [userPass, setUserPass] = useState("")
  
   const handleChangeEmail = (e) => {
     setUserEmail(e.target.value)
   };

  
  const handleChangePass = (e) => {
    setUserPass(e.target.value)
  }

  const submitHandle = (e) => {
    e.preventDefault() 
    
    dispatch(signIn({ email: userEmail, password: userPass }))
   
   if (token) {
     alert("SignIn successfull");
    }
    
  }
  


  return (
    <div>
      <h2>SignIn page</h2>
      <form onSubmit={submitHandle}>
        <input
          onChange={handleChangeEmail}
          type="email"
          value={userEmail}
          placeholder="Enter Email"
          required
        /> 
        <input
          onChange={handleChangePass}
          type="text"
          value={userPass}
          placeholder="Enter password"
          required
        />
        <button type="submit" >SignIn</button>
      </form>
    </div>
  );
};
