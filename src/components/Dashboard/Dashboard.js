import React,{useContext,useEffect} from 'react'
import SearchResults from './SearchResults/SearchResults';
import './Dashboard.css'
import { LoginContext } from '../../contexts/LoginContext';
const Dashboard = () => {
    const {setIsLoggedIn,goToDashboard} = useContext(LoginContext)

    useEffect(() =>{
        setIsLoggedIn(true)        
    },[setIsLoggedIn,goToDashboard])

    return (
        <div className={ goToDashboard? "dashboard":'' }>
                <SearchResults/>
        </div>
    )
}

export default Dashboard
