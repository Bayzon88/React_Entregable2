import "./assets/css/styles.css";

import CustomNavbar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { CartHandler, CartContext } from "./Components/CartContext";
import Cart from "./Components/Cart";
import Carrusel from "./Components/Home/Carrusel";
import Featured from "./Components/Home/Featured";
import contarOvejas from "./retos";

function App() {
  return (
    //TODO RETIRAR inline style

    <BrowserRouter>
      <contarOvejas />
      <CartHandler>
        <CustomNavbar />

        <Switch>
          <Route exact path='/'>
            <Carrusel />
            <Featured />
            <ItemListContainer />
          </Route>

          <Route exact path='/cart'>
            <Cart />
          </Route>

          <Route exact path='/:categoryId'>
            {" "}
            <ItemListContainer greeting={"Filtro"} />
          </Route>
          <Route exact path='/:categoryId/:itemId/'>
            <ItemDetailContainer />
          </Route>
          {/* <ItemDetailContainer />
          </Route> */}
        </Switch>
      </CartHandler>
    </BrowserRouter>
  );
}

export default App;
