import "./styles.css";
import Pokemon from "./components/Pokemon";
import { useRequest } from "./useRequest";

function App() {
  const { data, error } = useRequest("");

  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <main className="App">
      <h1>Pokedex</h1>
      <div>
        {data.results.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </main>
  );
}

export default App;
