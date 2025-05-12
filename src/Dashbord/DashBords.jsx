import { useContext } from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaAppStore, FaBook, FaList, FaPersonRifle, FaRev, FaUsers, FaUtensils } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
 import MyProfile from "./MyProfile";
import { AuthContext } from "../Providers/AuthProvider";

 

const DashBors = () => {
const {user} = useContext(AuthContext)
 
// const isAdmin = true
const isAdmin = (user?.email === 'iamadmin@gmail.com')

    return (
        <div className="w-11/12 flex mx-auto py-5">
 

      {/* dashbord ar  side bars ba menu */}
      <div className="w-64  min-h-screen  bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <ul className="menu">
          
       {
        isAdmin ? <>
        
   <li>
          
          <NavLink className=' ' to="/dashbord/myprofile">   <FaHome></FaHome> Admin Profile</NavLink>
        </li>
        <li>
        
          <NavLink className=' ' to="/dashbord/adminAnnouncements">   <FaUtensils></FaUtensils>  Add Announcements</NavLink>
        </li>
       
        <li>
        
          <NavLink className=' ' to="/dashbord/allusers">   <FaUsers></FaUsers> All Users </NavLink>
        </li>




        </>:<>



        <li>
          
          <NavLink className=' ' to="/dashbord/myprofile">   <FaPersonRifle></FaPersonRifle> My Profile</NavLink>
        </li>
      
         
        </>
       }
          <div className="divider  "></div>
          <li>
          
            <NavLink className=' ' to="/">   <FaHome></FaHome> Home</NavLink>
          </li>
          {/* <li>
          
            <NavLink className=' ' to="/apartment">   <FaAppStore></FaAppStore> Apartments</NavLink>
          </li> */}
          {/* <li>
        
        <NavLink className=' ' to="/dashbord/Announcements">   <FaRev></FaRev> Announcements </NavLink>
      </li> */}
        </ul>
      </div>

      {/* dashbord ar content */}
      <div className="flex-1 p-4">
        <Outlet></Outlet>
      </div>
    </div>
    );
};

export default DashBors;