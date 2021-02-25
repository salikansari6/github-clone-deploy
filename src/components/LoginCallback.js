import React from 'react'
import {getToken} from '../services/api';
import redirect from '../utilities/redirect';
const LoginCallback = () => {
    React.useEffect(() =>{

        if(!sessionStorage.getItem('access_token')){
            const code =  window.location.search.split("?code=")[1]
            const params = new URLSearchParams({
                "code":code
            })
            //Created my own node app to solve CORS error by proxying
            getToken('https://github-oauth-reverse-proxy.herokuapp.com/',params)
            .then(token => {
                localStorage.removeItem("formState")
                sessionStorage.setItem("access_token",token)
                redirect('/search-screen')
            })
            .catch(err=>{
                console.log(err)
                redirect('/')
            })
        }
        else{
            redirect('/search-screen')
        }
     
        

       
    },[])

    return (
        <div>
            Redirecting to DashBoard.....
        </div>
    )
}

export default LoginCallback
