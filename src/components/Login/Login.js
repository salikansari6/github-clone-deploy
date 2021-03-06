import React,{useEffect} from 'react'
import GitHubIcon from '../../assets/icons/GitHubIcon'
import "./Login.css"

const Login = () => {

    useEffect(() =>{
        sessionStorage.removeItem('access_token')
    },[])

    return (
        <div className="buttonWrap">
         <a className="button" href="https://github.com/login/oauth/authorize?client_id=41143e99a909b42b5823">
                <GitHubIcon />  Login with <b>Github</b> </a>
        </div>
    )
}

export default Login
