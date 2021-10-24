import "./App.css";
import CustomNavbar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  return (
    //TODO RETIRAR inline style
    <div className='container-fluid bg-dark' style={{ height: "100vh" }}>
      <CustomNavbar />;
      <ItemListContainer />;
    </div>
  );
}

export default App;
