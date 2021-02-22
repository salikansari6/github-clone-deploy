import React,{createContext,useState} from 'react'

export const DebouncedFormContext = createContext() 

const DebouncedFormContextProvider = ({children}) =>{
    const [debouncedForm, setDebouncedForm] = useState({
        searchTerm:'',
        searchParam:'users',
        sort:''
    })
        const [page,setPage] = useState(1) 

    


return(
    <DebouncedFormContext.Provider value={{debouncedForm,setDebouncedForm,page,setPage}}>
        {children}
    </DebouncedFormContext.Provider>
)

}

export default DebouncedFormContextProvider