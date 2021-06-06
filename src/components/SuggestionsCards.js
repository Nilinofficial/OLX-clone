

import './SuggestionsCards.css'

import React from 'react'

function Cards({imageurl,price,title}) {
    return (
        
     <div className="suggestions__cards">

<img className="suggestions__cards__image" src={imageurl} alt="" />
    <h4> ₹ {price}</h4>
     <p className="suggestions__cards__p">{title}</p>
</div>
        
      
    )
}

export default Cards
