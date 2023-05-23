import { Fragment } from "react";
import Header from "./componets/Layout/Header";
import Meals from "./componets/Meals/Meals";
import Cart from "./componets/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
