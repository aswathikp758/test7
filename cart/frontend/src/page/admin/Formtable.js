import React from 'react'
import "./style.css";
import { MdClose } from 'react-icons/md';
import {BsCloudUpload} from 'react-icons/bs';

const Formtable = ({handleSubmit,handleOnChange,handleClose,rest}) => {

  

  return (
      <div className="addContainer">
      
        <form onSubmit={handleSubmit}> 
          <div className="close-btn" onClick={handleClose}><MdClose/></div>
          <label htmlFor="name">Name:</label>
          <input type='text' id="name" name="name" onChange={handleOnChange} value={rest.name}/>

            <label htmlFor="category">Category:</label>
          <input type='text' id="category" name="category" onChange={handleOnChange } value={rest.email}/>

            <label htmlFor='image'>Image

        <div  className='h-40 w-full bg-slate-200 my-3 rounded flex items-center justify-center'>
          
          {
              rest.image ? <img src={rest.image} className="h-full" alt='' /> :<span className='text-5xl'><BsCloudUpload/></span> 
            }
          
          
          <input type={"file" } accept="image/*" id="image"  className="hidden"/>
        </div>
        </label>
        <label htmlFor='price' className='my-1'>Price</label>
        <input type={"text"} className='bg-slate-200 p-1' name="price" value={rest.price} onChange={handleOnChange}/>
 
      <label htmlFor='description'>Description</label>
      <textarea rows={3} className='bg-slate-200 p-1 my-1 resize-none' name="description" value={rest.description} onChange={handleOnChange}></textarea>

        <button className="btn">Submit</button>
        </form>

      </div>
  )
}

export default Formtable