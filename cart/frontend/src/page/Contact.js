import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import banner2 from '../assest/banner4.jpg';
import Footer from './footer/Footer';

const Contact = () => {

 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w6i5kuv', 'template_hw5kq4y', form.current, 'StdL-dZoRgaZ4bTOT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div>
     <div><img src={banner2} alt='' className='img-height'/></div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6'> <h2 className='text-2md md:text-2xl font-bold py-3  text-center'> CONTACT FORM</h2>
      <form ref={form} onSubmit={sendEmail} className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white'>
        <label htmlFor='name'>Name</label>
        <input type={"text"} name="from_name"  className='bg-slate-200 p-1'/>
       
        <label htmlFor='email' className='my-1'>Email</label>
        <input type={"text"} className='bg-slate-200 p-1' name="from_email" />
 
      <label htmlFor='message'>Message</label>
      <textarea rows={3} className='bg-slate-200 p-1 my-1 resize-none' name="message" ></textarea>

      <button  value="Send" className='bg-red-500 hover:bg-red-600 text-white text-lg  my-2 font-medium drop-shadow' >Submit</button>
      </form></div>
          <div className='col-lg-6 map-margin mb-5'>
            <iframe className='border border-secondary' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250436.59730899605!2d75.6459975936001!3d11.256126131454613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1689761579913!5m2!1sen!2sin" width="500" height="320"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      
    </div>
     <Footer/>

    </div>
  )
}

export default Contact