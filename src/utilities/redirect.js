const redirect = (to) =>{
    window.history.pushState({},"",to)
    window.dispatchEvent(new PopStateEvent('popstate'))
}

export default redirect