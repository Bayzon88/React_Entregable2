import "./App.css";
import "./assets/css/styles.css";
import CustomNavbar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";

function App() {
  return (
    //TODO RETIRAR inline style
    <div className='container-fluid bg-dark'>
      <CustomNavbar />;
      <ItemDetailContainer />;
    </div>
  );
}

export default App;
