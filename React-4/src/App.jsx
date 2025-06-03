import "./App.css";
import ConditionalMessage from "./ConditionalMessage";
import Dark from "./Dark";
import NameEcho from "./NameEcho";
import ProductCart from "./ProductCart";
import ToggleVisibility from "./ToggleVisibility";
import UserList from "./UserList";
function App() {
  return (
    <>
      <h1>Shohan</h1>
      <Dark></Dark>
      <NameEcho></NameEcho>
      <ToggleVisibility></ToggleVisibility>
      <ProductCart title="Wireless Headphone" price="$99.99"></ProductCart>
      <ConditionalMessage></ConditionalMessage>
      <UserList></UserList>
    </>
  );
}

export default App;
