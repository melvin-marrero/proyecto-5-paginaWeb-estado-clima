
import Formulario from "./formulario";
import { urlWeather,urlForecast } from "../URLAPP";
import Card from "./card";
import React, { useEffect, useState } from "react";


export default function WetherBaner() {
    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    useEffect(()=>{
        getLocation();
    },[])

    const getLocation = async(loc="santo domingo") =>{
        setLoading(true);
        setLocation(loc);
      try {
        await fetch(`${urlWeather}&q=${loc}`).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((urlData) =>{
            console.log(urlData);
            setWeather(urlData);
        })
      } catch (error) {
        console.log(error);
        setLoading(false);
        setShow(false);
      }
        
       try {
        await fetch(`${urlForecast}&q=${loc}`).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((ForecastData) =>{
            console.log(ForecastData);
            setForecast(ForecastData);
            setLoading(false);
            setShow(true);
        })
       } catch (error) {
            console.log(error);
            setLoading(false);
            setShow(false);
       }
        
    }
  return (
    <React.Fragment>
        <Formulario newLocation={getLocation} />
        <Card showdingData={show}
              loudingData={loading}
              weather={weather}
              forecast={forecast}/>
    </React.Fragment>
  )
}
