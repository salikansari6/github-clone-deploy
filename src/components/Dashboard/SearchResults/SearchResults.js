import React,{useState,useEffect} from 'react'
import './SearchResults.css'
import UserList from '../SearchResults/UserList/UserList'
import RepoList from '../SearchResults/RepoList/RepoList'
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner'
import {fetchUserDetails,fetchUsers,fetchRepositories} from '../../../services/api'

const SearchResults = ({searchTerm,choice}) => {
    const [results, setResults] = useState(null) 
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        if(choice === "users"){  
            let promises = []
            setLoading(true)
            const parameters = {
                'q':searchTerm,
                'per_page' : 10,
            }
            fetchUsers(parameters)
            .then(data=>{
                data.forEach(user =>{
                promises.push(fetchUserDetails(user.url))
            })
            return Promise.all(promises)
        })
        .then(user =>{
            setResults(user)
            setLoading(false)
            
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
        }

        else if(choice === "repositories"){
            setLoading(true)
            const parameters = {
                'q':searchTerm,
                'per_page' : 10,
            }
            fetchRepositories(parameters)
            .then(repositories => {
                setResults(repositories)
                setLoading(false)
            } )
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
        }
    },[choice,searchTerm])

    if(loading){
        return <div className="loading-screen">
                    <LoadingSpinner/>
                </div>
    }
    
    return(
        <div className="results">
            {choice === "users" && <UserList results={results} />}
            {choice === "repositories" && <RepoList results={results}/> }
        </div>
    )

}

export default SearchResults
