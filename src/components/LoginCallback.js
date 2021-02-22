import React from 'react'
import {getToken} from '../services/api';
import redirect from '../utilities/redirect';
const LoginCallback = () => {
    React.useEffect(() =>{
        const code =  window.location.search.split("?code=")[1]
        const params = new URLSearchParams({
            'client_id':'bc8937aa7cf8f0b7e106',
            'client_secret':'19b9deb912c11318b5638bf86b075cef59ec1388',
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
