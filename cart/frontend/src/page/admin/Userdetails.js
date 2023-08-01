import './style.css';
import { useEffect, useState} from 'react';
import axios from "axios";
import { Link} from 'react-router-dom';
import { BsFillRocketTakeoffFill} from "react-icons/bs";
import cartlogo from '../../assest/cartlogo.png';
axios.defaults.baseURL="https://test7-tx4x.onrender.com"

function Userdetails() {
 
  const [dataList,setDataList]=useState([])

 
     const getFetchData=async(e)=>{
     const data=await axios.get("/userdata")
     console.log(data);
       if(data.data.success){
       setDataList(data.data.data)
    
    }
   }
   useEffect(()=>{
       getFetchData();
   },[])
   
 


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

       

          <div className='tableContainer pt-5' >
            <h4 className='bg-dark text-white text-center'>Customer Details</h4>
            <table>
              <thead>
                <tr>
                  
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                { dataList[0]?(
                  dataList.map((el)=>{
                    console.log(el);
                    return(
                      <tr>
                        <td>{el.firstName}</td>
                        <td>{el.lastName}</td>
                        <td>{el.email}</td>
                       
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

export default Userdetails;
