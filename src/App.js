
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Recommendations from './components/Recommendations';
import Suggestions from './components/Suggestions';
import{useState} from 'react'

function App() {





  return (
    <div className="app">
      <Header   />
      
     <Banner/>
     <Suggestions   />
     <Recommendations/>
     <Footer/>
     
    </div>
  );
}

export default App;
