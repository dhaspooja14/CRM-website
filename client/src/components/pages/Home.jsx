import React, { useState } from 'react';
import '../pages/Home.css';
// import logo from '../images/logo.png';
// import {Link} from 'react-scroll';
import 'font-awesome/css/font-awesome.min.css';
import DropDownProfile from './DropDownProfile';

function Home(){
	const[openProfile,setOpenProfile] = useState(false);
    return (
        <div id='main'><style>{'body{ background-color: rgb(225, 225, 243); }'}</style>
		 {
		openProfile && <DropDownProfile />
		} 
			
		 <img src={require('./profile.jpg')} onClick={()=>setOpenProfile((prev)=> !prev)} 
		 style={{width: 70, height: 70, borderRadius: 400/ 2,border:'1px solid black', position:'absolute',right: 12, top: 10,cursor:'pointer'}} />
            <div className='header-heading'>
                <h2>WELCOME!</h2>
                <h1><span>CRM | </span> Website</h1>
                <p className='details'>CRM Website made for media industry!</p>
            </div>
        <div id='about'>
            <div className='about-text'>
                <h1>LEARN MORE ABOUT US!</h1><br/>
                <p>jcbdhvbeuhvejicndijcnedcjnevjevnjvjvenjvevjecnejdcnjdvdjvd
                    cedjnjvndjfv fejvnejvienfvjifvn jivenjifenfijenvieneiv enrfeivnevieejvneifvneivnejivnfhvughefuvjnecmsodkcm
                    wdkxmidcnijvnifjvndkcmvdkcd cejnvjfvn dfkjvn.
                </p>
            </div>
			
        </div>
        <footer className="footer">
  	    <div className="contain">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>About Us</h4>
  	 			<ul>
  	 				<li><a href="#">Our Story</a></li>
  	 				<li><a href="#">Clients</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Services</h4>
  	 			<ul>
  	 				<li><a href="#">Marketing</a></li>
                    <li><a href="#">Consulting</a></li>
                    <li><a href="#">FAQ</a></li>
  	 			</ul>
  	 		</div>
  	 		{/* <div className="footer-col">
  	 			<h4>Contact Us</h4>
  	 			<ul>
  	 				<li><a href="#">Maharshtra</a></li>
  	 				<li><a href="#">Hyderabad</a></li>
                    <li><a href="#">Support</a></li>

  	 			</ul>
  	 		</div> */}
  	 		<div className="footer-col">
  	 			<h4>Social</h4>
  	 			<div className="social-links">
  	 				<a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
  	 				<a href="https://twitter.com/i/flow/login"><i className="fa fa-twitter"></i></a>
  	 				<a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
  	 				<a href="https://www.linkedin.com/home"><i className="fa fa-linkedin"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  
        </div>
    )
}

export default Home;