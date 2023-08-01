/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import './footer.styles.css';
import { BsFacebook,BsLinkedin,BsWhatsapp,BsInstagram } from "react-icons/bs";
import {IoMdArrowDropright} from "react-icons/io";

const Footer = () => {

   const form = useRef();

  
  return (
    <section className=''>
         <div className='container-fluid bg-black pt-5 pb-5'>
            <div className='row'>
                <div className='col-lg-3 text-white text-justify'>
                   
                 <h4 className='text-white mb-3'>ABOUT US</h4>
                <p className='text-white'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer too. </p>
                  

                </div>
                <div className='col-lg-3 '>
                   
                <h4 className='text-white mb-3'>USEFUL LINKS</h4>
                <ul className='text-white' type='none'>
                <li className='form-inline'><IoMdArrowDropright className='text-success '/>Home</li>
                <li className='form-inline'><IoMdArrowDropright className='text-success '/>Menu</li>
                <li className='form-inline'><IoMdArrowDropright className='text-success '/>About</li>
                <li className='form-inline'><IoMdArrowDropright className='text-success '/>Contact</li>
               
                </ul>

                </div>
                <div className='col-lg-3 text-white'>
                    <h4 className='text-white mb-3'>OUR SERVICE</h4>
                    <ul className='text-white' type='none'>
                   <li className='form-inline'><IoMdArrowDropright className='text-success '/>Home delivery</li>
                    <li className='form-inline'><IoMdArrowDropright className='text-success '/>Fast Service</li>
                    <li className='form-inline'><IoMdArrowDropright className='text-success '/>Easy Return</li>
                    <li className='form-inline'><IoMdArrowDropright className='text-success '/>Low price</li>
                    </ul>
                </div>
                <div className='col-lg-3 text-white'>
                    <h4 className='text-white mb-3'>CONTACT US</h4>
                    <p className='text-white'>
                    3rd Floor, High Building
                    white Link Road , Near KYC
                    kerala, Kozhikode-673002

                    Phone: +13 67434543 , +13 6743567</p>
                    <p className='text-white'>Email: freshMarketofficial@gmail.com
                    </p>
                   </div>
                  </div>
         </div>
         <div className='container-fluid copy-section bg-black'>
                    <p className='text-white pl-5 pt-4 '>&copy;2023<span className='text-success'>freshMarket</span>.All Rights Reserved</p>
                </div>
         </section>
  )
}

export default Footer