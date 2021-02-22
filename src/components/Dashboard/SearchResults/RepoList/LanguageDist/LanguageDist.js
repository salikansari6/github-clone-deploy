import React,{useState,useEffect} from 'react'
import "./LanguageDist.css"
import PieChart from './PieChart/PieChart';
import DropdownIcon from '../../../../../assets/icons/DropdownIcon';
const LanguageDist = ({languages_url}) => {

    const [showLang,setShowLang] = useState(false)
    const [languages,setLanguages] = useState(null)

    const handleClick = () =>{
        setShowLang((lang) => !lang)
    }
    
    useEffect(() =>{
            if(showLang){
                fetch(languages_url)
                .then(res =>res.json())
                .then((data) => setLanguages(data))
            }
    },[showLang,languages_url])
        
    return (
        <div className="language-dist">
                <button className="language-dist__button" onClick={handleClick}>Languages used <DropdownIcon/></button>
                {
                    showLang && <PieChart languages={languages}/>
                }
        </div>
    )
}

export default LanguageDist
