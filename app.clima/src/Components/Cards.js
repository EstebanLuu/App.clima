import React from "react";
import "./Cards.scss";

const Cities = ({ cities }) => {
  if (cities.length !== 0) {
    return (
      <div className="abajop">
        <div className="tarjeta">
          <div className="partizqtarj">
            <h1>{cities.nombre}</h1>
            <h2>Temperatura actual:</h2>
            <div className="icondiv">
              <div className="iconsvg">
                <img
                  src={`http://openweathermap.org/img/wn/${cities.icon}@2x.png`}
                  alt=""
                />
              </div>
              <div className="temps">
                <span>{cities.temperatura}°C</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tarjeta">
          <div className="partdertarj">
            <div className="lineaderecha">
              <div className="infolineader">
                <span>Humedad</span>
              </div>
              <div className="templineader">
                <span>{cities.humedad}</span>
              </div>
            </div>
            <hr />
            <div className="lineaderecha">
              <div className="infolineader">
                <span>Temperatura Maxima</span>
              </div>
              <div className="templineader">
                <span>{cities.tempmax}°C</span>
              </div>
            </div>
            <hr />
            <div className="lineaderecha">
              <div className="infolineader">
                <span>Temperatura Minima</span>
              </div>
              <div className="templineader">
                <span>{cities.tempmin}°C</span>
              </div>
            </div>
            <hr />
            <div className="lineaderecha">
              <div className="infolineader">
                <span>Viento</span>
              </div>
              <div className="templineader">
                <span>{cities.viento}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="abajop"></div>;
  }
};

export default Cities;
