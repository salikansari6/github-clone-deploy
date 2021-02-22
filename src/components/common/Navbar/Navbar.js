import React,{useContext} from 'react'
import './Navbar.css'
import BrandLogo from '../../../assets/logos/BrandLogo';
import DashboardForm from '../../Dashboard/DashboardForm/DashboardForm';
import { LoginContext } from '../../../contexts/LoginContext';

const Navbar = () => {

    const {isLoggedIn} = useContext(LoginContext)

    return (
        <nav className="navbar navbar-dark py-3">
            <div className="container">
                <span className="navbar-brand">
                <BrandLogo/>
                </span>
                {
                isLoggedIn &&
                // <div className="navbar-form">
                    <DashboardForm />
                // </div>
                }
            </div>
        </nav>
    )
}

export default Navbar
