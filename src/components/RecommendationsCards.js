

import './RecommendationsCards.css'

import React,{useEffect,useState} from 'react'
import {db} from '../firebase/firebase'



function Cards() {


    const [products,setProducts] = useState([])

    useEffect(() => {
        db.collection('products').get().then((snapshot)=> {
            const allPost = snapshot.docs.map((product) => {
                return {
                    ...product.data(),
                    id:product.id
                }
            })
      setProducts(allPost)
      
        })
      }, [])
    

    return (
 
        <div className="recommendations__cards"> 


        {products.map((product)=> {

            return  <div className="recommendations__card">

             <img className="recommendations__cards__image" src={product.url} alt="" />
                 <h4> ₹ {product.Price}</h4>
                  <p className="recommendations__cards__p">{product.Name}</p>
                 
                  <p className="date">{product.CreatedAt}</p>
                  
        </div>})}



        </div>
    )
}

export default Cards
