import React,{useEffect,useState} from 'react'
import languageColorCodes from '../../../../../../utilities/languageColorCodes.json'
import "./PieChart.css"
import LoadingSpinnerDark from '../../../../../LoadingSpinnerDark/LoadingSpinnerDark'



const PieChart = ({languages}) => {
    const [langData,setLangData] = useState([])

    const calculatePercentage = (languages) =>{
        let langWithPercentage = []
        if(languages){
            const total = Object.values(languages).reduce((total, number) =>{
                return total + number
            },0)
            console.log(total)

            Object.keys(languages).forEach(function(key, index) {
                langWithPercentage.push({ name : [key][0],
                    percentage: (languages[key]/total).toFixed(4) *100 ,
                    color:languageColorCodes[0][key]})
              });

             setLangData(langWithPercentage)

        }
    }

    useEffect(() =>{
        calculatePercentage(languages)
    },[languages])

    var subtractArray=[]
    const renderPieChart = langData && langData.map((lang,index) =>{
        if(index===0)
        {
            subtractArray.push((100 - lang.percentage).toFixed(4))
            return <circle r="21" cx="25" cy="25" key={lang.name}
            fill="transparent"
            stroke={languageColorCodes[0][lang.name]}
            strokeWidth="5.5"
            strokeDasharray={`calc(100 *(3.1416*42)/100 ) calc(3.1416*42)`}
            transform="rotate(-90) translate(-50)"
        />
        }
        subtractArray.push((subtractArray[index-1] - lang.percentage).toFixed(4))
        return <circle r="21" cx="25" cy="25" key={lang.name}
        fill="transparent"
        stroke={languageColorCodes[0][lang.name]}
        strokeWidth="5.5"
        strokeDasharray={`calc(${subtractArray[index-1]} *(3.1416*42)/100 ) calc(3.1416*42)`}
        transform="rotate(-90) translate(-50)"
    />
    })


    if(languages){
        return (
            <div className="pie-chart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="150" width="150">
                    {renderPieChart}
                    <text x="50%" y="45%" fill="white" dominantBaseline="middle" textAnchor="middle" fontWeight="bold" fontSize="4px">Language</text>
                    <text x="50%" y="56%" fill="white" dominantBaseline="middle" textAnchor="middle" fontWeight="bold" fontSize="4px">Distribution</text>
                </svg>
    
                <div className="legend">
                    <ul>
                        {langData.map(lang =>{
                            return <li key={lang.name}>
                                    <span className="legend__lang-color" style={{background:lang.color}}></span>
                                    <p>{lang.name} {`(${lang.percentage.toFixed(2)}%)`}</p>
                                  </li> 
                        })}
                    </ul>
                </div>
            </div>
        )
    }
    else{
        return <div className="pie-chart">
            <LoadingSpinnerDark/>
        </div>
    }
   
}

export default PieChart
