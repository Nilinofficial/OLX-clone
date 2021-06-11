import './Suggestions.css'
import React  from 'react'
import SuggestionsCards from './SuggestionsCards'



function Suggestions() {

  console.log()


   
    return (
              
             
             
          
             
            <div className="suggestions">
             <div className="suggestions__blocks">
                
           
                   <p className="suggestions__blocks__p" >Based on your last search</p>
                   <div className="suggestions__block">

                   <SuggestionsCards  />
                  
                   
                   </div>
                 
             </div>
        </div>  

       
      

     

       
    )
}

export default Suggestions
