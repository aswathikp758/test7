import React from 'react'
import Footer from './footer/Footer'
import veg from '../assest/veg.jpg';
import veg2 from '../assest/veg2.jpg';
import veg3 from '../assest/veg3.jpg';
import './page.styles.css';
const About = () => {
  return (
    <div >
      <div className='w-full'>
        <img src={veg} alt='' className=''/></div>
      <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-lg-6'>
            <img src={veg2} alt='' className='img-fluid' />
          </div>
          <div className='col-lg-6'>
           <h1 className='text-success font-weight-bold pt-5 pb-3' >Welcome to Vegefoods an eCommerce website</h1>
        <p className='text-justify'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

        But nothing the copy said could convince her and so it didn’t take long until a
        few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, 
        where they abused her for their.</p>
        <button className='btn btn-success'>SHOP NOW</button>
          </div>
        </div>
      </div> 
      <div className='container-fluid mt-5'>
        <img src={veg3} alt='' className='img-fluid'/>
      </div>
       <Footer/>
    </div>
  )
}

export default About