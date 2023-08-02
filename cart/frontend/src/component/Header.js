import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assest/logo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector} from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
import  ReactDOM  from "react-dom";
import './component.styles.css';


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully");
    navigate('/login');
  };
  const adminLogin=()=>{
    navigate('/adminlogin');
  };


  const cartItemNumber = useSelector((state)=>state.product.cartItem)
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}

      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="">
            <img src={logo} alt="" className="" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex ">
            <NavLink to={""} className="text-black fnt" style={({ isActive, isPending }) => {    return {
      color: isActive ? "green" : "black",
      fontWeight: isPending ? "bold" : "",
    };
  }}>Home</NavLink>
            <NavLink to={"menu/64818b51e19a62796ed6fc91"} className="text-black fnt" style={({ isActive, isPending }) => {    return {
      color: isActive ? "green" : "black",
      fontWeight: isPending ? "bold" : "",
    };
  }}>Menu</NavLink>
            <NavLink to={"about"} className="text-black fnt" style={({ isActive, isPending }) => {    return {
      color: isActive ? "green" : "black",
      fontWeight: isPending ? "bold" : "",
    };
  }}>About</NavLink>
            <NavLink to={"contact"} className="text-black fnt" style={({ isActive, isPending }) => {    return {
      color: isActive ? "green" : "black",
      fontWeight: isPending ? "bold" : "",
    };
  }}>Contact</NavLink>
           
          </nav>
          <div className="text-2xl text-slate-600 relative">
          
              <Link to={"cart"} className="text-green-600"><BsCartFill />
              <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
                {cartItemNumber.length}
                
              </div>
            </Link>
          </div>
          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              {userData && userData.image ? (
                <img src={userData.image} alt="" className="h-full w-full" />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                {/* {userData?.email === process.env?.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"newproduct"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    New product
                  </Link>
                )} */}

                {userData &&userData.image ? (
                  <p
                    className="cursor-pointer text-white px-2 bg-red-500"
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName}){" "}
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer px-2 text-danger"
                  >
                    Login
                  </Link>
                )}
                <nav className="text-base md:text-lg flex flex-col md:hidden">
                   <NavLink to={""} className="text-black fnt" style={({ isActive, isPending }) => {    return {
      color: isActive ? "green" : "black",
      fontWeight: isPending ? "bold" : "",
    };
  }}>Home</NavLink>
            <NavLink to={"menu/64818b51e19a62796ed6fc91"} className="text-black fnt" style={({ isActive, isPending }) => {    return {
      color: isActive ? "green" : "black",
      fontWeight: isPending ? "bold" : "",
    };
  }}>Menu</NavLink>
            <NavLink to={"about"} className="text-black fnt" style={({ isActive, isPending }) => {    return {
      color: isActive ? "green" : "black",
      fontWeight: isPending ? "bold" : "",
    };
  }}>About</NavLink>
            <NavLink to={"contact"} className="text-black fnt" style={({ isActive, isPending }) => {    return {
      color: isActive ? "green" : "black",
      fontWeight: isPending ? "bold" : "",
    };
  }}>Contact</NavLink>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
      <button onClick={adminLogin} className="cursor-pointer">+admin</button>

      {/* mobile */}
    </header>
  );
};

export default Header;