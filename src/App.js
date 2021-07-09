import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import View from "./components/View";
import Recommendations from "./components/Recommendations";
import Suggestions from "./components/Suggestions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React,{useState} from "react";






function App() {

const [currentUser,setCurrentUser] = useState(null)

  return (
    <div className="app">
      <Router>
        <Header  setCurrentUser={setCurrentUser}/>

        <Switch>
          <Route exact path="/">
            <Banner />
            <Suggestions />
            <Recommendations />
          </Route>

          

          <Route path="/view/:productId">
            <View currentUser={currentUser} />
          </Route>
       

        

        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
