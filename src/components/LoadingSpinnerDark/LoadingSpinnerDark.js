import React from 'react'
import './LoadingSpinnerDark.css'


const LoadingSpinnerDark = () => {
    return (
        <div className="loading-wrapper">
        <div className="lds-roller-dark"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default LoadingSpinnerDark
