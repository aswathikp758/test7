import './style.css';
import { useEffect, useState} from 'react';
import axios from "axios";
import Formtable from './Formtable';
import { Link } from 'react-router-dom';
import { BsFillRocketTakeoffFill} from "react-icons/bs";

axios.defaults.baseURL="https://test5-6umn.onrender.com/"

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

       
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " id="accordionSidebar">

           
            {/* <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
              <div>logo</div>
                <div className="sidebar-brand-text mx-3">Site name</div>
            </a> */}

            <li className="nav-item active page-top">
               
                    <span></span>
            </li>
            
            <li className="nav-item">
                {/* <a className="nav-link collapsed" href="index.html" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo"onClick={admindashboard}>
                   
                    <span>Home</span>
                </a> */}
                 <Link to={"/"} className="text-danger">Dashboard</Link>
                
               
               
            </li>

             <li className="nav-item">
                {/* <a className="nav-link collapsed" href="" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities" onClick={addproducts}>
                   
                    <span>Add Products</span>
                </a> */}
                 <Link to={"/addproduct"} className="text-danger">Add Product</Link>
                
            </li>


            <li className="nav-item">
                {/* <a className="nav-link collapsed" href="index.html" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities" onClick={manageproducts} >
                   
                    <span>Manage Products</span>
                </a> */}
                 <Link to={"/manageproduct"} className="text-danger">Manage Product</Link>
                
            </li>

          
          
           

           
           
            <li className="nav-item">
                {/* <a className="nav-link collapsed" href="index.html" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages" onClick={userdetails}>
                    
                    <span>User Details</span>
                </a> */}
                 
                 <Link to={"/userdetails"} className="text-danger">User Details</Link>

                 

               
            </li>

           
            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                   
                    <span>Order Details</span></a>
            </li>

            
          
            <div className="sidebar-card d-none d-lg-flex mt-auto">
                <BsFillRocketTakeoffFill/>
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
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
