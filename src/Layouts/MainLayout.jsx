import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
// import { useContext } from "react";
import { ThemeContext } from "../Components/ThemeContext ";

 

const MainLayout = () => {

 
        
    return (
        <div>
  
            <Navbar></Navbar>
            <div className="min-h-[200px] py-20 w-11/12 mx-auto ">
                <Outlet></Outlet>
            </div>
          
        </div>
    );
};

export default MainLayout;