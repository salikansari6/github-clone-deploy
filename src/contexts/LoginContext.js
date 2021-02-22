import React,{createContext,useState} from 'react'

export const LoginContext = createContext()

const LoginContextProvider = ({children}) =>{
    const [goToDashboard,setGoToDashBoard] = useState(false)
    const [showNavbar,setShowNavbar] = useState(true)
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    return(
        <LoginContext.Provider value={{goToDashboard,setGoToDashBoard,showNavbar,setShowNavbar,isLoggedIn,setIsLoggedIn}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider

