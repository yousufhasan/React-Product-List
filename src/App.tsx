import React from "react";
import {Logo} from "./components/Logo/Logo";
import {Product} from "./components/Product/Product";

function App() {
  return (
    <div className="container">
      <header>
        <Logo />
      </header>
      <section> 
         <Product />
      </section>
    </div>
  );
}

export default App;
