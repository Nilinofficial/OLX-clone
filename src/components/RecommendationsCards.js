

import './RecommendationsCards.css'
import React from 'react'

function Cards({imageurl,price,title}) {
    return (
        <div className="recommendations__cards">

             <img className="recommendations__cards__image" src={imageurl} alt="" />
                 <h4> ₹ {price}</h4>
                  <p className="recommendations__cards__p">{title}</p>
        </div>
    )
}

export default Cards
