import './Header.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { auth, storage, db, firebase } from '../firebase/firebase'
import { useState, useEffect,useRef } from 'react'
import { Button, Input } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { v4 as uuidv4 } from 'uuid';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import {  Route,  useHistory } from "react-router-dom";
import BookIcon from '@material-ui/icons/Book';
import BusinessIcon from '@material-ui/icons/Business';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Fuse from "fuse.js"



//Modal - Material ui styles

import { Link } from "react-router-dom";
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

//states

function Header() {
  const [username, setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [user, setUser] = useState(null)
  const [openSignIn, setOpenSignIn] = useState(false)
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false)
  const [openSell, setOpenSell] = useState(false)
  const [productName, setProductName] = useState("")
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [image, setimage] = useState(null);
  const [hamburgerOpen, setHamburgeropen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [userDetails, setUserDetails] = useState(false);
  const [search, setSearch] = useState("");
  const [searchlist, setSearchlist] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    db.collection("products")
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

  const filteredName = products.filter(product => {
    return product.Name.toLowerCase().includes(search.toLowerCase())
   
  })



  const history = useHistory();
  const date = new Date()


  // Sell item functionality
  const addItem = (e) => {
    alert("Uploading...We will notify you when the upload completes.")
    storage.ref(`/images/${uuidv4()}-{image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {

        db.collection('products').add({
         
          phoneNumber: phoneNumber,
          Name: productName,
          category: productCategory,
          Price: productPrice,
          url: url,
          userid: user.uid,
          CreatedAt: date.toDateString(),
          description: description,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(setOpenSell(false)).then(alert("Upload Completed...")).then(history.push("/"))
      })
    })
  }



//Signup functionality 

  const signup = (event) => {
    event.preventDefault()
    auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
      authUser.user.sendEmailVerification()
        .then(alert("Verification Link send.Please check yout email"))
      return authUser.user.updateProfile({ displayName: username }).then(() => {

        db.collection('users').add({
          email: email,
          usernames: username,
          password:password,
          id:authUser.user.uid
         
        })
      })
    }).catch((error) =>
      alert(error.message)).then(setOpen(false))
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
         
      }
      else {
        setUser(null)
      }
    })

    return () => {
      unsubscribe();
    }
  }, [user, username])


  useEffect(()=> {
    (setUserDetails(false))
  },[user])

  //user logout functionality

  const logout = () => {
    auth.signOut().then(() => history.push("/"))
  }

  //user signIn functionality
  const signIn = (event) => {
    event.preventDefault()
    auth.signInWithEmailAndPassword(email, password).catch((err) => alert(err.message)).then(setOpenSignIn(false))
  }


  
  return (




    <div  className="header">
      <Route>
        {/*  Hamburger Logic starts */}
        <div>

          {hamburgerOpen && (<div className="header__burger__list">
            <div className="burger__list__top">
              <CloseIcon onClick={() => setHamburgeropen(!hamburgerOpen)} />
              <svg className="olx__logo" width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>


            </div>
            <div className="burger__list__login">

              {user ? (<p className="burger__list__login__log__p2" onClick={() => auth.signOut()}>Logout {user.displayName} </p>) : (<div className="burger__list__login__log">
                <p className="burger__list__login__log__p1">Enter to your account</p>
                <p className="burger__list__login__log__p2" onClick={() => setOpenSignIn(true)}>Log in to your account</p>

              </div>)}
               {/*  Hamburger Logic ends */}
            </div>


            <div className="burger__list__bottom">
              <div className="burger__list__bottom1">
                <CameraAltIcon />
                <p onClick={() => setOpenSell(true)} >Start Selling</p>
              </div>
              <div className="burger__list__bottom2">
                <ChatBubbleOutlineIcon />
                <p>Chat</p>
              </div>

            </div>
          </div>)}

        </div>
        <MenuIcon onClick={() => setHamburgeropen(!hamburgerOpen)} className="hamburger" style={{ fontSize: 40 }} />
        <div className="header__components">
          <Link to="/"><svg className="olx__logo" width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg></Link>


             {/* Location */}
          <div className="first__input">
          <SearchIcon className="second__input__search__icon" style={{ fontSize: 40 }}  /> 
            <div>  <input className="location" type="text" placeholder="Find my location"   /> </div>
          </div>

          {/* Item search */}

          <div className="second">
            <input onClick={() => setSearchlist(!searchlist)} placeholder="Find Cars,Mobile Phones and more..." className="second__input__search" type="text" value={search} onChange={(e)=> setSearch(e.target.value) } />
            <button className="second__searchbutton">

              < SearchIcon className="second__input__search__icon" style={{ fontSize: 40 }} />
            </button>
             {searchlist && (<div className="searchitems">
{filteredName.map((product) => {
        return (
          <div className="searchitems__list"
            onClick={() => {history.push(`/view/${product.id}`); setSearchlist(!searchlist) }}
          >
            
           
            <p className="searched__item">{product.Name}</p>
            
          </div>
        );
      })}
</div>)}
           
          </div>

        
        

          <div className="language">
            <h4>ENGLISH</h4>
            <KeyboardArrowDownIcon />
          </div>

          <div className="icons">
            {user ? (<div> <ChatBubbleOutlineIcon />
            </div>) : (<div> </div>)}

          </div>


             
          <div className="login_name">
            {user ? (<div login_details >
              <img className="login__avatar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt=""/>
              <KeyboardArrowDownIcon onClick={() => { setUserDetails(!userDetails) }} />

             {/* User details drop down */}
              {userDetails && <div className="userDetails__modal">
               

                <div className="userDetails__login">
                
               
                  
                  <div className="userDetails__login__right">
                    <p>Hello,</p>
                    <h4>{user.displayName}</h4>
                    <p onClick={() => history.push("/Viewandedit")} className="viewandedit">view and edit profile</p>
                  </div>
                </div>

                <div className="userDetails__login_second">

                  <div className="myads">
                    <BookIcon />
                    <p>My Ads</p>
                  </div>
                  <div className="mypackages">
                    <BusinessIcon />
                    <p>My Business Packages</p>
                  </div>

                  <div className="billing">
                    <CreditCardIcon />
                    <p>Bought Packages & Billing</p>
                  </div>

                </div>


                <div className="login__third">

                  <div className="myads">
                    <HelpIcon />
                    <p>Help</p>
                  </div>


                  <div className="myads">
                    <SettingsIcon />
                    <p>Settings</p>
                  </div>

                </div>

                <div className="login__third">

                  <div className="myads">
                    <ExitToAppIcon />
                    <p onClick={logout}>Log out</p>
                  </div>
                </div>
              </div>}


            </div>
            )
              : (
                <div className="app__loginContainer">
                  <Button onClick={() => setOpenSignIn(true)}>Login</Button>

                </div>

              )
            }
          </div>

          <img onClick={() => setOpenSell(true)} className="sell" src="/1178080.png" alt="" />

          {/* Sign up */}

        </div>

        {user ? (<div> </div>) : (<Modal
          open={open}
          onClose={() => setOpen(false)}
        >

          <div style={modalStyle} className={classes.paper}>
            <form className="header__signup">
              <center>
                <img className="header__login__image" src="/assets/olx-logo.png" alt="" srcset="" />
              

                  
                <Input type="text" placeholder="Enter your username" value={username} onChange={(event) => setUsername(event.target.value)} />
                <Input type="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input type="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} />

              </center>
              <button className="header__signup__button" type="submit" onClick={signup}>Sign up</button>
              <p>Already a user? </p> <Button onClick={() => setOpen(false)}>Sign In</Button>

            </form>

          </div>

        </Modal>
        )}



        {/* Sign In */}

        <Modal
          open={openSignIn}
          onClose={() => setOpenSignIn(false)}
        >
          <div style={modalStyle} className={classes.paper}>
            <form className="header__signin">
              <center>
                <img className="header__login__image" src="/assets/olx-logo.png" alt="" srcset="" />


                {user ? (<p>    <Button onClick={() => auth.signOut()}>   Logout {user.displayName} </Button> </p>)
                  : (

                    <div className="header__mobile__login" >


                      <Input type="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} />
                      <Input className="" type="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} />
                      <button className="header__login__button" type="submit" onClick={signIn}>Login</button> <br />
                      <p>Not a user? </p> <Button onClick={() => setOpen(true)}>Sign Up</Button>
                     
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

        <Modal className="modal__sell"
          open={openSell}
          onClose={() => setOpenSell(false)}
        >
          <div style={modalStyle} className={classes.paper}>
            <form className="header__sell">
              <center>
                <img className="header__sell__image" src="/assets/olx-logo.png" alt="" srcset="" />



                {user ? (<div className="header__sell__content" >
                  
                  <p> Enter Your Phone</p>
                  <Input inputProps={{ maxLength: 10 }} type="number" placeholder="eg: 1234567891" value={phoneNumber} onChange={(event) => { setPhoneNumber(event.target.value) }} />


                  <p>Product Name</p>
                  <Input inputProps={{ maxLength: 22 }} type="text" placeholder="eg: Galaxy S21 Ultra" maxLength="11" value={productName} onChange={(event) => { setProductName(event.target.value) }} />

                  <p>Category</p>
                  <Input inputProps={{ maxLength: 22 }} type="text" placeholder="eg: Mobiles and Gadgets" value={productCategory} onChange={(event) => { setProductCategory(event.target.value) }} />

                  <p>Price</p>
                  <Input type="number" placeholder="eg: 12,000,0" value={productPrice} onChange={(event) => { setProductPrice(event.target.value) }} />


                  <p>Product image</p>
                  <img width="100px" height="100px" src={image ? URL.createObjectURL(image) : ""} alt="" />
                  <Input type="file" onChange={(event) => { setimage(event.target.files[0]) }} />
                  <p> Description</p>
                  <Input type="text" value={description} onChange={(event) => { setDescription(event.target.value) }} />
                  <Button onClick={addItem}>Add Item</Button>
                </div>)
                  : (<div><p>Sign in to post ad</p>

                  </div>
                  )
                }
              </center>
            </form>
          </div>
        </Modal>
      </Route>

      
    </div>








  )
}

export default Header
