import './Header.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {auth,storage,db,firebase} from '../firebase/firebase'
import {useState,useEffect} from 'react'
import {Button,Input} from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { v4 as uuidv4 } from 'uuid';
import {Avatar} from '@material-ui/core'
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import {  Link } from "react-router-dom";
function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }


  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  


function Header({setUserid}) {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [user,setUser] = useState(null)
    const[openSignIn,setOpenSignIn] = useState(false)
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open,setOpen] = useState(false)
    const [openSell,setOpenSell] = useState(false)
    const [productName,setProductName] = useState("")
    const [productCategory,setProductCategory] = useState("");
    const [productPrice,setProductPrice]= useState();
    const [image,setimage] = useState(null);
    const [hamburgerOpen,setHamburgeropen] = useState(false)
   

    
 

    const date= new Date()

    const addItem = (e) => { 
      alert("Uploading...We will notify you when the upload completes.")
       storage.ref(`/images/${uuidv4()}-{image.name}`).put(image).then(({ref})=> {ref.getDownloadURL().then((url)=> {
      
         
      
      
       db.collection('products').add({
        Name : productName,
        category : productCategory,
        Price: productPrice,
        url:url,
        userId: user.uid,
        CreatedAt: date.toDateString(),
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
       }).then(setOpenSell(false)).then(alert("Item Uploaded and added...Please refresh"))
      })
     })
    
    
     
    

    }
    



  useEffect(() => {
    const unsubscribe =   auth.onAuthStateChanged((authUser)=> {
        if(authUser) {
          setUser(authUser)
         
        }
        else {
          setUser(null)
        }

        
     
       
      })



return () => {
 unsubscribe();
}

}, [user,username])


const signup = (event) => {
    event.preventDefault()
    auth.createUserWithEmailAndPassword(email,password).then((authUser) => {  return authUser.user.updateProfile({displayName:username})}).catch((error) => alert(error.message))
    
    
      setOpenSignIn(false)
     
    

   
    
    
    }
    
    const signIn = (event) => {
      event.preventDefault()
      auth.signInWithEmailAndPassword(email,password).catch((err)=> alert(err.message))
      setOpenSignIn(false)
      console.log(email)
      console.log(user)
      
      
    }


 

    return (

        
    

        <div className="header">
          
       
       <div  onClick={()=> setHamburgeropen(!hamburgerOpen)} className="hamburger">

             {hamburgerOpen && (<div className="header__burger__list"> 
             <div className="burger__list__top">
               <CloseIcon/>
             <svg className="olx__logo" width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
         
            </div>
            <div className="burger__list__login"><Avatar/> 
            
           
              {user  ? (<p className="burger__list__login__log">Logout {user.displayName} {}</p>) : (<div className="burger__list__login__log">
              <p className="burger__list__login__log__p1">Enter to your account</p>
              <p className="burger__list__login__log__p2" onClick={()=> setOpenSignIn(true)}>Log in to your account</p>
             
              </div>)}
              
             </div>

           
             <div className="burger__list__bottom">
              <div className="burger__list__bottom1">
                <CameraAltIcon/>
                <p onClick = {()=> setOpenSell(true)} >Start Selling</p>
                </div>
                <div className="burger__list__bottom2">
                  <ChatBubbleOutlineIcon/>
                  <p>Chat</p>
                  </div>
              
              </div>
             
             
              </div>) }


      <MenuIcon style={{ fontSize: 40 }}/>
      </div>

             <div className="header__components">
                <Link to ="/"><svg className="olx__logo" width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg></Link>
               
                 <div className="first__input">
                  <SearchIcon   className="first__input__search"/>
                 <input className="location" type="text" placeholder="Find my location"  />
                 
                 
                  
                 <KeyboardArrowDownIcon/>
                 </div>     
                   
                    <div className="second">
                    <input placeholder="Find Cars,Mobile Phones and more..." className="second__input__search" type="text" />

                    <button className="second__searchbutton">
                  
                    < SearchIcon className="second__input__search__icon" style={{ fontSize: 40 }} />  
                    </button>
                    
                   
                    </div>
                    <div className="language">
                    <h4>ENGLISH</h4>
                    <KeyboardArrowDownIcon/>
                    </div>

                    <div className="icons">
                    {user? ( <div> <ChatBubbleOutlineIcon />
                    </div>) : (<div> </div>)}
             
                    </div>
                         
                       
                
                    <div className="login_name">
                    {user ? (<p> Welcome {user.displayName} <Button onClick={()=>auth.signOut()}>   Logout </Button> </p>) 
              : (
                <div className="app__loginContainer">
                <Button onClick={()=> setOpenSignIn(true)}>Login</Button>
                
                </div>
              
              )
              }

                       
               
                    </div>


                 
   
               

                                   


   
                   <img onClick = { ()=> setOpenSell(true)} className="sell" src="/1178080.png" alt="" />
     
             </div>

     

      {user? (<div> </div>) : (        <Modal
        open={open}
        onClose={()=> setOpen(false)}
      >
     <div style={modalStyle} className={classes.paper}>
        <form className="header__signup">
        <center>
        <img className="header__login__image" src="/assets/olx-logo.png" alt="" srcset="" />
         <Input type="text"  placeholder="Enter your username" value={username} onChange={(event)=> setUsername(event.target.value)}  />
         <Input type="email"  placeholder="Enter your email" value={email} onChange={(event)=> setEmail(event.target.value)} />
         <Input   type="password"  placeholder="Enter your password" value={password} onChange={(event)=> setPassword(event.target.value)} />
    
           

         </center>

    

         <button className="header__signup__button" type="submit" onClick={signup}>Sign up</button>

         
         <p>Already a user? </p> <Button onClick={()=> setOpen(false)}>Sign In</Button>
         
        </form>
                
      </div>
        
      </Modal>
 )}


      <Modal
        open={openSignIn}
        onClose={()=> setOpenSignIn(false)}
      >
     <div style={modalStyle} className={classes.paper}>
        <form className="header__signin">
        <center>
        <img className="header__login__image" src="/assets/olx-logo.png" alt="" srcset="" />

        
    
           

        
         
        
       
         {user ? (<p>    <Button onClick={()=>auth.signOut()}>   Logout {user.displayName} </Button> </p>) 
              : (
                
                <div className="header__mobile__login" >

                  
         <Input type="email"  placeholder="Enter your email" value={email} onChange={(event)=> setEmail(event.target.value)} />
         <Input className="" type="password"  placeholder="Enter your password" value={password} onChange={(event)=> setPassword(event.target.value)} />
         <button className="header__login__button" type="submit" onClick={signIn}>Login</button> <br />
                  <p>Not a user? </p> <Button onClick={()=> setOpen(true)}>Sign Up</Button>
                
                </div>
               
              )
              }

      
</center>
        </form>
       
                 
      </div>
        
      </Modal>


      <div className="header__location">
      <LocationOnIcon style={{ fontSize: 40 }} />
      </div>

      <Modal
        open={openSell}
        onClose={()=> setOpenSell(false)}
      >
     <div style={modalStyle} className={classes.paper}>
        <form className="header__sell">
        <center>
        <img className="header__sell__image" src="/assets/olx-logo.png" alt="" srcset="" />
 
        
       
         {user ? ( <div className="header__sell__content" >

                  <p>Product Name</p>
<Input inputProps={{ maxLength: 22 }} type="text"  placeholder="eg: Galaxy S21 Ultra" maxLength="11"  value={productName} onChange={(event)=> {setProductName(event.target.value)}} />

<p>Category</p>
<Input inputProps={{ maxLength: 22 }} type="text"  placeholder="eg: Mobiles and Gadgets" value={productCategory} onChange= {(event) => {setProductCategory(event.target.value)}}   />

<p>Price</p>
<Input type="number"  placeholder="eg: 12,000,0"  value={productPrice} onChange={(event) =>  {setProductPrice(event.target.value)} }  />
<img width="100px" height="100px" src={image? URL.createObjectURL(image) : ""} alt="" />

<p>Product image</p>
<Input type="file" onChange={(event)=> {setimage(event.target.files[0])}} placeholder="eg: Galaxy S21 Ultra"   />

 <Button  onClick={addItem}>Add Item</Button>

 
       
       </div>) 
              : ( <div><p>Sign in to post ad</p>
                
                </div>
              )
              }

      
</center>
        </form>
       
                 
      </div>
        
      </Modal>
      
      
      </div>

        
    )
}

export default Header
