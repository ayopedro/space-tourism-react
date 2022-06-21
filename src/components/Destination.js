import { useState } from "react";
import data from "../starter-code/data.json";
import "../styles/Destination.css";

function Destination() {
  const [planets] = useState(data.destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];

  return (
    <>
      <section
        id="main"
        className="grid-container grid-container--destination flow home destination"
      >
        <article>
          <h1 className="numbered-title">
            <span aria-hidden="true">01 </span>Pick your destination
          </h1>
          <img src={images.png} alt={name} title={name} className="image" />
        </article>
        <article>
          <div>
            <ul className="tab-list underline-indicators flex">
              {planets.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setValue(index)}
                    className={`uppercase text-accent letter-spacing-2 ff-sans-cond ${
                      index === value && ""
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="fs-800 uppercase ff-serif">{name}</h2>
          <p>{description}</p>

          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="ff-serif uppercase">{distance}</p>
            </div>
            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="ff-serif uppercase">{travel}</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Destination;
