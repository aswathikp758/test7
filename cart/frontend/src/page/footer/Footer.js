/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import './footer.styles.css';
import { BsFacebook,BsLinkedin,BsWhatsapp,BsInstagram } from "react-icons/bs";
import {IoMdArrowDropright} from "react-icons/io";

const Footer = () => {

   const form = useRef();

  
  return (
    <section className=''>
         <div className='container-fluid bg-dark pt-5 pb-5'>
            <div className='row'>
                <div className='col-lg-3 text-white text-justify'>
                   
                 <h4 className='text-white'>ABOUT US</h4>
                <p className='text-white'> we are one of the leading IT companies in calicut, kerala. we strive to design, develop and deliver high-end and flawless services to our clients which
                meet all criteria </p>
                  

                </div>
                <div className='col-lg-3 '>
                   
                <h4 className='text-white'>USEFUL LINKS</h4>
                <ul className='text-white' type='none'>
                <li><span><IoMdArrowDropright className='text-success '/></span>Home</li>
                <li><span><IoMdArrowDropright className='text-success '/></span>Menu</li>
                <li><span><IoMdArrowDropright className='text-success '/></span>About</li>
                <li><span><IoMdArrowDropright className='text-success '/></span>Contact</li>
               
                </ul>

                </div>
                <div className='col-lg-3 text-white'>
                    <h4 className='text-white'>OUR SERVICE</h4>
                    <ul className='text-white' type='none'>
                   <li><span><IoMdArrowDropright className='text-success '/></span>Home delivery</li>
                    <li><span><IoMdArrowDropright className='text-success '/></span>Fast Service</li>
                    <li><span><IoMdArrowDropright className='text-success '/></span>Easy Return</li>
                    <li><span><IoMdArrowDropright className='text-success '/></span>Low price</li>
                    </ul>
                </div>
                <div className='col-lg-3 text-white'>
                    <h4 className='text-white'>CONTACT US</h4>
                    <p className='text-white'>
                    3rd Floor, High Building
                    white Link Road , Near KYC
                    kerala, Kozhikode-673002

                    Phone: +13 67434543 , +13 6743567</p>
                    <p className='text-white'>Email: freshMarketofficial@gmail.com
                    </p>
                     {/* <div><i><BsFacebook className='social-icon'/></i><i><BsWhatsapp className='social-icon'/></i>
                <i><BsLinkedin className='social-icon'/></i><i><BsInstagram className='social-icon'/></i></div>   
                   */}
                  </div>
                  </div>
         </div>
         <div className='container-fluid copy-section bg-black'>
                    <p className='text-white pl-5 pt-4 '>&copy;2023<span className='text-danger'>freshMarket</span>.All Rights Reserved</p>
                </div>
            
           
             
         </section>
  )
}

export default Footer