import { useState } from "react";
import data from "../starter-code/data.json";
import "../styles/Crew.css";
import { BsCircleFill } from "react-icons/bs";

function Crew() {
  const [crew] = useState(data.crew);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = crew[value];
  return (
    <>
      <section className="grid-container grid-container--crew flow crew">
        <h1 className="numbered-title">
          <span aria-hidden="true">02 </span>Meet your crew
        </h1>
        <div className="tabs">
          <ul className="flex">
            {crew.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => setValue(index)}
                  className={`grey-color ${index === value && "white-color"}`}
                >
                  <span className="sr-only">
                    {item.role} {item.name}
                  </span>
                  <BsCircleFill />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <article className="crew-content flow">
          <header className="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase">{role}</h2>
            <p className="fs-700 uppercase ff-serif">{name}</p>
          </header>

          <p>{bio}</p>
        </article>
        <picture>
          <source srcset={images.webp} type="image/webp" />
          <img src={images.png} alt={name} title={name} />
        </picture>
      </section>
    </>
  );
}

export default Crew;
