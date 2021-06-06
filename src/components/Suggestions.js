import './Suggestions.css'
import React ,{useContext} from 'react'
import SuggestionsCards from './SuggestionsCards'
import Header from './Header'

function Suggestions() {

    

    return (
               
      
         <div className="suggestions">
             <div className="suggestions__blocks">
                
           
                   <p className="suggestions__blocks__p" >Based on your last search</p>
                   <div className="suggestions__block">

                   <SuggestionsCards imageurl="https://www.outlookindia.com/public/uploads/editor/2019-03-18/1552900432.jpg"  price="125000" title="Yamaha MT 15 BS6" />
                   
                   </div>
                 
             </div>
        </div>

       

     

       
    )
}

export default Suggestions
