import React from 'react'

const Link = ({children,to}) => {

    const navigate = (event) =>{
        event.preventDefault()
        window.history.pushState(null,null,to)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    return (
        <a onClick={navigate} href={to}>
            {children}
        </a>
    )
}

export default Link
