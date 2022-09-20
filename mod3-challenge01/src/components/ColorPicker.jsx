import { useState } from "react";
import Color from "./Color";

// const Color = ({ name, hex }) => {
//   return (
//     <div className="color-square" style={{ backgroundColor: hex }}>
//       <h2>{name}</h2>
//     </div>
//   );
// };
const colors = [
  {
    id: 1,
    name: "Rojo",
    hex: "#D7263D",
  },
  {
    id: 2,
    name: "Anaranjado",
    hex: "#F88D7F",
  },
  {
    id: 3,
    name: "Azul",
    hex: "#8496ff",
  },
];
/*COLOR LIST FUNCIONA CON UN BOTON*/
const ColorList = () => {
  const [ColorList, setColorList] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const cargarColores = () => {
    setisLoading(true);
    setTimeout(() => {
      setColorList(colors);
      setisLoading(false);
    }, 3888);
  };
  return (
    <>
      <button onClick={() => cargarColores()}>Click me</button>
      {isLoading && <h1>Loading</h1>}
      <div>
        {ColorList.map((color) => (
          <Color name={color.name} hex={color.hex} key={color.hex} />
        ))}
      </div>
    </>
  );
};
// export default ColorList;

const ColorPicker = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  return (
    <div className="page" style={{ backgroundColor }}>
      {colors.map((color) => (
        <Color
          key={color.id}
          hex={color.hex}
          name={color.name}
          setBackgroundColor={setBackgroundColor}
        />
      ))}
    </div>
  );
};
export default ColorPicker;
