import React from "react";
import "./Searchbar.scss";
import { FaSearch } from "react-icons/fa";

const Main = ({ Busqueda }) => {
  window.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      Busqueda(document.getElementById("value").value);
    }
  });
  return (
    <div>
      <div className="backgroundmain">
        <div className="busqueda">
          <div className="busquedaizq">
            <form action="">
              <FaSearch className="icon" />
              <input
                type="text"
                className="input"
                id="value"
                placeholder="Buscar"
              />
              <input
                className="equis"
                type="reset"
                value="enviar"
                onClick={() => Busqueda(document.getElementById("value").value)}
              />
            </form>
          </div>
          <div className="busquedader"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
