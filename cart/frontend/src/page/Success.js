import React from 'react'
import tick from '../assest/tick.png'
import { Link, useNavigate } from 'react-router-dom';


const Success = () => {
 const navigate = useNavigate();
 
  const home=()=>{
    navigate('/');
  };
  
  return (
    <div className='  jumbotron'>
      <img src={tick} alt='' className='img mx-auto d-block'/>
    <div><h5 className='text-center text-success mb-5'>Your Order has been Received</h5> </div>
    <div><button className='btn btn-outline-danger' onClick={home}>Continue Shopping</button></div>
    </div>
  )
}

export default Success