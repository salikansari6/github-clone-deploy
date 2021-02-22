const formatNumber = (number) =>{
    if(number.toString().length === 7)
    {
      return number.toString().slice(0,1)+"M"
    }
    if(number.toString().length === 6)
    {
      return number.toString().slice(0,3)+"k"
    }
    else if(number.toString().length === 5)
    {
      return number.toString().slice(0,2)+"k"
    }
    return number   
}

export default formatNumber