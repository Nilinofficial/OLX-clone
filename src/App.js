
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Recommendations from './components/Recommendations';
import Suggestions from './components/Suggestions';
import{useState} from 'react'

function App() {


  const [userid,setUserid] = useState(null)
 



  return (
    <div className="app">
      <Header  setUserid = {setUserid} />
     
     <Banner/>
     <Suggestions  user={userid} />
     <Recommendations/>
     <Footer/>
     
    </div>
  );
}

export default App;
