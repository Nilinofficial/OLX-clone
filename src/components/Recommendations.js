
import RecommendationsCards from './RecommendationsCards'
import './Recommendations.css'
import React from 'react'



function Recommendations() {




    return (
        <div className="recommendations">

<div className="recommendations__blocks">
                

                <p className="recommendations__blocks__p" >Fresh recommendations</p>
                <div className="recommendations__block">
               
                <RecommendationsCards  />


                
                </div>
              
          </div>
            
        </div>
    )
}

export default Recommendations
