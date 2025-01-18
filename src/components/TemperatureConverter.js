import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const TemperatureConverter = ({title}) => {
    const BoxStyle = {
    
      padding: '15px'

    }
    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");


     const handleCelsiusChange = (e) => {
    setCelsius(e.target.value);
    setFahrenheit((parseFloat(e.target.value)*1.8 + 32).toFixed(2)); 
  };

  const handleFahrenheitChange = (e) => {
    setFahrenheit(e.target.value);
    setCelsius((parseFloat((e.target.value)-32 )/1.8).toFixed(1)); 
  };
  return (
    <div>
    <h1>Укажите температуру:</h1>
      <Box style={BoxStyle}>
        <TextField
          fullWidth
         
          label="Температура в Цельсия"
          id="celsius"
          onChange={handleCelsiusChange}
          value={celsius}
        />
      </Box>
      <Box style={BoxStyle}>
        <TextField
          fullWidth
          
          label="Температура в Фаренгейтах"
          id="fahrenheit"
          onChange={handleFahrenheitChange}
          value={fahrenheit}
          
        />
      </Box>
    </div>
  );
};

export default TemperatureConverter;
