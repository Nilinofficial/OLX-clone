
import RecommendationsCards from './RecommendationsCards'
import './Recommendations.css'
import React from 'react'

function Recommendations() {
    return (
        <div className="recommendations">

<div className="recommendations__blocks">
                

                <p className="recommendations__blocks__p" >Fresh recommendations</p>
                <div className="recommendations__block">

                <RecommendationsCards imageurl="https://www.outlookindia.com/public/uploads/editor/2019-03-18/1552900432.jpg"  price="125000" title="Yamaha MT 15 BS6" />



                
                </div>
              
          </div>
            
        </div>
    )
}

export default Recommendations
