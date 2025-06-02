import "./App.css";
import Dark from "./Dark";
import NameEcho from "./NameEcho";
import ProductCart from "./ProductCart";
import ToggleVisibility from "./ToggleVisibility";
function App() {
  return (
    <>
      <h1>Shohan</h1>
      <Dark></Dark>
      <NameEcho></NameEcho>
      <ToggleVisibility></ToggleVisibility>
      <ProductCart
      title='Wireless Headphone'
      price='$99.99'
      ></ProductCart>
    </>
  );
}

export default App;
