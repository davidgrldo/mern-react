import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";
import DetailPage from "pages/DetailPage";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailPage}></Route>
        <Route exact path="/checkout" component={Checkout}></Route>
        <Route exact path="/example" component={Example}></Route>
      </Router>
    </div>
  );
}

export default App;
