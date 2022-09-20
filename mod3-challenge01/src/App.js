import { useEffect } from "react";
import "./App.css";
import ColorList from "./components/ColorPicker";
import CharList from "./components/CharList";

function App() {
  return (
    <div className="App">
      <ColorList />
      <h1> SECCIÓN CHALLENGE </h1>
      <CharList />
    </div>
  );
}

export default App;
