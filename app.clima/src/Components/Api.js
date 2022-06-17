import React, { useState } from "react";
import Searchbar from "./Searchbar.js";
import Cards from "./Cards.js";

const apiKey = process.env.REACT_APP_API_KEY

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
            tempmax: Math.round(data.main.temp_max),
            tempmin: Math.round(data.main.temp_min),
            humedad: data.main.humidity,
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
      {console.log(cities)}
    </div>
  );
}

export default Api;
