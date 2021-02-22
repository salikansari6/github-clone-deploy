import React from 'react'
import {getToken} from '../services/api';
import redirect from '../utilities/redirect';
const LoginCallback = () => {
    React.useEffect(() =>{
        const code =  window.location.search.split("?code=")[1]
        const params = new URLSearchParams({
            'client_id':'41143e99a909b42b5823',
            'client_secret':'ce15a1d88c653532b30e15c1af2d6e4edb51b79b',
            'code':code
        })   
        
       getToken("https://github.com/login/oauth/access_token",params).then((token) =>{
           sessionStorage.setItem("access_token",token)
        //    window.location.pathname="/search-screen"
            localStorage.removeItem('formState')
            redirect('/search-screen')
       })
       .catch(err => console.log(err))
       
    },[])

    return (
        <div>
            Redirecting to DashBoard.....
        </div>
    )
}

export default LoginCallback
