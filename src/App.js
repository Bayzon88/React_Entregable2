import "./App.css";
import "./assets/css/styles.css";
import CustomNavbar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    //TODO RETIRAR inline style
    <div className='container-fluid bg-dark'>
      <BrowserRouter>
        <CustomNavbar />

        <Switch>
          <Route exact path='/'>
            <ItemListContainer />
          </Route>
          <Route exact path='/:categoryId'>
            {" "}
            <ItemListContainer greeting={"Filtro"} />
          </Route>
          <Route
            exact
            path='/:categoryId/:itemId/'
            component={ItemDetailContainer}
          >
            <ItemDetailContainer />
          </Route>
          {/* <ItemDetailContainer />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
