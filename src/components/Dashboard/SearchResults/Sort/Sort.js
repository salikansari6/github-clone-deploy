import React,{useContext} from 'react'
import "./Sort.css"
import {DebouncedFormContext} from "../../../../contexts/DebouncedFormContext"
const Sort = ({choice}) => {
    const {debouncedForm,setDebouncedForm,setPage} = useContext(DebouncedFormContext)

    const {sort} = debouncedForm

   if(choice === "users"){
       return <select name="sort" className="custom-select" id="" value={sort} onChange={(e) => {
        setDebouncedForm({
            ...debouncedForm,sort:e.target.value
        })
        setPage(1)
    }}>
        <option value="">Best Match</option>
        <option value="followers">Followers</option>
        <option value="repositories">Repositories</option>
    </select>
   }
   else if(choice === "repositories"){
       return <select name="sort" className="custom-select" id="" value={sort} onChange={(e) => {
        setDebouncedForm({
            ...debouncedForm,sort:e.target.value
        })
        setPage(1)
    }}>
        <option value="">Best Match</option>
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
    </select>
   }
}

export default Sort
