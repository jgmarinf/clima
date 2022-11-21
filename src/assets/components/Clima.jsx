import React from 'react'
import '../../App.css'


function Clima({resApi}) {

console.log(resApi)
  return (
    <div className='card'>
    <h2>CLIMA APP</h2>
        <h2>{resApi?.name}</h2> 
        <div>
            <img src={resApi && `http://openweathermap.org/img/wn/${resApi?.weather[0].icon}@4x.png`} alt=""></img>
            <h2>i{resApi?.temp}</h2>
            <h2>info</h2>
            <h2>info</h2>
            <h2>info</h2>
        </div>
    </div>    )
}

export default Clima