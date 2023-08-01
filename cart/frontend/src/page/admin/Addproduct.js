import React,{useState} from 'react'
import { BsCloudUpload, BsFillRocketTakeoffFill } from 'react-icons/bs'
import { ImagetoBase64 } from '../../utility/ImagetoBase64'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import './style.css'
import cartlogo from '../../assest/cartlogo.png';

const Addproduct = () => {
    
  const [data,setData]=useState({
    name:"",
    category:"",
    image:"",
    price:"",
    description:""
  })

  const handleOnChange=(e)=>{
    const {name,value}=e.target

    setData((preve)=>{
      return{
        ...preve,
        [name]:value
      }

    })

  }

const uploadImage=async(e)=>{

   const data = await ImagetoBase64(e.target.files[0])
      // console.log(data)

      setData((preve)=>{
        return{
          ...preve,
          image:data

          
        }
      })

}

const handleSubmit=async(e)=>{
  e.preventDefault()
  console.log(data)

  const {name,image,category,price}=data
  if(name&& image && category && price )
  {

    const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`,{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(data)
  })
  const fetchRes=await fetchData.json()
  console.log(fetchRes)
  toast(fetchRes.message)

  setData(()=>{
    return{
      name:"",
      category:"",
      image:"",
      price:"",
      description:""
    }
  })

}
else{
  toast("Enter required Fields")
}

  }
  





  return (
     
      <div id="page-top">

       <div id="wrapper">

       
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion pt-5" id="accordionSidebar">
              <li className="nav-item">
                <Link to={"/admin"} className="text-white" >DASHBOARD</Link>
            </li>
            <li className="nav-item pt-3">
                <Link to={"/addproduct"} className="text-white active">ADD PRODUCTS</Link>
            </li>
            <li className="nav-item pt-3" >
                <Link to={"/manageproduct"} className="text-white">MANAGE PRODUCTS</Link>
            </li>
            <li className="nav-item pt-3">
                <Link to={"/userdetails"} className="text-white">ALL USERS</Link>
            </li>
            <div className="sidebar-card d-none d-lg-flex mt-auto">
               <img src={cartlogo} alt=''/>
            </div>

        </ul>
        {/* ---------------------------------------------------------- */}
       

       
      
               
      <div className=''>
      <form className='ml-96  form-w shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
        <label htmlFor='name'></label>
        <input type={"text"} name="name" value={data.name} className='bg-slate-200 p-1 'onChange={handleOnChange}/>
        <label htmlFor='category'>Category</label>
        <select className='bg-slate-200 p-1 my-1' name= "category" value={data.category} id='category' onChange={handleOnChange}>
          <option value={"other"}>Select category</option>
          <option value={"Fruits"}>Fruits</option>
          <option value={"Vegetable"}>Vegetable</option>
          <option value={"Icecream"}>Icecream</option>
          <option value={"Dosa"}>Dosa</option>
          <option value={"Pizza"}>Pizza</option>
        </select>
        <label htmlFor='image'>Image

        <div  className='h-40 w-full bg-slate-200 my-3 rounded flex items-center justify-center'>
          {/* <span className='text-5xl'><BsCloudUpload/></span>
          <img  alt ='' src={data.image} className="h-full"/>    */}
          
          {
              data.image ? <img src={data.image} className="h-full" alt='' /> :<span className='text-5xl'><BsCloudUpload/></span> 
            }
          
          
          <input type={"file" } accept="image/*" id="image" onChange={uploadImage} className="hidden"/>
        </div>
        </label>
        <label htmlFor='price' className='my-1'>Price</label>
        <input type={"text"} className='bg-slate-200 p-1' name="price" value={data.price} onChange={handleOnChange}/>
 
      <label htmlFor='description'>Description</label>
      <textarea rows={3} className='bg-slate-200 p-1 my-1 resize-none' name="description" value={data.description} onChange={handleOnChange}></textarea>

      <button className='bg-red-500 hover:bg-red-600 text-white text-lg  my-2 font-medium drop-shadow' >Save</button>
      </form>
    </div>


            </div>
        </div>
                   
                        


    
  )
}

export default Addproduct