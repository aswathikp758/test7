import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Home from './page/Home';
import Menu from './page/Menu';
import About from './page/About';
import Contact from './page/Contact';
import Login from './page/Login';
import Newproduct from './page/Newproduct';
import Signup from './page/Signup';
import {store} from './redux/index';
import {Provider} from "react-redux";
import Cart from './page/Cart';
import Success from './page/Success';
import Cancel from './page/Cancel';
import Dashboard from './page/admin/Dashboard';
import Addproduct from './page/admin/Addproduct';
import ManageProduct from './page/admin/ManageProduct';
import Userdetails from './page/admin/Userdetails';
import Adminlogin from './page/admin/Adminlogin';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='menu/:filterby' element={<Menu/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path="success" element={<Success/>}/>
      <Route path="cancel" element={<Cancel/>}/>
    
         <Route path='admin' element={<Dashboard/>}/> 
       
         <Route path='addproduct' element={<Addproduct/>}/> 
          <Route path='manageproduct' element={<ManageProduct/>}/> 
      <Route path='newproduct' element={<Newproduct/>}/> 
       <Route path='userdetails' element={<Userdetails/>}/>
        <Route path='adminlogin' element={<Adminlogin/>}/>  
   
    
     
      
      
    </Route>
    
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 <RouterProvider router={router}/>

 </Provider>
);

