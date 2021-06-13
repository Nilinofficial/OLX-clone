
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Recommendations from './components/Recommendations';
import Suggestions from './components/Suggestions';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import React from 'react'
import Cars from './pages/Cars';

function App() {

  return (
    <div className="app">



<Router>
      <Header  />    
      <Banner/>
      
   <Switch>
   <Route exact path= "/">
  
     <Suggestions  />
     <Recommendations/>
      <Footer/>
      </Route>

        
     <Route path="/cars">
       <Cars/>
     </Route> 
     

     

      </Switch>
   
     </Router>

  

     
    </div>
  );
}

export default App;
