import axios from "axios"
import { useEffect, useState } from "react"

const useApi = () => {

    const [coords, setCoords] = useState()
    const [resApi, setResApi] = useState()
    const [isLoading, setIsLoading] = useState(true)
  
    const API_KEY = "e16d802e271c790dcdfd53de66cccb59"
    let lat ,lon 
    
    
    useEffect(() => {
  
      const success = pos =>{
        
        lat = pos.coords?.latitude
        lon = pos.coords?.longitude
        setCoords({lat ,lon})
      }
      navigator.geolocation.getCurrentPosition(success)
    },[])
    
    useEffect(() => {
      if (coords !== undefined){
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.lon}&appid=${API_KEY}`
        axios.get(url)
        .then( res => {
          setResApi(res.data)
          setIsLoading(false)
        })
        }  
      }, [coords])  

  return { resApi, isLoading}
}

export default useApi