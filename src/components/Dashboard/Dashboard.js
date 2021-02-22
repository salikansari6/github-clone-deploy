import React,{useState,useEffect} from 'react'
import DashboardForm from './DashboardForm/DashboardForm';
import SearchResults from './SearchResults/SearchResults';

const Dashboard = () => {
    //Lifted state from DashboardForm component so other components can share data  
    //State for handling form fields along with initial values
    const [form ,setForm] = useState({
        searchTerm:'',
        searchParam:'users'
    })

    //Added debounced state to only run side effect when submit button is clicked
    const [debouncedForm, setDebouncedForm] = useState({
        searchTerm:'',
        searchParam:'users'
    })

    //Fetching search state from localStorage on page load
    useEffect(() =>{
        const formState = localStorage.getItem('formState');
        if(formState){
            setDebouncedForm(JSON.parse(formState))
            setForm(JSON.parse(formState))
        }
        
    },[])
    
    //Side-effect for persisting search state to localStorage  
    useEffect(() => {
        localStorage.setItem('formState',JSON.stringify(debouncedForm))
    },[debouncedForm])

    const handleSubmit = (event) =>{
        event.preventDefault();
        setDebouncedForm({
            searchTerm:form.searchTerm,
            searchParam:form.searchParam
        })
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <DashboardForm form={form} setForm={setForm} handleSubmit={handleSubmit} />
            <SearchResults 
                searchTerm={debouncedForm.searchTerm} 
                choice={debouncedForm.searchParam}
                
            />
        </div>
    )
}

export default Dashboard
