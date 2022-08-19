import { useSelector } from "react-redux/es/hooks/useSelector"
import { Navigate } from "react-router-dom"

export const AuthWrapper = ({ children }) => {
    
const AuthStatus= useSelector((store)=> store.authReducer.auth)
    console.log(AuthStatus)
    if (AuthStatus) {
        return children
    }
    return <Navigate to="/signin" state="/cart" replace={true}  />
}