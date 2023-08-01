import './style.css';
import { useEffect, useState} from 'react';
import axios from "axios";
import Formtable from './Formtable';
import { Link } from 'react-router-dom';
import { BsFillRocketTakeoffFill} from "react-icons/bs";
import cartlogo from '../../assest/cartlogo.png';

axios.defaults.baseURL="https://test7-tx4x.onrender.com"

function ManageProduct() {
  const [addSection,setAddSection]=useState(false)
  const [editSection,setEditSection]=useState(false)
  const [formData,setFormData]=useState({
    name:"",
    category:"",
    image:"",
    price:"",
    description:""

    

  })
  const [formDataEdit,setFormDataEdit]=useState({
    name:"",
    category:"",
    image:"",
    price:"",
    description:"",
    _id:""

  })
  const [dataList,setDataList]=useState([])

  const handleOnChange=(e)=>{
    const {value,name}=e.target
    setFormData((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
  }



   const handleSubmit=async(e)=>{
    e.preventDefault();
    const data=await axios.post("/create",formData)
    console.log(data)
    if(data.data.success){
       setAddSection(false)
       alert(data.data.message)
       getFetchData()
    }

   }
   const getFetchData=async(e)=>{
     const data=await axios.get("/getdata")
     console.log(data);
       if(data.data.success){
       setDataList(data.data.data)
    
    }
   }
   useEffect(()=>{
       getFetchData();
   },[])
   
  const handleDelete=async(id)=>{

     const data=await axios.delete("/delete/"+id)
      if(data.data.success){
      getFetchData()
      alert(data.data.message)
     }

  }
  const handleUpdate=async(e)=>{
    e.preventDefault()
     const data=await axios.put("/update",formDataEdit)
      if(data.data.success){
      getFetchData()
      alert(data.data.message)
      setEditSection(false)
     }

  }
  const handleEditOnChange=async(e)=>{
     const {value,name}=e.target
    setFormDataEdit((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })

  }
  const handleEdit=(el)=>{
    setFormDataEdit(el)
    setEditSection(true)

  }



  return (
    <>
     <div id="page-top">

       <div id="wrapper">

       
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion pt-5" id="accordionSidebar">
              <li className="nav-item">
                <Link to={"/admin"} className="text-white" >DASHBOARD</Link>
            </li>
            <li className="nav-item pt-3">
                <Link to={"/addproduct"} className="text-white">ADD PRODUCTS</Link>
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
       

       
        <div  className="d-flex flex-column">

       <div className='container'>
    
        {
          addSection && (
         <Formtable 
         handleSubmit={handleSubmit}
         handleOnChange={handleOnChange}
         handleClose={()=>setAddSection(false)}
         rest={formData}
         />
          )
        }
        {
          editSection &&(
            <Formtable 
         handleSubmit={handleUpdate}
         handleOnChange={handleEditOnChange}
         handleClose={()=>setEditSection(false)}
         rest={formDataEdit}
         />
          )
        }
          </div>

          <div className='tableContainer' >
            <h4 className='bg-dark text-white text-center'>Manage Product</h4>
            <table>
              <thead>
                <tr>
                  
                  <th>Name</th>
                  <th>Category</th>
                  {/* <th>Image</th> */}
                  <th>Price</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                { dataList[0]?(
                  dataList.map((el)=>{
                    console.log(el);
                    return(
                      <tr>
                        <td>{el.name}</td>
                        <td>{el.category}</td>
                        {/* <td>{el.Image}</td> */}
                        <td>{el.price}</td>
                        <td>{el.description}</td>
                        <td>
                        <button className='btn btn-edit' onClick={()=>handleEdit(el)}>Edit</button>
                        <button className='btn btn-delete' onClick={()=>handleDelete(el._id)}>Delete</button>
                            </td>
                      </tr>
                    )
                  })):(
                    <p style={{textAlign:"center"}}>No Data</p>
                  )
                }
              </tbody>
            </table>

          </div>                
                   
                   
            </div>
           

        </div>
        

    </div>
   
    </>
  );
}

export default ManageProduct;
