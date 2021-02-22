import React from 'react'
import './LoadingSpinner.css'

const Loading = () => {
    return (
        <div className="loading-wrapper">
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading
