import React,{useState} from "react";
const TemperatureDisplay=({fahrenheit})=>{
    return
    <h3>Fahrenheit:{fahrenheit}F</h3>
};
const TemperatureConverter=()=>{
    const [celsius, setCelsius] = useState("");


    const handleInputChange=(e)=>
    {
        setCelsius(e.target.value)
    }
};
const convertToFahrenheit=(celsius)=>{
    return ((parseFloat(celsius)*9)/5+32);
};
return(
    <>
    
    <h2>Temp Converter</h2>
    
    Clesius:
    <input type="number" Enter Celsius   id="celsius"
      
        value={celsius}
        onChange={handleInputChange}
        style={{ marginLeft: "10px", padding: "5px" }}/>
   
    <TemperatureDisplay fahrenheit={celsius ? convertToFahrenheit(celsius):"0a"}/>
    </>
);

export default TemperatureConverter;