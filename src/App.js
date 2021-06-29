import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import View from "./components/View";
import Recommendations from "./components/Recommendations";
import Suggestions from "./components/Suggestions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";





function App() {



  return (
    <div className="app">
      <Router>
        <Header/>

        <Switch>
          <Route exact path="/">
            <Banner />
            <Suggestions />
            <Recommendations />
          </Route>

          

          <Route path="/view/:productId">
            <View />
          </Route>
       
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
