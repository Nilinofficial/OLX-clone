import './Banner.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import React,{useState} from 'react'
import {Link } from "react-router-dom";
import Modal  from '@material-ui/core/Modal';
import MenuIcon from '@material-ui/icons/Menu';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer'



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




function Banner() {


    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open,setOpen] = useState(false)
    

    return (
        <div className="banner">
            
        
            <div className="banner__categories">
            <div className="banner__category">
 
             <div className="allcategories">
             <h3>All Categories</h3>
            <KeyboardArrowDownIcon  onClick={()=> setOpen(true)}/>
            
             <p> Scooters</p> 
              <p>Commercial & Other Vehicles</p>
              <p>For Rent: Houses & Apartments</p>
              <p>Cars</p>
              <p>Motorcycles</p>
              <p>Mobile Phones</p>
              <p>For Sale: Houses & Apartments</p>
           
             </div>
            
         
             
            </div>
            
              </div>
        
             
            <img className="banner__image" src="/assets/banner copy.png" alt="" />


          
           
            <Modal
        open={open}
        onClose={()=> setOpen(false)}
      >
     <div style={modalStyle} className="banner__allcategories">
        <form className="banner__allcategories">
        <div className="row1">
        <h6>OLX Autos (Cars)</h6>
        <Link to ="/cars"  ><p  >Cars</p></Link>
        </div>

        <div className="row1">
        <h6>Bikes</h6>
        <Link to ="/cars"  ><p  >Motorcycles</p></Link>
        <Link to ="/cars"  ><p  >Scooters</p></Link>
        <Link to =""> <p>Spare parts</p></Link>
        <Link to =""  ><p  >Bicycles</p></Link>
        </div>
         
        
        <div className="row1">
        <h6>Mobiles and Gadgets</h6>
        <Link to ="/cars"  ><p>TVs, Video - Audio</p></Link>
        <Link to ="/cars"  ><p>Kitchen & Other Appliances</p></Link>
        <Link to ="/cars"  ><p  >Computers & Laptops</p></Link>
        <Link to ="/cars"  ><p>Cameras & Lenses</p></Link>
        <Link to ="/cars"  ><p>Fridges</p></Link>
        <Link to ="/cars"  ><p>Computer Accessories</p></Link>
        <Link to ="/cars"  ><p  >Hard Disks, Printers & Monitors</p></Link>
    
        </div>
         
        
        <div className="row1">
        <h6>Commercial Vehicles & Spares</h6>
        <Link to ="/cars"  ><p  >Commercial & Other Vehicles</p></Link>
        <Link to ="/cars"  ><p  >Spare parts</p></Link>
        </div>
         
        
        
        <div className="row1">
        <h6>Furniture</h6>
        <Link to ="/cars"  ><p  >Sofa & Dining</p></Link>
        </div>
         
      
        </form>
       
         
      </div>
        
      </Modal>

  

        </div>
    )
}

export default Banner
