import React from "react";
import { Link } from "react-router-dom";
import imgege from "../img/1.jpg";
const SecondPage = () => {
  return (
    <>
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
        <div className="secpnd">
          <img src={imgege} alt="" />
        </div>
      </main>
      <section>
        <h1>jslhdskfhsdk</h1>
        <i>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          aspernatur aliquid libero, architecto perferendis sequi quod! Illo
          dolor est ipsam eligendi ea, sint, nisi soluta quos laborum quaerat
          ullam placeat?Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Veniam, asperiores voluptate. At amet deleniti repellat neque
          voluptatem, et quis facere exercitationem cumque incidunt saepe
          magnam, excepturi deserunt, dolorum ad iste.
        </i>
      </section>
    </>
  );
};

export default SecondPage;
