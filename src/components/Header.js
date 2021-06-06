import './Header.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {db,auth} from '../firebase/firebase'
import {useState,useEffect} from 'react'
import {Button,Input} from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import PageviewIcon from '@material-ui/icons/Pageview';
import Suggestions from './Suggestions';


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
  


function Header() {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [user,setUser] = useState(null)
  const[openSignIn,setOpenSignIn] = useState(false)
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open,setOpen] = useState(false)

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
    setOpen(false)
    
    
    }
    
    const signIn = (event) => {
      event.preventDefault()
      auth.signInWithEmailAndPassword(email,password).catch((err)=> alert(err.message))
      setOpenSignIn(false)
    
    }
    


    return (
        <div className="header">

             <div className="header__components">
                <a><svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg></a>
               
                 <div className="first__input">
                   <SearchIcon className="first__input__search"/>
                 <input className="location" type="text" placeholder="India" />
                 <KeyboardArrowDownIcon/>
                 </div>     
                    
                    <div className="second">
                    <input placeholder="Find Cars,Mobile Phones and more..." className="second__input__search" type="text" />

                    <button className="second__searchbutton">
                  
                    < SearchIcon className="second__input__search__icon" style={{ fontSize: 40 }} />  
                    </button>
                    
                   
                    </div>
                    <h4>ENGLISH</h4>




                   {user ? (<p> Welcome {user.displayName} <Button onClick={()=>auth.signOut()}>   Logout </Button> </p>) 
              : (
                <div className="app__loginContainer">
                <Button onClick={()=> setOpenSignIn(true)}>Login</Button>
                
                </div>
              )
              }
 

                          





   
                   <img className="sell" src="/1178080.png" alt="" />
     
             </div>

             <Modal
        open={open}
        onClose={()=> setOpen(false)}
      >
     <div style={modalStyle} className={classes.paper}>
        <form className="header__signup">
        <center>
        <img className="header__login__image" src="/assets/olx-logo.png" alt="" srcset="" />
         <Input type="text"  placeholder="Enter your username" value={username} onChange={(event)=> setUsername(event.target.value)}  />
         <Input type="email"  placeholder="Enter your email" value={email} onChange={(event)=> setEmail(event.target.value)} />
         <Input type="password"  placeholder="Enter your password" value={password} onChange={(event)=> setPassword(event.target.value)} />
    
           

         </center>
         <button className="header__signup__button" type="submit" onClick={signup}>Sign up</button>
         
         <p>Already a user? </p> <Button onClick={()=> setOpen(false)}>Sign In</Button>
         
        </form>
                
      </div>
        
      </Modal>
      <Modal
        open={openSignIn}
        onClose={()=> setOpenSignIn(false)}
      >
     <div style={modalStyle} className={classes.paper}>
        <form className="header__signin">
        <center>
        <img className="header__login__image" src="/assets/olx-logo.png" alt="" srcset="" />
         <Input type="email"  placeholder="Enter your email" value={email} onChange={(event)=> setEmail(event.target.value)} />
         <Input type="password"  placeholder="Enter your password" value={password} onChange={(event)=> setPassword(event.target.value)} />
    
           

         </center>
         <button className="header__login__button" type="submit" onClick={signIn}>Sign In</button> <br />
        <p>Not a user? </p> <Button onClick={()=> setOpen(true)}>Sign Up</Button>
       
        </form>
       
                 
      </div>
        
      </Modal>
      

        </div>
    )
}

export default Header
