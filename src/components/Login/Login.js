import React from 'react'
import GitHubIcon from '../../assets/icons/GitHubIcon'
import "./Login.css"

const Login = () => {
    return (
        <div className="buttonWrap">
         <a className="button" href="https://github.com/login/oauth/authorize?client_id=bc8937aa7cf8f0b7e106">
                <GitHubIcon />  Login with <b>Github</b> </a>
        </div>
    )
}

export default Login
