import React from 'react'
import './sb-admin-2.css'
import './sb-admin-2.min.css'
import { Link } from "react-router-dom";
import {BsFillRocketTakeoffFill} from "react-icons/bs"
import dashboard from "../../assest/dashboard.jpg";


const Dashboard = () => {
     
  return (
    
    <div id="">

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
       

       
        <div id="content-wrapper" className="d-flex flex-column">

          
            <div id="content">

                <div className="container-fluid">
                <img src={dashboard} alt='' className='ml-5'/>
                 
            </div>
           

        </div>
        

    </div>
  
</div>
</div>

  )
}

export default Dashboard