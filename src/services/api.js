export const fetchRepositories = (parameters) =>{
    return new Promise((resolve,reject)=>{
        const url = new URL('https://api.github.com/search/repositories')
        url.search = new URLSearchParams(parameters).toString()
        fetch(url,{
            headers:{
                "Authorization":`token ${sessionStorage.getItem('access_token')}`
            }
        })
        .then(res => res.json())
        .then(data =>resolve(data.items))
        .catch(err=>reject(err))
    })
}


export const fetchUsers = (parameters) =>{
    return new Promise((resolve,reject)=>{
        const url = new URL('https://api.github.com/search/users')
        url.search = new URLSearchParams(parameters).toString()
        fetch(url,{
            headers:{
                "Authorization":`token ${sessionStorage.getItem('access_token')}`
            }    
        })
        .then(res => res.json())
        .then(data =>resolve(data.items))
        .catch(err=>reject(err))
})
}


export const fetchUserDetails = (url) =>{
return new Promise((resolve,reject) =>{
    fetch(url,{
        headers:{
            "Authorization":`token ${sessionStorage.getItem('access_token')}`
        }
    })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
})
}

export const getToken = (tokenURL,parameters) =>{
    return new Promise((resolve,reject)=>{
            fetch(tokenURL,
            {
                method:'POST',
                headers:{
                    // "Access-Control-Allow-Origin":"*",
                    'Accept': 'application/json',
                    // 'Content-Type':'application/json'
                },
                body: parameters
            })
            .then(res => res.json())
            .then(token => {
                resolve(token['access_token'])
            })
            .catch(err => reject(err))
                       
    })
}