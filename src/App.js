import "./styles.css";
import Pokemon from "./components/Pokemon";
import useSWR from "swr";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const { data, error } = useSWR(url);

  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1 style={{"textAlign": "center"}}>Loading...</h1>;

  return (
    <main className="App">
      <h1>Pokedex</h1>
      <div>
        {data.results.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <button disabled={data.previous === null ? true : false} onClick={() => setUrl(data.previous)}>BACK</button>
      <button onClick={() => setUrl(data.next)}>MORE</button>
    </main>
  );
}

export default App;
