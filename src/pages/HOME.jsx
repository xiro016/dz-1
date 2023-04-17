import React from "react";
import { Link } from "react-router-dom";
import imgege from "../img/1.jpg";

const HOME = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>Hello world</h1>

          <ul>
            <li>
              <Link>home</Link>
            </li>
            <li>
              <Link>about  us</Link>
            </li>
            <li>
              <Link>contact</Link>
            </li>
            <li>
              <Link>news</Link>
            </li>
            <li>
              <Link>service</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="block">
          <div className="blockImage">
           
           <h3>lolololo</h3>
           <Link to={"/second"}>
            <img className="img" src={imgege} alt="" />
            </Link>
          </div>
        </div>
        <div className="block">
          <div className="blockImage">
            <h3>lolololo</h3>
            <Link to={"/second"}>
            <img className="img" src={imgege} alt="" />
            </Link>
          </div>
        </div>
        <div className="block">
          <div className="blockImage">
            <h3>lolololo</h3>
            <Link to={"/second"}>
            <img className="img" src={imgege} alt="" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HOME;
