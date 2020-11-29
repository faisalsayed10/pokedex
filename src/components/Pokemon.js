import React from "react";
import "../styles.css";
import useSWR from "swr";

function Pokemon({ pokemon }) {
  const { name } = pokemon
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const { data, error } = useSWR(url);

  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <div className="Card">
      <span className="Card--id">#{data.id}</span>
      <img
        className="Card--image"
        src={data.sprites.front_default}
        alt={name}
      />
      <h1 className="Card--name">{name}</h1>
      <span className="Card--details">
        {data.types.map((poke) => poke.type.name).join(", ")}
      </span>
    </div>
  );
}

export default Pokemon;