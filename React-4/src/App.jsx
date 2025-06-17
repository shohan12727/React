import "./App.css";
import ConditionalMessage from "./ConditionalMessage";
import Dark from "./Dark";
import ImageGallary from "./ImageGallary";
import NameEcho from "./NameEcho";
import ProductCart from "./ProductCart";
import TabConponent from "./TabConponent";
import ToggleVisibility from "./ToggleVisibility";
import UserList from "./UserList";
import ValidationForm from "./ValidationForm";
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
      <TabConponent></TabConponent>
      <ImageGallary></ImageGallary>
      <ValidationForm></ValidationForm>
    </>
  );
}

export default App;
