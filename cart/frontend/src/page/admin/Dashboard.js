import React from 'react'
import './sb-admin-2.css'
import './sb-admin-2.min.css'
import { Link, NavLink } from "react-router-dom";
import {BsFillRocketTakeoffFill} from "react-icons/bs"
import dashboard from "../../assest/dashboard.jpg";
import cartlogo from '../../assest/cartlogo.png';


const Dashboard = () => {
     
  return (
    
    <div id="">

       <div id="wrapper">

       
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion pt-5" id="accordionSidebar">
              <li className="nav-item">
                <Link to={"/admin"} className="text-white active" >DASHBOARD</Link>
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
       

       
        <div id="content-wrapper" className="d-flex flex-column">

          
            <div id="content">

                <div className="container-fluid text-dark display-4 font-weight-bold mt-5 text-center">
                {/* <img src={dashboard} alt='' className='ml-5'/> */}
                 ADMIN DASHBOARD
                 
            </div>
           

        </div>
        

    </div>
  
</div>
</div>

  )
}

export default Dashboard