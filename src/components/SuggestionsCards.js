import "./SuggestionsCards.css";
import { db } from "../firebase/firebase";
import React, { useEffect, useState } from "react";
import { useHistory} from "react-router-dom";

function SuggestionsCards() {



  const history = useHistory();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    db.collection("products").orderBy('timestamp','desc')
      .get()
      .then((snapshot) => {
        const allPost = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(allPost);
      });
  }, []);
  
  return (
    
    <div className="suggestions__cards">
      {products.map((product) => {
        return (
          <div
            className="suggestions__card"
            onClick={() => history.push(`/view/${product.id}`)}
          >
            <img
              className="suggestions__cards__image"
              src={product.url}
              alt=""
            />
            <h4> ₹ {product.Price}</h4>
            <p className="suggestions__cards__p">{product.Name}</p>
            <div className="date">
              <p className="date">{product.CreatedAt}</p>
            </div>
          </div>
        );
      })}



    </div>
    

   
  );
}

export default SuggestionsCards;
