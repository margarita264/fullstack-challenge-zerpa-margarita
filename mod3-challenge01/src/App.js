import "./App.css";
import ColorList from "./components/ColorPicker";
import CharList from "./components/CharList";

function App() {
  return (
    <div className="App">
      <h1> PRÁCTICA SUPERVISADA </h1>
      <ColorList />
      <h1> SECCIÓN CHALLENGE </h1>
      <CharList />
    </div>
  );
}

export default App;
