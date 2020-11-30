import React, { useEffect, useState } from "react"
import CloudIcon from '@material-ui/icons/Cloud';


function Weather() {
    useEffect(() => {
        fetchItems()
    }, [])
    const [items, setItems] = useState([])
    const fetchItems = async () => {
        const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Dublin&appid=${process.env.REACT_APP_WEATHER_API}`)
        const items = await data.json()
        console.log(items)
        const kelvin=items.main.temp;
        const celcius=Math.round(kelvin-273.15);
        console.log(celcius)
        setItems(celcius)
    }

    return (
        <div className="weather">
            {
                <h4>Weather <CloudIcon fontSize="large"/> {items} °C­</h4>
            }
        </div>
    )
}

export default Weather;
