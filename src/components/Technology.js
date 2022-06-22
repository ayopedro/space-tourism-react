import { useState } from "react";
import data from "../starter-code/data.json";
import "../styles/Technology.css";

function Technology() {
  const [technology] = useState(data.technology);
  const [value, setValue] = useState(0);

  const { name, images, description } = technology[value];
  return (
    <>
      <section className="grid-container grid-container--technology flow technology">
        <h1 className="numbered-title">
          <span aria-hidden="true">03 </span>Space launch 101
        </h1>
        <ul className="number-indicators flow">
          {technology.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => setValue(index)}
                className={`uppercase text-accent letter-spacing-2 fs-500  ff-serif ${
                  index === value && "active-btn"
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>

        <article className="technology-content flow">
          <header className="flow flow--space-small">
            <h2 className="fs-500 uppercase ff-sans-cond letter-spacing-1 text-accent">
              The terminology...
            </h2>
            <p className="fs-700 uppercase ff-serif letter-spacing-2">{name}</p>
          </header>

          <p className="fs-400 text-accent letter-spacing-2">{description}</p>
        </article>
        <div>
          <picture>
            <img src={images.portrait} alt={name} title={name} />
          </picture>
        </div>
      </section>
    </>
  );
}

export default Technology;
