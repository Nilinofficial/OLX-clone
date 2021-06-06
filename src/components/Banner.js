import './Banner.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import React from 'react'

function Banner() {
    return (
        <div className="banner">
            <div className="banner__categories">
            <div className="banner__category">
 
             <div className="allcategories">
             <h3>All Categories</h3>
            <KeyboardArrowDownIcon/>

             </div>
             Scooters
              Commercial & Other Vehicles
              <p>For Rent: Houses & Apartments</p>
              <p>Cars</p>
              <p>Motorcycles</p>
              <p>Mobile Phones</p>
              <p>For Sale: Houses & Apartments</p>
             
            </div>
            
              </div>
        
             
            <img className="banner__image" src="/assets/banner copy.png" alt="" />
        </div>
    )
}

export default Banner
