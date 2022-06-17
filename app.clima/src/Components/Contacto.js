import React, { useState } from "react";
import "./Contacto.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const [click, setClick] = useState(false);
  const burguer = () => {
    setClick(!click);
  };

  return (
    <div className={color ? "principalblack" : "principal"} id="navbar">
      <div className="logo">
        <a href="/">Weather App</a>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-brightness-high-fill"
            viewBox="0 0 16 16"
          >
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
          </svg>
        </div>
      </div>
      <div className={click ? "menuabierto" : "menu"} id="menu">
        <AiOutlineMenu id="hamburguesa" onClick={burguer} />
        <div className="cuadradito">
          <div className="primerdiv" onClick={burguer}>
            <span>x</span>
          </div>
          <div className="burguer-list">
            <div className="linealink">
              <a
                href="https://github.com/EstebanLuu"
                target="_blanck"
                rel="noreferrer"
              >
                <BsGithub className="iconn" />
              </a>
            </div>
            <div className="linealink">
              <a href="https://github.com/EstebanLuu">GitHub</a>
            </div>
            <div className="linealink">
              <a
                href="https://www.linkedin.com/in/esteban-nicol%C3%A1s-luna--/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="iconn" />
              </a>{" "}
            </div>
            <div className="linealink">
              <a
                href="https://www.linkedin.com/in/esteban-nicol%C3%A1s-luna--/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
