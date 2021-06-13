import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import React from 'react'

function Footer() {
    return (
        <div className="footer">

            <div className="footer__top">

                <div className="footer__top__row1">
                    <h4>POPULAR LOCATIONS</h4>
                    <p>Kolkata</p>
                    <p>Mumbai</p>
                    <p>Chennai</p>
                    <p>Pune</p>         
                </div>

                <div className="footer__top__row2">
                    <h4>TRENDING LOCATIONS</h4>
                    <p>Bhubaneshwar</p>
                    <p>Hyderabad</p>
                    <p>Chandigarh</p>
                    <p>Nashik</p> 
                    </div>

                    <div className="footer__top__row3">
                    <h4>ABOUT US</h4>
                    <p>About OLX Group</p>
                    <p>Careers</p>
                    <p>Contact Us</p>
                    <p>OLXPeople</p>
                    <p>Waah Jobs</p>
                    </div>

                    <div className="footer__top__row4">
                    <h4>OLX</h4>
                    <p>Help</p>
                    <p>Sitemap</p>
                    <p>Legal & Privacy information</p>
                    </div>
                    <div className="footer__top__row5">
                    
                    <h4>FOLLOW US</h4>
                    <div className="socialconnections">
                    <a href="https://www.facebook.com/olxindia/"><FacebookIcon /></a>
                    <a href="https://www.instagram.com/olx_india/"><InstagramIcon/></a> 
                     <a href="https://twitter.com/OLX_India"><TwitterIcon/></a> 
                     <a href="https://www.youtube.com/user/OLXInTv"><YouTubeIcon/></a> 
                    </div>
                    </div>

                    

            </div>
             <div className="footer__bottom">
                <div className="footer__bottom__left">
                    <p> <strong>Other Countries </strong>Pakistan-SouthAfrica-Indonesia</p>
                </div>
                <div className="footer__bottom__right">
                    <p> <strong>Free Classifieds in India</strong> . © 2006-2021 OLX</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
