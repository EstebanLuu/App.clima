import React, { useState } from "react";
import Searchbar from "./Searchbar.js";
import Cards from "./Cards.js";

const apiKey = process.env.REACT_APP_API_KEY;

function Api() {
  const [cities, setCities] = useState([]);

  function Busqueda(ciudad) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.main !== undefined) {
          const ciudad = {
            temperatura: Math.round(data.main.temp),
            nombre: data.name,
            humedad: data.main.humidity,
            tempmax: Math.round(data.main.temp_max),
            tempmin: Math.round(data.main.temp_min),
            viento: data.wind.speed,
            icon: data.weather[0].icon,
            description: data.weather[0].description,
            pais: data.sys.country,
          };
          setCities(ciudad);
        } else {
          alert("No se encontro la ciudad");
        }
      });
  }

  return (
    <div>
      <Searchbar Busqueda={Busqueda}></Searchbar>
      <Cards cities={cities}></Cards>
    </div>
  );
}

export default Api;
