

import './View.css'
import {db} from '../firebase/firebase'
import React,{useState,useEffect} from 'react'
import {Route, useParams,useHistory} from 'react-router-dom'

function View({currentUser}) {

 const {productId} = useParams();
 const [data,setData] = useState({});
 const[userDetails,setUserDetails] = useState("")

 
 console.log(currentUser)

   //fetching product Details

 useEffect(()=> {
    
     db.collection('products').doc(`${productId}`).get().then(snapshot => {
         setData(snapshot.data())
     })
 },[data,productId])

  //fetching seller details
 useEffect(() => {
    
   db.collection('users').where('id','==', `${data.userid}`).get().then((res) => {
        res.forEach(doc => {
            setUserDetails(doc.data())
        })
    })
 },[data,productId])

 const chat = () => {
    history.push("/chat")
}

 const history = useHistory();

    return (
        
        <div className="view">
               <Route>
              <div className="view__left">
              <img className="view__image__ProductImage" src ={data.url} alt=""/>
             
  
   
             <div className="view__productName">
                 <h1 >{data.Name}</h1>
             </div>

             <div className="view__productDescription">
                 {data.description} 
             </div>
              </div>
             
             

           
             <div className="view__right">
                 <div className="right__container1">
                     <h1> Price : ₹{data.Price}</h1>
                     <p> Category : {data.category}</p>
                     <p> Posted on : {data.CreatedAt}</p>

                 </div>


                 
                  <div className="right__container2">
                     <p>Seller description</p>
                       <p>{userDetails.usernames}</p>
                        <p>{data.phoneNumber}</p>
                       <p></p>       
                     </div>
                      
                    {currentUser&& <div className="right__container3">
                        <button className="view__chat" onClick={chat} >Chat with seller </button>
                     </div>}
                    
             </div>
         
                   
             </Route>
        </div>
    )
}

export default View
