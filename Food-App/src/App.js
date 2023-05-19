import { Fragment } from "react";
import Header from "./componets/Layout/Header";
import Meals from "./componets/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
