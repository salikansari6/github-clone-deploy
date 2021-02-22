import React,{useEffect,useContext} from 'react'
import BrandLogo from '../../assets/logos/BrandLogo'
import DashboardForm from '../Dashboard/DashboardForm/DashboardForm'
import './SearchScreen.css'
import { LoginContext } from '../../contexts/LoginContext';
import redirect from '../../utilities/redirect';

const SearchScreen = () => {
    const {goToDashboard,setShowNavbar,setGoToDashBoard} = useContext(LoginContext) 


    useEffect(() =>{
        if(goToDashboard){
            redirect('/dashboard')
        }
    },[goToDashboard])

    useEffect(() =>{
        setShowNavbar(false)
        //Cleanup function for returning to original state when dashboard animation is done
        return() =>{
            setTimeout(() =>{
                setGoToDashBoard(false)
            },1000)
        }

    },[setShowNavbar,setGoToDashBoard])

    return (
        <div className="search-screen">
            <div className="hero">
                <BrandLogo/>
                <p className="hero__tag">Discover users and repositories from Github with a single click</p>
            </div>
            <DashboardForm homePage={true}/>
        </div>
    )
}

export default SearchScreen
